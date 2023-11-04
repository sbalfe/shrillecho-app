from fastapi import APIRouter, Request, Depends
import spotipy
from dependencies.spotify_client import get_spotify_client

router = APIRouter()

@router.get("/me")
def get_tracks(request: Request, sp: spotipy.Spotify = Depends(get_spotify_client)):
    me = sp.me()
    print(me)
    return  me 
