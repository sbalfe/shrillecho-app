import graphene
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from starlette_graphene3 import GraphQLApp, make_graphiql_handler

class Track(graphene.ObjectType):
    name = graphene.String()
    artist = graphene.String()
    streams = graphene.Int()

class Query(graphene.ObjectType):
    track = graphene.Field(Track)
    def resolve_track(self, info):
        return Track('sonder', 'test', 54)        

schema = graphene.Schema(query=Query)

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"]
)


app.mount("/graphql", GraphQLApp(schema, on_get=make_graphiql_handler()))









