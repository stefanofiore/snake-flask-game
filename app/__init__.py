from flask import Flask

def create_app():
    app = Flask(__name__)

    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    from .game import game as game_blueprint
    app.register_blueprint(game_blueprint, url_prefix='/game')

    return app
