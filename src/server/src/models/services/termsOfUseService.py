from datetime import datetime

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
    availableOptions = termsOfUse["options"]
    userCurrentSelectedOptions = getUserSelectedOptions(userId)

    conn.put("folconn", "users", {"_id": ObjectId(userId)}, "termsOfUse." + termsOfUse["currentVersion"],
             acceptedOptions)

    currentDatetime = datetime.now()

    for option in availableOptions:
        modifiedTo = False

        optionKey = option["option"]

        if optionKey in acceptedOptions:
            modifiedTo = True

        historyUpdate = {
            "option": optionKey,
            "modifiedTo": modifiedTo,
            "datetime": currentDatetime
        }

        if optionKey not in userCurrentSelectedOptions or (not modifiedTo and optionKey in userCurrentSelectedOptions):
            conn.push("folconn", "users", {"_id": ObjectId(userId)},
                      "termsOfUse.history." + termsOfUse["currentVersion"], historyUpdate)


def getCurrentTermsOfUse():
    conn = PyMongoConnection()

    document = conn.getDocument("folconn", "currentTermsOfUse", {})

    return document


def getUserSelectedOptions(userId):
    conn = PyMongoConnection()

    document = conn.getDocument("folconn", "users", {"_id": ObjectId(userId)})

    del document["termsOfUse"]["history"]

    versionsList = sorted(list(map(int, document["termsOfUse"].keys())))
    lastVersion = str(versionsList.pop())

    selectedOptions = document["termsOfUse"][lastVersion]

    return selectedOptions


def isAcceptingLastVersion(userId):
    conn = PyMongoConnection()

    userDocument = conn.getDocument("folconn", "users", {"_id": ObjectId(userId)})
    termsDocument = conn.getDocument("folconn", "currentTermsOfUse", {})

    del userDocument["termsOfUse"]["history"]

    versionsList = sorted(list(map(int, userDocument["termsOfUse"].keys())))

    lastVersion = versionsList.pop()

    if lastVersion == int(termsDocument["currentVersion"]):
        return True

    return False
