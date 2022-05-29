from flask import Flask
from flask_cors import CORS

from models.database.databaseScripts import initializeDatabase, synchronizeUsersData
from controllers.authenticationController import authRoutes
from controllers.folController import folRoutes
from controllers.carController import carRoutes
from controllers.adminController import adminRoutes
from controllers.termsOfUseController import termsOfUseRoutes
from models.observers.ResourceFileChangeObserver import ResourceFileChangeObserver
from src.controllers.statisticsReportController import statisticsReportRoutes

app = Flask(__name__)
app.register_blueprint(authRoutes)
app.register_blueprint(folRoutes)
app.register_blueprint(carRoutes)
app.register_blueprint(adminRoutes)
app.register_blueprint(termsOfUseRoutes)
app.register_blueprint(statisticsReportRoutes)

CORS(app)

restartDatabaseDefaultData = False
initializeDatabase(restartDatabaseDefaultData)

ResourceFileChangeObserver("/startUpFiles", "usersMock.xlsx", synchronizeUsersData)

app.run(host='0.0.0.0', port=5000, debug=True)
