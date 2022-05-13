from flask import Blueprint, abort, request, make_response
from models.services.folsService import getFolsByStatus, getFolsByKeywords, getFolsCategories, getFolsByCategory, \
    getFolsByTitle, getFolFirstPage, getOpenedFolFile, getFolsByEquipment, registerAccess
from models.services.userService import getUserCarsList

folRoutes = Blueprint("folRoutes", __name__)


@folRoutes.route("/fol/getByEquipment", methods=["GET"])
def getByEquipment():

    equipment = request.args.get("equipment")
    equipmentFols = getFolsByEquipment(equipment)

    return equipmentFols


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


@folRoutes.route("/fol", methods=["POST"])
def getFolFile():

    folTitle = request.json["folTitle"]
    fol_file = getOpenedFolFile(folTitle)
    return fol_file


@folRoutes.route("/fol/getFirstPage", methods=["GET"])
def getFirstPage():
    fol_title = request.args.get("folTitle")

    first_page = getFolFirstPage(fol_title)

    return first_page


@folRoutes.route("/fol/registerAccess", methods=["POST"])
def registerFolAccess():

    folTitle = request.json["folTitle"]
    position = request.json["position"]
    user = request.json["user"]

    registerAccess(folTitle, position, user)

    return '', 204
