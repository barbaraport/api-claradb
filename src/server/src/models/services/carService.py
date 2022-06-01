from bson import ObjectId
from flask import make_response, abort
from src.models.database.MongoConnection import PyMongoConnection


def getCarsByUser(code):
    conn = PyMongoConnection()

    condition = {
        "_id": ObjectId(code)
    }

    document = conn.getDocument("folconn", "users", condition)

    if document is None:
        abort(404, "User not found with the given credentials")

    equipments = document["Equipment"]

    data = {"equipments": equipments}

    return make_response(data)