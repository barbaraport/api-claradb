from flask import Flask
from models.database.databaseScripts import initializeDatabase
from controllers.authenticationController import authRoutes
from controllers.folController import folRoutes

app = Flask(__name__)
app.register_blueprint(authRoutes)
app.register_blueprint(folRoutes)
app.debug(debugMode = True)

restartDatabaseDefaultData = True


if __name__ == '__main__':
    initializeDatabase(restartDatabaseDefaultData)

    app.run()
