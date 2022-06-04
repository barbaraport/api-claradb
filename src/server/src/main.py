import firebase_admin
from firebase_admin import credentials
from flask import Flask
from flask_cors import CORS

from src.controllers.adminController import adminRoutes
from src.controllers.authenticationController import authRoutes
from src.controllers.carController import carRoutes
from src.controllers.folController import folRoutes
from src.controllers.notificationController import notificationRoutes
from src.controllers.termsOfUseController import termsOfUseRoutes
from src.models.database.databaseScripts import initializeDatabase, synchronizeUsersData, synchronizeDocumentsData
from src.models.observers.ResourceFileChangeObserver import ResourceFileChangeObserver
from src.controllers.statisticsReportController import statisticsReportRoutes

app = Flask(__name__)
app.register_blueprint(authRoutes)
app.register_blueprint(folRoutes)
app.register_blueprint(carRoutes)
app.register_blueprint(adminRoutes)
app.register_blueprint(termsOfUseRoutes)
app.register_blueprint(statisticsReportRoutes)
app.register_blueprint(notificationRoutes)

CORS(app)

reload = False
restartDatabaseDefaultData = False
initializeDatabase(restartDatabaseDefaultData)

ResourceFileChangeObserver("/startUpFiles", "usersMock.xlsx", synchronizeUsersData)
ResourceFileChangeObserver("/startUpFiles", "documentsMock.xlsx", synchronizeDocumentsData)

credentials = credentials.Certificate('./resources/startUpFiles/messaging.json')
firebase_app = firebase_admin.initialize_app(credentials)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=reload)
