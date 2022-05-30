from bson import ObjectId

from src.models.database.MongoConnection import PyMongoConnection


def getUsersWithAcceptedTerms(terms, version):
    conn = PyMongoConnection()

    condition = {
        'termsOfUse.' + version: {
            '$in': terms
        }
    }

    documents = list(conn.getDocuments("folconn", "users", condition, {"_id": 0, "Username": 1, "termsOfUse": 1}))

    return documents


def getUserAcceptanceHistory(userId):
    conn = PyMongoConnection()

    condition = {"_id": ObjectId(userId)}

    user = conn.getDocument("folconn", "users", condition)

    userHistory = user["termsOfUse"]["history"]

    return userHistory
