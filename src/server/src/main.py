import json

import firebase_admin
from firebase_admin import credentials
from flask import Flask
from flask_cors import CORS
from google.cloud import storage
from google.oauth2 import service_account

from models.database.databaseScripts import initializeDatabase, synchronizeUsersData
from controllers.authenticationController import authRoutes
from controllers.folController import folRoutes
from controllers.carController import carRoutes
from controllers.adminController import adminRoutes
from controllers.termsOfUseController import termsOfUseRoutes
from controllers.notificationController import notificationRoutes
from models.observers.ResourceFileChangeObserver import ResourceFileChangeObserver

app = Flask(__name__)
app.register_blueprint(authRoutes)
app.register_blueprint(folRoutes)
app.register_blueprint(carRoutes)
app.register_blueprint(adminRoutes)
app.register_blueprint(termsOfUseRoutes)
app.register_blueprint(notificationRoutes)

CORS(app)

restartDatabaseDefaultData = False
initializeDatabase(restartDatabaseDefaultData)

ResourceFileChangeObserver("/startUpFiles", "usersMock.xlsx", synchronizeUsersData)

credentials = credentials.Certificate('../resources/startUpFiles/messaging.json')
firebase_app = firebase_admin.initialize_app(credentials)

app.run(host='0.0.0.0', port=5000, debug=True)
