from flask import jsonify
from flask import abort

from src.models.database.MongoConnection import PyMongoConnection


def getFolsByStatus(equipmentList, status):
    conn = PyMongoConnection()

    condition = {
        "Equipment": {
            "$in": equipmentList
        },
        "Status": status
    }

    projection = {
        "_id": 0,
        "id": 1,
        "Title": 1,
        "Equipment": 1,
        "Issue description": 1
    }

    document = jsonify(list(conn.getDocuments("folconn", "documents", condition, projection)))

    return document
