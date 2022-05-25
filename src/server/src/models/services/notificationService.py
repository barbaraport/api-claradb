from bson import ObjectId
from models.database.MongoConnection import PyMongoConnection
from werkzeug.exceptions import abort


def persistToken(token, userID):
    conn = PyMongoConnection()

    condition = {"_id": ObjectId(userID)}
    user = conn.getDocument("folconn", "users", condition)

    if user is None:
        abort(404, "User not found with the given credentials")

    equipments = user["Equipment"]

    for equipment in equipments:
        conn.push("folconn", "equipmentUsers", {"Equipment": equipment}, "Users", {"UserID": ObjectId(userID), "Token": token})
        conn.update("folconn", "users", {"Token": token}, {"_id": ObjectId(userID)})

