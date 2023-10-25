import requests
import json

url = "https://api.shrillecho.app"
# headers = {
#     "Content-Type": "application/json"
# }
# data = {
#     "query": "{ books { author } }"
# }

response = requests.get(url)

print(response.status_code)