import bcrypt
import pandas
from models.database import MongoConnection


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

    termsOfUseColumn = "currentlyAcceptingTermsOfUse"
    dataFrame.insert(0, termsOfUseColumn, False)

    columns = dataFrame.columns.values

    documents = []

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
                    equipmentsList.append(equipment.strip())

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
                keywords = value[i].split(",")

                keywordsList = []

                for keyword in keywords:
                    if keyword != " ":
                        keywordsList.append(keyword.strip())

                document[column] = keywordsList

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


def dropDefaultCollections():
    conn = MongoConnection.PyMongoConnection()

    conn.dropCollections("folconn", ["users", "documents", "adminUsers", "loginAttempts", "folAccessAttempts"])


def isValidDocument(document):
    if isinstance(document[1], int):
        return False
    return True


def synchronizeUsersData():
    conn = MongoConnection.PyMongoConnection()

    usersList = getUsersList(list(conn.getDocuments("folconn", "users", {}, {"Login": 1})))

    dataFrame = pandas.read_excel("../resources/startUpFiles/usersMock.xlsx", sheet_name="query")
    dataFrame = dataFrame.fillna(-1)

    termsOfUseColumn = "currentlyAcceptingTermsOfUse"
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
                    equipmentsList.append(equipment.strip())

                document[column] = equipmentsList

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

    elif restartData:
        print("Restarting data")
        dropDefaultCollections()
        registerDefaultUsers()
        registerDefaultDocuments()
        createInitialUserAdminCollection()

    conn = MongoConnection.PyMongoConnection()
    conn.update("folconn", "databaseStatus", {"statusName": "isInitialized", "statusValue": True},
                {"statusName": "isInitialized"}, True)

    print("Database ready")


if __name__ == "main":
    raise Exception("Module can not be executed without the main.py scope. Use the main file to execute it")
