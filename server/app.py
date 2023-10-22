from flask import Flask, request, jsonify
from graphene import ObjectType, String, Schema

app = Flask(__name__)

# Define a simple GraphQL schema
class Query(ObjectType):
    hello = String()

    def resolve_hello(self, info):
        return "Hello, GraphQL!"

schema = Schema(query=Query)

@app.route('/graphql', methods=['POST'])
def graphql_server():
    print("hit")
    data = request.get_json()
    result = schema.execute(data.get('query'))
    print(result)

    return jsonify(result.data)

