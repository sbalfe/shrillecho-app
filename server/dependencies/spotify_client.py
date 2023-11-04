from fastapi import HTTPException, Request
import spotipy
import json

# internal modules
from core.database import r

def get_spotify_client(request: Request) -> spotipy.Spotify:

    session_id = request.cookies.get("shrillecho-biscuit")
    print("SESSION ID", session_id)

    if not session_id:
       
        raise HTTPException(status_code=401, detail="Not authenticated")
    token_info = json.loads(r.get(session_id))
    print(token_info)
    if not token_info:
        raise HTTPException(status_code=401, detail="Token not found")
    
    # Todo - Check if the access token has expired, if so request a new one here
    # https://developer.spotify.com/documentation/web-api/tutorials/refreshing-tokens
    
    return spotipy.Spotify(auth=token_info['access_token'])