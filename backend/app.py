"""
FLASK SERVER MAIN FILE
@author: Charles Baker

- As a shortcut we name out flask app "app.py" that way when issuing the flask run command 
  we dont have to specify an app location with --app

"""

import os
from flask import Flask, render_template, request, jsonify, redirect, session, url_for, send_from_directory

# static_folder and template_folder: These point to the React build directory (frontend/build),
# where static files and the main HTML file are located.
app = Flask(__name__, static_folder="../frontend/build", template_folder="../frontend/build")
app.secret_key = os.environ.get('FLASK_SECRET_KEY')

# Set production environment
app.config['ENV'] = 'production'
app.config['DEBUG'] = False

# Serve React's index.html for the root route
@app.route("/")
def index():
    # send_from_directory is used to serve files directly form the specified directory
    return send_from_directory(app.static_folder, 'index.html')

# Serve static files (e.g., JS, CSS) from the React build
# Catch-All Route: The /<path:path> route ensures that all requests for static assets (e.g., JS, CSS) are served correctly.
@app.route("/<path:path>")
def static_files(path):
    return send_from_directory(app.static_folder, path)



if __name__ == '__main__':
    
    # something to consider doing---
    # # Only used for direct script execution (development)
    # debug_mode = os.environ.get('FLASK_ENV') != 'production'
    # app.run(debug=debug_mode)
    # ^^^ This way, you can easily switch between production and development 
    # modes by setting the FLASK_ENV environment variable, without changing your code.

    app.run() # debug=True removed.
