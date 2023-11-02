
from fastapi import APIRouter
import graphene
from gql.queries import Query


schema = graphene.Schema(query=Query)

