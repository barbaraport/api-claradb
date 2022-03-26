from flask import Flask
from controllers import routes_bp

app = Flask(__name__)
app.register_blueprint(routes_bp)

if __name__ == '__main__':
    app.run()
