"""
FLASK SERVER MAIN FILE
@author: Charles Baker

- In small projects we name our flask app "app.py" that way when issuing the flask run command 
  we dont have to specify an app location with --app
- In larger projects we use the __init__.py file to create the flask app instance and then
  import it into the wsgi.py file for production and app.py for development.

"""


# init Flask app .... add configurations for database setup and other services
# from .views.routes import *

# app/__init__.py
import os
from flask import Flask, render_template, request, jsonify, redirect, session, url_for, send_from_directory


def create_app(config_name=None):
    # static_folder and template_folder: These point to the React build directory (frontend/build),
    # where static files and the main HTML file are located.
    app = Flask(__name__, static_folder="../../frontend/build", template_folder="../../frontend/build")
    app.secret_key = os.environ.get('FLASK_SECRET_KEY')
    
    # Default to development if not specified
    if config_name is None:
        config_name = os.environ.get('FLASK_ENV', 'development')
    
    # Configure based on environment
    if config_name == 'production':
        app.config['DEBUG'] = False
    else:
        app.config['DEBUG'] = True

    # app.config['ENV'] = 'production'

    @app.route("/")
    def index():
        # send_from_directory is used to serve files directly form the specified directory
        return send_from_directory(app.static_folder, 'index.html')

    # Serve static files (e.g., JS, CSS) from the React build
    # Catch-All Route: The /<path:path> route ensures that all requests for static assets (e.g., JS, CSS) are served correctly.
    @app.route("/<path:path>")
    def static_files(path):
        return send_from_directory(app.static_folder, path)
    
    # Initialize extensions
    # db.init_app(app)
    
    # Register blueprints
    #from app.views.main import main_blueprint
    #app.register_blueprint(main_blueprint)
    
    return app