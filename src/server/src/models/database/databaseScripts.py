import pandas
import bcrypt

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

    columns = dataFrame.columns.values

    documents = []

    for value in dataFrame.values:
        document = {}

        for i in range(len(value)):
            column = columns[i]

            if column == "Equipment":
                equipments = value[i].split(",")
                equipmentsList = []

                for equipment in equipments:
                    equipmentsList.append(equipment.strip())

                document[column] = equipmentsList

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


def dropDefaultCollections():
    conn = MongoConnection.PyMongoConnection()

    conn.dropCollections("folconn", ["users", "documents"])


def initializeDatabase(restartData=False):
    isInitialized = checkInitialization()

    if not isInitialized:
        registerDefaultUsers()
        registerDefaultDocuments()

    elif restartData:
        dropDefaultCollections()

        registerDefaultUsers()
        registerDefaultDocuments()

    conn = MongoConnection.PyMongoConnection()

    conn.update("folconn", "databaseStatus", {"statusName": "isInitialized", "statusValue": True},
                {"statusName": "isInitialized"}, True)


if __name__ == "main":
    raise Exception("Module can not be executed without the main.py scope. Use the main file to execute it")
