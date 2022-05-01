from datetime import datetime

import bcrypt
from bson.objectid import ObjectId
from flask import abort, make_response
from models.database.MongoConnection import PyMongoConnection


def registerLoginAttempt(user):
    loginAttempt = {
        "userId": None,
        "userName": user["Username"],
        "country": "Brazil",
        "city": "São José dos Campos",
        "date": datetime.today().replace(microsecond=0)
    }

    if user["currentlyAcceptingTermsOfUse"]:
        loginAttempt["userId"] = user["_id"]

    conn = PyMongoConnection()
    conn.insert("folconn", "loginAttempts", loginAttempt)


def userLogin(login, password):
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

    registerLoginAttempt(document)

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
