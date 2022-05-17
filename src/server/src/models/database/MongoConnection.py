import pymongo


class PyMongoConnection:
    def __init__(self):
        self.__databaseUrl = "mongodb+srv://github_actions:Gu1ebSj9pGWUtla6@folconn.n80k3.mongodb.net/?retryWrites=true&w=majority"
        self.__mongoClient = pymongo.MongoClient(self.__databaseUrl)

    def getDatabaseNamesList(self):
        return self.__mongoClient.list_database_names()

    def getDocument(self, databaseName, collectionName, condition, includeId=True):
        database = self.__mongoClient[databaseName]

        collection = database[collectionName]

        document = collection.find_one(condition)

        if not includeId and document is not None:
            del document["_id"]

        return document

    def getDocuments(self, databaseName, collectionName, condition, projection={"_id": 0}):
        database = self.__mongoClient[databaseName]

        collection = database[collectionName]

        pipeline = [
            {"$match": condition},
            {"$addFields": {
                "id": {"$toString": "$_id"}
            }},
            {"$project": projection}
        ]

        document = collection.aggregate(pipeline)

        return document

    def aggregate(self, databaseName, collectionName, pipeline):
        database = self.__mongoClient[databaseName]

        collection = database[collectionName]

        document = collection.aggregate(pipeline)

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

    def delete(self, databaseName, collectionName, condition):
        database = self.__mongoClient[databaseName]

        collection = database[collectionName]

        collection.delete_one(condition)
