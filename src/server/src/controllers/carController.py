from bson import ObjectId
from flask import Blueprint, request, make_response
from werkzeug.exceptions import abort

from models.database.MongoConnection import PyMongoConnection

carRoutes = Blueprint("carRoutes", __name__)


@carRoutes.route("/car/carsByUser", methods=["POST"])
def getCarsByUser():
    conn = PyMongoConnection()

    code = request.json["code"].strip()

    if code == "":
        abort(404, "User not found with the given credentials")

    condition = {
        "_id": ObjectId(code)
    }

    document = conn.getDocument("folconn", "users", condition)

    if document is None:
        abort(404, "User not found with the given credentials")

    equipments = document["Equipment"]

    data = {"equipments": equipments}
    response = make_response(data)

    return response
