from datetime import datetime

import bcrypt
from bson.objectid import ObjectId
from flask import abort, make_response
from src.models.database.MongoConnection import PyMongoConnection
from src.models.services import locationService


def registerLoginAttempt(user, position):

    geolocation = locationService.getCoordinatePlace(position)

    loginAttempt = {
        "userId": str(user["_id"]),
        "userName": user["Username"],
        "date": datetime.today().replace(microsecond=0),
        "geolocation": geolocation
    }

    conn = PyMongoConnection()
    conn.insert("folconn", "loginAttempts", loginAttempt)


def userLogin(login, password, position):
    conn = PyMongoConnection()
    if not password.isnumeric():
        abort(404, "User not found with the given credentials")

    condition = {
        "Login": login
    }

    document = conn.getDocument("folconn", "users", condition)

    if document is None:
        abort(404, "User not found with the given credentials")

    userStoredPassword = document["Password"]

    if not bcrypt.checkpw(password.encode("utf-8"), userStoredPassword):
        abort(404, "User not found with the given credentials")

    user_id = str(document["_id"])

    data = {"id": user_id}

    registerLoginAttempt(document, position)

    return make_response(data)


def getUserCarsList(userId):
    conn = PyMongoConnection()

    condition = {
        "_id": ObjectId(userId)
    }

    document = conn.getDocument("folconn", "users", condition)

    userEquipments = document["Equipment"]

    return userEquipments


def isValidUser(userId):
    conn = PyMongoConnection()

    condition = {
        "_id": ObjectId(userId)
    }

    document = conn.getDocument("folconn", "adminUsers", condition)

    responseBody = {}

    if document is None:
        responseBody["isValid"] = False
    else:
        responseBody["isValid"] = True

    response = make_response(responseBody)

    return response


def adminLogin(login, password):
    conn = PyMongoConnection()

    condition = {
        "login": login
    }

    document = conn.getDocument("folconn", "adminUsers", condition)

    if document is None:
        abort(404, "User not found with the given credentials")

    userStoredPassword = document["password"]

    if not bcrypt.checkpw(password.encode("utf-8"), userStoredPassword):
        abort(404, "User not found with the given credentials")

    user_id = str(document["_id"])

    data = {
        "id": user_id
    }

    response = make_response(data)

    return response
