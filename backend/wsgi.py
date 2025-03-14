# WSGI entry point for production. PROD SETTINGS
# production server gunicorn in Render

from app import create_app

app = create_app()

if __name__ == "__main__":
    app.run()