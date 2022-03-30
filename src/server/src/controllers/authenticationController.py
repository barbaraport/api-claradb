from flask import Blueprint
from flask import request
from flask import abort

from src.models.database.MongoConnection import PyMongoConnection

authRoutes = Blueprint("authRoutes", __name__)


@authRoutes.route("/authentication/login", methods=['POST'])
def login():
    conn = PyMongoConnection()

    condition = {
        "Login": request.json["login"],
        "Password": request.json["password"]
    }

    document = conn.getDocument("folconn", "users", condition, False)

    if document is None:
        abort(404, "User not found with the given credentials")

    return document
