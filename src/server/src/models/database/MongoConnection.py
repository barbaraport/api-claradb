import pymongo


class PyMongoConnection:
    def __init__(self):
        self.__databaseUrl = "mongodb://localhost:27017/"
        self.__mongoClient = pymongo.MongoClient(self.__databaseUrl)

    def getDatabaseNamesList(self):
        return self.__mongoClient.list_database_names()

    def getDocument(self, databaseName, collectionName, condition):
        database = self.__mongoClient[databaseName]

        collection = database[collectionName]

        document = collection.find_one(condition)

        return document

    def dropCollections(self, databaseName, collectionsNames):
        database = self.__mongoClient[databaseName]

        for collectionName in collectionsNames:
            database.drop_collection(collectionName)

    def update(self, databaseName, collectionName, document, condition, upsert=False):
        database = self.__mongoClient[databaseName]

        collection = database[collectionName]

        collection.update_one(condition, {"$set": document}, upsert=upsert)

    def insert(self, databaseName, collectionName, document):
        database = self.__mongoClient[databaseName]

        collection = database[collectionName]

        if isinstance(document, list):
            collection.insert_many(document)
        else:
            collection.insert_one(document)

