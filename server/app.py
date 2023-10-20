from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello, Flask App!"

@app.route('/home')
def home():
    return "Make Yourself at Home"
