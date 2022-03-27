from flask import Flask
from controllers import routes_bp
from models.database.databaseScripts import initializeDatabase

app = Flask(__name__)
app.register_blueprint(routes_bp)

restartDatabaseDefaultData = True

if __name__ == '__main__':
    initializeDatabase(restartDatabaseDefaultData)

    app.run()
