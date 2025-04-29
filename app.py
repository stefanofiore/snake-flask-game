from flask import Flask
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

@app.route("/")
def home():
    return "Ciao da Flask!"

if __name__ == "__main__":
    app.run(debug=True)
