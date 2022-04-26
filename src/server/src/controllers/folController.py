from flask import Blueprint
from flask import request
from flask import Response
from flask import abort
from flask import jsonify
from flask import make_response

import base64

from models.database.MongoConnection import PyMongoConnection
from models.services.folsService import getFolsByStatus, getFolsByKeywords, getFolsCategories, getFolsByCategory, \
    getFolsByTitle, getFolFirstPage
from models.services.userService import getUserCarsList

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


@folRoutes.route("/fol/getByKeywords", methods=["GET"])
def getEquipmentFolsByKeywords():
    userId = request.args.get("userId")
    keywords = request.args.get("keywords").split(",")

    carsList = getUserCarsList(userId)

    folsList = getFolsByKeywords(carsList, keywords)

    if folsList is None:
        abort(404, "No FOL found for the given keywords")

    return folsList


@folRoutes.route("/fol/getCategories", methods=["GET"])
def getCategories():
    userId = request.args.get("userId")

    carsList = getUserCarsList(userId)

    return getFolsCategories(carsList)


@folRoutes.route("/fol/getByCategory")
def getByCategory():
    userId = request.args.get("userId")
    category = request.args.get("category")
    carsList = getUserCarsList(userId)

    folsList = getFolsByCategory(carsList, category)

    return folsList


@folRoutes.route("/fol/getByTitle")
def getByTitle():
    userId = request.args.get("userId")
    title = request.args.get("title")
    carsList = getUserCarsList(userId)

    folsList = getFolsByTitle(carsList, title)

    return folsList


@folRoutes.route("/fol", methods=["GET"])
def getFolFile():

    opened_pdf = open("../resources/FOL-MUS-FATEC.pdf", "rb")
    opened_pdf_read = opened_pdf.read()

    fol_base_64 = base64.b64encode(opened_pdf_read).decode()

    response = make_response(jsonify({"data": str(fol_base_64)}))
    return response


@folRoutes.route("/fol/getFirstPage", methods=["GET"])
def getFirstPage():
    fol_title = request.args.get("folTitle")

    first_page = getFolFirstPage(fol_title)

    return first_page
