from flask import Flask
from models.database.databaseScripts import initializeDatabase
from controllers.authenticationController import authRoutes

app = Flask(__name__)
app.register_blueprint(authRoutes)

restartDatabaseDefaultData = True


if __name__ == '__main__':
    initializeDatabase(restartDatabaseDefaultData)

    app.run()
