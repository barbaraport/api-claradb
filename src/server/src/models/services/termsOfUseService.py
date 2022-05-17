from bson import ObjectId
from src.models.database.MongoConnection import PyMongoConnection


def getTermsOfUseText():
    with open('./resources/startUpFiles/terms_of_use.txt', encoding='utf8') as file:
        text = file.read()

    return text


def changeTermsOfUse(newStatus, userId):
    conn = PyMongoConnection()

    conn.update("folconn", "users", {"currentlyAcceptingTermsOfUse": newStatus}, {"_id": ObjectId(userId)})

    if not newStatus:
        disassociateUserData(userId)


def disassociateUserData(userId):
    conn = PyMongoConnection()

    conn.update("folconn", "loginAttempts", {"userId": userId}, {"userId": None, "userName": None})
    conn.update("folconn", "folAccessAttempts", {"userId": userId}, {"userId": None, "userName": None})
