import json
from core.database import r
from core.spotify_auth import sp_oauth
from fastapi import APIRouter, Request, Response
from fastapi.responses import RedirectResponse
import httpx
import spotipy
from core import config

router = APIRouter()

@router.get("/spotipy-auth")
async def spotauth(request: Request):

    referer = request.headers.get("referer")
    print(referer, config.next_origin)
    print(referer, config.dorito_origin)

    if referer == config.next_origin:
        sp_oauth.redirect_uri = f'{config.fast_origin}redirect'
    elif referer == config.dorito_origin:
        sp_oauth.redirect_uri = f'{config.fast_origin}dorito_redirect'

    return {"url": sp_oauth.get_authorize_url()}
   

@router.get("/redirect")
async def sp_redirect(code:str, response: Response):
    token_info = sp_oauth.get_access_token(code=code, check_cache=False)
    r.set(code, json.dumps(token_info))
    response = RedirectResponse(f"{config.next_origin}?authed=yes")
    response.set_cookie(key="shrillecho-biscuit", value=code, secure=config.secure, samesite=config.samesite, domain=config.cookie)
    return response


@router.get("/dorito_redirect")
async def sp_redirect(code:str, response: Response):
    token_info = sp_oauth.get_access_token(code=code, check_cache=False)
    r.set(code, json.dumps(token_info))
    sp = spotipy.Spotify(auth=token_info['access_token'])
    name = sp.me()['display_name']
    data = {
        "name": name,  
        "shrillecho-biscuit": code
    }
    async with httpx.AsyncClient() as client:
        await client.post(f"{config.dorito_origin}return_session", json=data)
    
    response = RedirectResponse(f"{config.dorito_origin}logged")
    return response
   