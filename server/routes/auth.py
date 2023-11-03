import json
from core.database import r
from core.spotify_auth import sp_oauth
from fastapi import APIRouter, Request, Response
from fastapi.responses import RedirectResponse

router = APIRouter()

@router.get("/spotipy-auth")
async def spotauth(request: Request):
    # If they have a cookie called shrillecho-id, presume they are authorized, we can add jwt to make this more effective maybe
    if not request.cookies.get("shrillecho-id"):
        return {"url": sp_oauth.get_authorize_url()}
    else:
        return {"logged in": True}
       

@router.get("/redirect")
async def sp_redirect(code:str, response: Response):
    token_info = sp_oauth.get_access_token(code=code)
    print("token", token_info["access_token"])
    r.set(code, json.dumps(token_info))
    response = RedirectResponse("http://shrillecho.app/")
    response.set_cookie(key="shrillecho-id", value=code, domain="shrillecho.app")
    return response