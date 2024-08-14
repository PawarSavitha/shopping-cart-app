from flask import Flask
from routes import init_routes
from config import Config
from models import db
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config.from_object(Config)
app.config['SECRET_KEY'] = 'your_secret_key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///shopping_cart.db'

# Initialize db and migrate once
db.init_app(app)
migrate = Migrate(app, db)

init_routes(app)

if __name__ == "__main__":
    app.run(debug=True)
