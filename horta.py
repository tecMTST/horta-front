from flask import Flask, render_template
import requests
from time import sleep

app = Flask(__name__, template_folder='./templates')

@app.route('/')
def horta():
    while True:
        sleep(1)
        dados = requests.get('https://api.thingspeak.com/channels/1441189/feeds.json?results=1').json()
        print(dados['feeds'][0]['field1'])
        return render_template('/index.html')

app.run()
