from flask import Flask
from flask_cors import CORS

from models.database.databaseScripts import initializeDatabase
from controllers.authenticationController import authRoutes
from controllers.folController import folRoutes
from controllers.carController import carRoutes
from controllers.adminController import adminRoutes

app = Flask(__name__)
app.register_blueprint(authRoutes)
app.register_blueprint(folRoutes)
app.register_blueprint(carRoutes)
app.register_blueprint(adminRoutes)

CORS(app)

restartDatabaseDefaultData = True
initializeDatabase(restartDatabaseDefaultData)

app.run(host='0.0.0.0', port=5000, debug=True)
