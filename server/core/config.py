from dotenv import load_dotenv
import os

load_dotenv("./.env")

SPOTIPY_CLIENT_ID = os.environ.get("SPOTIPY_CLIENT_ID")
SPOTIPY_CLIENT_SECRET = os.environ.get("SPOTIPY_CLIENT_SECRET")
REDIRECT_URI = os.environ.get("REDIRECT_URI")
SCOPE = os.environ.get("SCOPE")
ALLOWED_ORIGINS = ["http://localhost:3000"]
ENV = os.environ.get("ENVIRONMENT")


if ENV == "dev":
    next_origin = "http://localhost:3000/"
    redis_origin = "localhost"
    fast_origin = "http://localhost:8001/"
    dorito_origin = "http://localhost:5000/"
    cookie = "localhost"
    samesite = "lax"
    secure = False
elif ENV == "prod":
    next_origin = "https://shrillecho.app/"
    redis_origin = "redis"
    fast_origin = "https://api.shrillecho.app/"
    dorito_origin = "http://discord_quart:5000/"
    cookie = "shrillecho.app"
    secure = True
    samesite = 'none'
    # fast_public_origin = "https://api.shrillecho.app"
    # dorito_public_origin = "https://discord.shrillecho.app"
   