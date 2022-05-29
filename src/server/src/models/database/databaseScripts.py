import bcrypt
import pandas
from bson import ObjectId
from models.database import MongoConnection
from sheet2dict import Worksheet

from models.services.notificationService import sendNotification


def checkInitialization():
    conn = MongoConnection.PyMongoConnection()

    document = conn.getDocument("folconn", "databaseStatus", {"statusName": "isInitialized"})

    if document is None:
        return False

    value = document["statusValue"]

    return value


def registerDefaultUsers():
    dataFrame = pandas.read_excel("../resources/startUpFiles/usersMock.xlsx", sheet_name="query")
    dataFrame = dataFrame.fillna(-1)

    termsOfUseColumn = "CurrentlyAcceptingTermsOfUse"
    dataFrame.insert(0, termsOfUseColumn, False)

    columns = dataFrame.columns.values

    documents = []
    existantEquipments = []

    for value in dataFrame.values:
        document = {}

        if not isValidDocument(value):
            continue

        for i in range(len(value)):
            column = columns[i]

            if column == "Equipment":
                equipments = value[i].split(",")
                equipmentsList = []

                for equipment in equipments:
                    treatedEquipment = equipment.strip()
                    equipmentsList.append(treatedEquipment)
                    existantEquipments.append(treatedEquipment)

                document[column] = equipmentsList

            elif column == termsOfUseColumn:
                document[column] = False

            else:
                columnValue = value[i]

                if column == "Password":
                    columnValue = bcrypt.hashpw(str(columnValue).encode("utf-8"), bcrypt.gensalt(8))

                document[column] = columnValue

        documents.append(document)

    conn = MongoConnection.PyMongoConnection()

    conn.insert("folconn", "users", documents)

    existantEquipments = dict.fromkeys(existantEquipments)
    for equipment in existantEquipments:
        conn.insert("folconn", "equipmentUsers", {"Equipment": equipment, "Users": []})


def registerDefaultDocuments():
    dataFrame = pandas.read_excel("../resources/startUpFiles/documentsMock.xlsx", sheet_name="query")
    dataFrame = dataFrame.fillna(-1)

    columns = dataFrame.columns.values

    documents = []

    for value in dataFrame.values:
        document = {}

        if not isValidDocument(value):
            continue

        for i in range(len(value)):
            column = columns[i]

            if column == "Keywords":
                document[column] = getKeywordsArray(value[i])
            else:
                document[column] = value[i]

        documents.append(document)

    conn = MongoConnection.PyMongoConnection()

    conn.insert("folconn", "documents", documents)


def createInitialUserAdminCollection():
    conn = MongoConnection.PyMongoConnection()

    adminPassword = bcrypt.hashpw("admin".encode("utf-8"), bcrypt.gensalt(8))

    initialAdminUser = {
        "name": "Administrator",
        "login": "admin",
        "password": adminPassword
    }

    admins = [initialAdminUser]

    conn.insert("folconn", "adminUsers", admins)


def createInitialFOLsFilesCollection():
    conn = MongoConnection.PyMongoConnection()

    mustangFOL = {
        "Equipment": "Mustang",
        "fileName": "FOL-MUS-FATEC.pdf"
    }

    fols = [mustangFOL]

    conn.insert("folconn", "FOLsFiles", fols)


def dropDefaultCollections():
    conn = MongoConnection.PyMongoConnection()

    conn.dropCollections("folconn",
                         ["users", "documents", "adminUsers", "loginAttempts", "folAccessAttempts", "FOLsFiles",
                          "equipmentUsers"])


def isValidDocument(document):
    if isinstance(document[1], int):
        return False
    return True


def synchronizeDocumentsData():
    conn = MongoConnection.PyMongoConnection()

    storedDocuments = list(conn.getDocuments("folconn", "documents", {}))

    ws = Worksheet()
    documentsFileAsDict = ws.xlsx_to_dict(path="../resources/startUpFiles/documentsMock.xlsx")

    updatedDocumentsList = []

    storedDocumentsTitles = getSpecificKey(storedDocuments, "Title")
    documentsFileTitles = getSpecificKey(documentsFileAsDict.sheet_items, "Title")

    for storedDocument in storedDocuments:
        for fileDocument in documentsFileAsDict.sheet_items:
            storedEquipmentTitle = storedDocument["Title"]
            fileEquipmentTitle = fileDocument["Title"]

            storedEquipmentRevision = storedDocument["Revision number"]
            fileEquipmentRevision = fileDocument["Revision number"]

            # already exists and was updated
            if storedEquipmentTitle == fileEquipmentTitle:

                updatedDocument = {}

                if fileEquipmentRevision == 'None':
                    fileEquipmentRevision = None

                if storedEquipmentRevision is not None and fileEquipmentRevision is not None:

                    if int(fileEquipmentRevision) > int(storedEquipmentRevision):

                        for key in storedDocument:
                            if key == 'id':
                                updatedDocument[key] = storedDocument[key]
                            elif key == 'Keywords':
                                updatedDocument[key] = getKeywordsArray(fileDocument[key])
                            else:
                                updatedDocument[key] = fileDocument[key]

                        updatedDocumentsList.append(updatedDocument)

                        if updatedDocument["Status"] == "IN EFFECT":
                            equipment = updatedDocument["Equipment"]
                            fol = updatedDocument["Title"]
                            title = "Updated document!"
                            text = "The equipment " + equipment + " has an updated document!\nFOL Title: " + fol + "\nActual FOL Status: IN EFFECT"

                            sendNotificationToEquipmentUsers(equipment,
                                                             fol,
                                                             title,
                                                             text)

            # was created
            elif fileEquipmentTitle not in storedDocumentsTitles:
                fileDocument["Keywords"] = getKeywordsArray(fileDocument["Keywords"])

                conn.insert("folconn", "documents", fileDocument)
                storedDocuments.append(fileDocument)
                storedDocumentsTitles.append(fileEquipmentTitle)

                if fileDocument["Status"] == "IN EFFECT":
                    equipment = fileDocument["Equipment"]
                    fol = fileDocument["Title"]
                    title = "New document!"
                    text = "The equipment " + equipment + " has a new document!\nFOL Title: " + fol + "\nActual FOL Status: IN EFFECT"

                    sendNotificationToEquipmentUsers(equipment,
                                                     fol,
                                                     title,
                                                     text)
            # was deleted
            elif storedEquipmentTitle not in documentsFileTitles:
                conn.delete("folconn", "documents", {"_id": ObjectId(storedDocument["id"])})

                documentsFileAsDict.sheet_items.remove(fileDocument)
                documentsFileTitles.remove(fileEquipmentTitle)

    for updatedDocument in updatedDocumentsList:
        id = ObjectId(updatedDocument["id"])
        updatedDocument.pop("id")
        conn.update("folconn", "documents", updatedDocument, {"_id": id})


def getSpecificKey(list_of_dicts, key):
    keys = []

    for item in list_of_dicts:
        keys.append(item[key])

    return keys


def getKeywordsArray(value):
    keywords = value.split(",")

    keywordsList = []

    for keyword in keywords:
        if keyword != " ":
            keywordsList.append(keyword.strip().lower())

    return keywordsList


def sendNotificationToEquipmentUsers(equipment, fol, title, text):
    conn = MongoConnection.PyMongoConnection()

    usersFromEquipment = conn.getDocument("folconn", "equipmentUsers", {"Equipment": equipment})

    tokens = []

    for user in usersFromEquipment["Users"]:
        tokens.append(user["Token"])

    if len(tokens) > 0:
        sendNotification(title, text, tokens)


def synchronizeUsersData():
    conn = MongoConnection.PyMongoConnection()

    usersList = getUsersList(list(conn.getDocuments("folconn", "users", {}, {"Login": 1})))

    dataFrame = pandas.read_excel("../resources/startUpFiles/usersMock.xlsx", sheet_name="query")
    dataFrame = dataFrame.fillna(-1)

    termsOfUseColumn = "CurrentlyAcceptingTermsOfUse"
    dataFrame.insert(0, termsOfUseColumn, False)

    columns = dataFrame.columns.values

    updatedUsersList = []

    for value in dataFrame.values:
        document = {}

        if not isValidDocument(value):
            continue

        for i in range(len(value)):
            column = columns[i]

            if column == "Equipment":
                equipments = value[i].split(",")
                equipmentsList = []

                for equipment in equipments:
                    treated_equipment = equipment.strip()
                    equipmentsList.append(treated_equipment)

                document[column] = equipmentsList
                conn.insert("folconn", "equipmentUsers", {"Equipment": equipment, "Users": []})

            elif column == termsOfUseColumn:
                document[column] = False

            else:
                columnValue = value[i]

                if column == "Password":
                    columnValue = bcrypt.hashpw(str(columnValue).encode("utf-8"), bcrypt.gensalt(8))

                document[column] = columnValue

        updatedUsersList.append(document["Login"])

        conn.update("folconn", "users", document, {"Login": document["Login"]}, True)

    for user in usersList:
        if user not in updatedUsersList:
            conn.delete("folconn", "users", {"Login": user})


def getDocumentsList(documents):
    documentsList = []

    for document in documents:
        documentsList.append(document)

    return documentsList


def getUsersList(usersDocuments):
    usersList = []

    for document in usersDocuments:
        userName = document["Login"]

        usersList.append(userName)

    return usersList


def initializeDatabase(restartData=False):
    print("Checking if is needed to initialize the database")
    initialized = checkInitialization()

    if not initialized:
        print("Initializing database and adding data")
        registerDefaultUsers()
        registerDefaultDocuments()
        createInitialUserAdminCollection()
        createInitialFOLsFilesCollection()

    elif restartData:
        print("Restarting data")
        dropDefaultCollections()
        registerDefaultUsers()
        registerDefaultDocuments()
        createInitialUserAdminCollection()
        createInitialFOLsFilesCollection()

    conn = MongoConnection.PyMongoConnection()
    conn.update("folconn", "databaseStatus", {"statusName": "isInitialized", "statusValue": True},
                {"statusName": "isInitialized"}, True)

    print("Database ready")


if __name__ == "main":
    raise Exception("Module can not be executed without the main.py scope. Use the main file to execute it")
