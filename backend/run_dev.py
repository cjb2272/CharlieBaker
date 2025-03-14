from dotenv import load_dotenv
load_dotenv()  # Load variables from .env file

from app import create_app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True)