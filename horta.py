from flask import Flask, render_template
import requests
from time import sleep

app = Flask(__name__, template_folder='./templates')

@app.route('/')
def horta():
    dados = requests.get('https://api.thingspeak.com/channels/1441189/feeds.json?results=1').json()
    u_solo = dados['feeds'][0]['field1']
    t_ar = dados['feeds'][0]['field5']
    u_ar = dados['feeds'][0]['field3']
    return render_template('/index.html', umidade_do_solo=u_solo, temperatura_do_ar= t_ar, perc_temperatura=float(t_ar)*2, umidade_do_ar=u_ar)

app.run()
