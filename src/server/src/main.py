from flask import Flask
from flask_cors import CORS

from src.models.database.databaseScripts import initializeDatabase, synchronizeUsersData
from src.controllers.authenticationController import authRoutes
from src.controllers.folController import folRoutes
from src.controllers.carController import carRoutes
from src.controllers.adminController import adminRoutes
from src.controllers.termsOfUseController import termsOfUseRoutes
from src.models.observers.ResourceFileChangeObserver import ResourceFileChangeObserver


app = Flask(__name__)
app.register_blueprint(authRoutes)
app.register_blueprint(folRoutes)
app.register_blueprint(carRoutes)
app.register_blueprint(adminRoutes)
app.register_blueprint(termsOfUseRoutes)

CORS(app)

restartDatabaseDefaultData = False
initializeDatabase(restartDatabaseDefaultData)

ResourceFileChangeObserver("/startUpFiles", "usersMock.xlsx", synchronizeUsersData)

app.run(host='0.0.0.0', port=5000, debug=True)
