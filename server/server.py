from core import config
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from starlette_graphene3 import GraphQLApp, make_graphiql_handler
from gql.context import Context
from gql.core import schema
from routes import auth, playback, user, discover

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=config.next_origin,
    allow_methods=["*"],
)

gql = GraphQLApp(schema, on_get=make_graphiql_handler(), context_value=Context())
app.mount("/graphql", gql)

app.include_router(auth.router)
app.include_router(playback.router)
app.include_router(user.router)
app.include_router(discover.router)


                            



