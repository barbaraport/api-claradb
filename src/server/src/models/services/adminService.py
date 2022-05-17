from flask import make_response, jsonify

from src.models.database.MongoConnection import PyMongoConnection


def getAppLoginAttempts():
    conn = PyMongoConnection()

    documents = jsonify(list(conn.getDocuments("folconn", "loginAttempts", {}, {"_id": 0, "id": 0})))

    response = make_response(documents)

    return response


def getFolAccesses():
    conn = PyMongoConnection()

    documents = jsonify(list(conn.getDocuments("folconn", "folAccessAttempts", {}, {"_id": 0, "id": 0})))

    response = make_response(documents)

    return response
