from flask import make_response, jsonify

from models.database.MongoConnection import PyMongoConnection


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


def getFolAcessesByUserName(user):
    conn = PyMongoConnection()
    documents =jsonify(list(conn.getDocuments("folconn", "folAccessAttempts", {"userName":user}, {"_id": 0, "id": 0})))
    count = len(documents.json)
    treatedResponse=({"count":count,"accesses":documents.json})

    response = make_response(treatedResponse,200)

    return response
