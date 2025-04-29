# app/__init__.py
from flask import Flask
from app.main import main as main_bp
from app.game import game as game_bp

def create_app():
    app = Flask(__name__)
    app.register_blueprint(main_bp)
    app.register_blueprint(game_bp, url_prefix='/game')
    return app
