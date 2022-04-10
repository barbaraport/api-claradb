from flask import Flask
from flask_cors import CORS

from models.database.databaseScripts import initializeDatabase
from controllers.authenticationController import authRoutes
from controllers.folController import folRoutes

app = Flask(__name__)
app.register_blueprint(authRoutes)
app.register_blueprint(folRoutes)
app.run(host='0.0.0.0', port=5000)

CORS(app)
app.debug = True

restartDatabaseDefaultData = True


if __name__ == '__main__':
    initializeDatabase(restartDatabaseDefaultData)

    app.run()
