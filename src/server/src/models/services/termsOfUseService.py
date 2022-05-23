from bson import ObjectId
from src.models.database.MongoConnection import PyMongoConnection


def getTermsOfUseText():
    termsOfUse = getCurrentTermsOfUse()

    version = termsOfUse["currentVersion"]

    with open('../resources/termsOfUse/' + version + '/termsOfUse.txt', encoding='utf8') as file:
        text = file.read()

    return text


def getTermsOfUseOptions():
    termsOfUse = getCurrentTermsOfUse()

    options = termsOfUse["options"]

    return options


def changeTermsOfUse(acceptedOptions, userId):
    conn = PyMongoConnection()

    termsOfUse = getCurrentTermsOfUse()

    newStatus = {
        "termsOfUseStatus": {
            "acceptedVersion": termsOfUse["currentVersion"],
            "acceptedOptions": acceptedOptions
        }
    }

    conn.update("folconn", "users", newStatus, {"_id": ObjectId(userId)})


def getCurrentTermsOfUse():
    conn = PyMongoConnection()

    document = conn.getDocument("folconn", "currentTermsOfUse", {})

    return document


def getUserSelectedOptions(userId):
    conn = PyMongoConnection()

    document = conn.getDocument("folconn", "users", {"_id": ObjectId(userId)})

    selectedOptions = document["termsOfUseStatus"]["acceptedOptions"]

    return selectedOptions


def isAcceptingLastVersion(userId):
    conn = PyMongoConnection()

    userDocument = conn.getDocument("folconn", "users", {"_id": ObjectId(userId)})
    termsDocument = conn.getDocument("folconn", "currentTermsOfUse", {})

    if str(userDocument["termsOfUseStatus"]["acceptedVersion"]) == termsDocument["currentVersion"]:
        return True

    return False
