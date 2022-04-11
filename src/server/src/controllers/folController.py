from flask import Blueprint
from flask import request
from flask import abort
from flask import jsonify

from src.models.database.MongoConnection import PyMongoConnection

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


@folRoutes.route("/fol/getByKeywords", methods=["GET"])
def getByKeyword():
    conn = PyMongoConnection()

    equipment = request.args.get("equipment")
    keywords = request.args.get("keywords").split(",")

    condition = {
        "Equipment": equipment,
        "Keywords": {
            "$all": keywords
        }
    }

    documents = list(conn.getDocuments("folconn", "documents", condition))

    if len(documents) == 0:
        abort(404, "No FOL found for the given equipment and keywords")

    response = jsonify(documents)

    return response
