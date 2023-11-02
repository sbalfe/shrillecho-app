from fastapi import BackgroundTasks
from core.database import r

class Context(object):

    async def __call__(self, request):
        return {
            "redis": r,
            "request": request,   
            "background": BackgroundTasks(),  
        }