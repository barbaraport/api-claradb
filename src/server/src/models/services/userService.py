from models.database.MongoConnection import PyMongoConnection
from bson.objectid import ObjectId


def getUserCarsList(userId):
    conn = PyMongoConnection()

    condition = {
        "_id": ObjectId(userId)
    }

    document = conn.getDocument("folconn", "users", condition)

    userEquipments = document["Equipment"]

    return userEquipments
