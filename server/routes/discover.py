from fastapi import APIRouter, Depends
import spotipy
from shrillecho.utility.discovery import EveryNoiseSeed
from dependencies.spotify_client import (get_spotify_client)
from pydantic import BaseModel
router = APIRouter()


class Item(BaseModel):
    song_id: str

@router.post("/discovery")
async def discovery(item: Item, sp: spotipy.Spotify = Depends(get_spotify_client)):
    print(item.song_id)
    return item
