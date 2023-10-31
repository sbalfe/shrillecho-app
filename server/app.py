# Standard library imports
import base64
import json
import os
import random
from urllib.parse import urlencode
import string

# Third-party imports
from dotenv import load_dotenv
import graphene
from fastapi import Depends, FastAPI, HTTPException, Request, Response
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse, RedirectResponse
import redis
import requests
import spotipy
import spotipy.util as util
from spotipy import CacheHandler, SpotifyOAuth
from starlette_graphene3 import GraphQLApp, make_graphiql_handler
from starlette.middleware.sessions import SessionMiddleware

# Local application imports
from shrillecho.auth import oauth
from shrillecho.playlist.playlist_engine import PlaylistEngine
from shrillecho.types.playlists import Playlist
import gtype

load_dotenv("./.env")


class Query(graphene.ObjectType):
    playlist = graphene.Field(gtype.Playlist)
    def resolve_playlist(self, info) -> Playlist:
        sp: spotipy.Spotify= info.context['spotify_client']
        playlist_engine = PlaylistEngine(sp)
        return playlist_engine.load_playlist(PlaylistEngine.parse_id_from_url('https://open.spotify.com/playlist/4HXmYb7GVQkvYynh0RenQz?si=e1f2a3984cee4068'))

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_credentials= True,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
  
)


schema = graphene.Schema(query=Query)

gql = GraphQLApp(schema, on_get=make_graphiql_handler())

def authenticate():
    print("Authenticating")
    return oauth.authenticate()

sp = authenticate()
gql.context_value =  {
    "spotify_client": authenticate()
}

app.mount("/graphql", gql)


sp_oauth = SpotifyOAuth(os.environ.get("SPOTIPY_CLIENT_ID"), 
                        os.environ.get("SPOTIPY_CLIENT_SECRET"), 
                        os.environ.get("REDIRECT_URI"), 
                        scope=os.environ.get("SCOPE"),
                        show_dialog=True)

@app.get("/currently-playing")
async def pause():
    try:
        current_track = sp.current_playback()
        
        if not current_track:
            return {"message": "No track is currently playing."}

        track_name = current_track['item']['name']
        artist_name = ', '.join([artist['name'] for artist in current_track['item']['artists']])
        cover_art_url = current_track['item']['album']['images'][1]['url']
        
        return {
            "track_name": track_name,
            "artist_name": artist_name,
            "cover_art_url": cover_art_url,
            "progress": current_track['progress_ms']
        }
    except spotipy.exceptions.SpotifyException as e:
        return {"error": str(e)}
    

r = redis.Redis(host='localhost', port=6379, db=0)

@app.get("/toggle-playback")
async def play():
  devices = sp.devices()['devices']
  id = ''
  for d in devices:
      if d['name'] == 'shrillecho-app':
          id = d['id']
  playback_state = sp.current_playback()
  if playback_state:
    if playback_state['is_playing']:
        sp.pause_playback()
    else:
        sp.start_playback()
  else:
    print("no playback state")
    sp.start_playback(device_id=id, uris=['spotify:track:6Xe6LY9gii4gyEsCx4J6vd'])

@app.get("/next")
async def skip():
    sp.next_track()


@app.get("/spotipy-auth")
async def spotauth():
    return {"url": sp_oauth.get_authorize_url()}

@app.get("/redirect")
async def sp_redirect(code:str, response: Response):
    token_info = None

    if not r.get(code):
        token_info = sp_oauth.get_access_token(code=code)
    else:
        token_info = json.loads(r.get(code))
   
    r.set(code, json.dumps(token_info))

    response = RedirectResponse("http://localhost:3000/")
    response.set_cookie(key="shrillecho-id", value=code, domain="localhost")
    return response


def get_spotify_client(request: Request) -> spotipy.Spotify:
    session_id = request.cookies.get("shrillecho-id")
    if not id:
        raise HTTPException(status_code=401, detail="Not authenticated")
    token_info = json.loads(r.get(session_id))
    if not token_info:
        raise HTTPException(status_code=401, detail="Token not found")
    return spotipy.Spotify(auth=token_info['access_token'])

@app.get("/me")
def get_tracks(request: Request, sp: spotipy.Spotify = Depends(get_spotify_client)):
    return sp.me()


