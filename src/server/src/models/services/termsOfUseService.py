from bson import ObjectId
from models.database.MongoConnection import PyMongoConnection


def getTermsOfUseText():
    with open('../resources/startUpFiles/terms_of_use.txt', encoding='utf8') as file:
        text = file.read()

    return text


def changeTermsOfUse(newStatus, userId):
    conn = PyMongoConnection()

    conn.update("folconn", "users", {"currentlyAcceptingTermsOfUse": newStatus}, {"_id": ObjectId(userId)})
