from . import game
from flask import render_template

@game.route('/')
def play():
    return render_template('game.html')
