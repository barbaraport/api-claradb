from flask import Blueprint
from flask import request
from flask import abort
from flask import jsonify

from src.models.database.MongoConnection import PyMongoConnection
from src.models.services.folsService import getFolsByStatus
from src.models.services.userService import getUserCarsList

folRoutes = Blueprint("folRoutes", __name__)


@folRoutes.route("/fol/getByEquipment", methods=["GET"])
def getByEquipment():
    conn = PyMongoConnection()

    condition = {
        "Equipment": request.args.get("equipment")
    }

    projection = {
        "_id": 0,
        "id": 1,
        "Title": 1,
        "Equipment": 1,
        "Issue description": 1
    }

    document = jsonify(list(conn.getDocuments("folconn", "documents", condition, projection)))

    if document is None:
        abort(404, "No FOL found for the given equipment")

    return document


@folRoutes.route("/fol/getByStatus", methods=["GET"])
def getEquipmentFolsByStatus():
    userId = request.args.get("userId")
    status = request.args.get("status")

    carsList = getUserCarsList(userId)

    folsList = getFolsByStatus(carsList, status)

    if folsList is None:
        abort(404, "No FOL found for the given status")

    return folsList
