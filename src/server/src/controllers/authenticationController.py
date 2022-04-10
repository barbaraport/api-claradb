import json

from flask import Blueprint, make_response, jsonify
from flask import request
from flask import abort

from src.models.database.MongoConnection import PyMongoConnection

authRoutes = Blueprint("authRoutes", __name__)


@authRoutes.route("/authentication/login", methods=["POST"])
def login():
    conn = PyMongoConnection()

    condition = {
        "Login": request.json["userName"].strip(),
        "Password": int(request.json["password"].strip())
    }

    document = conn.getDocument("folconn", "users", condition)

    if document is None:
        abort(404, "User not found with the given credentials")

    user_id = str(document["_id"])

    data = {"id": user_id}
    response = make_response(json.dumps(data))

    return response
