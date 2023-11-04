import redis
from core import config

r = redis.Redis(host=config.redis_origin, port=6379, db=0, decode_responses=True)