import json

from flask import Blueprint, make_response, jsonify
from flask import request
from flask import abort

from src.models.database.MongoConnection import PyMongoConnection

authRoutes = Blueprint("authRoutes", __name__)


@authRoutes.route("/authentication/login", methods=["POST"])
def login():
    conn = PyMongoConnection()

    userLogin = request.json["login"].strip()
    password = request.json["password"].strip()

    if not password.isnumeric():
        abort(404, "User not found with the given credentials")

    condition = {
        "Login": userLogin,
        "Password": int(password)
    }

    document = conn.getDocument("folconn", "users", condition)

    if document is None:
        abort(404, "User not found with the given credentials")

    user_id = str(document["_id"])

    data = {"id": user_id}
    response = make_response(data)

    return response
