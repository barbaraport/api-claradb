import bcrypt
from bson.objectid import ObjectId
from flask import abort, make_response
from models.database.MongoConnection import PyMongoConnection


def userLogin(userLogin, password):
    conn = PyMongoConnection()
    if not password.isnumeric():
        abort(404, "User not found with the given credentials")

    condition = {
        "Login": userLogin
    }

    document = conn.getDocument("folconn", "users", condition)

    if document is None:
        abort(404, "User not found with the given credentials")

    userStoredPassword = document["Password"]

    if not bcrypt.checkpw(password.encode("utf-8"), userStoredPassword):
        abort(404, "User not found with the given credentials")

    user_id = str(document["_id"])

    data = {"id": user_id}
    return make_response(data)


def getUserCarsList(userId):
    conn = PyMongoConnection()

    condition = {
        "_id": ObjectId(userId)
    }

    document = conn.getDocument("folconn", "users", condition)

    userEquipments = document["Equipment"]

    return userEquipments
