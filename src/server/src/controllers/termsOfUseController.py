from flask import Blueprint, make_response, request
from models.services.termsOfUseService import changeTermsOfUse
from models.services.termsOfUseService import getTermsOfUseText

termsOfUseRoutes = Blueprint("termsOfUseRoutes", __name__)


@termsOfUseRoutes.route("/termsOfUse", methods=["GET"])
def getTermsOfUse():

    termsOfUseText = getTermsOfUseText()

    return make_response({"termsOfUse": termsOfUseText})


@termsOfUseRoutes.route("/termsOfUse/accept", methods=["POST"])
def acceptTermsOfUse():
    acceptingTermsOfUse = bool(request.json["accept"])
    userId = request.json["userId"]

    changeTermsOfUse(acceptingTermsOfUse, userId)

    return '', 204
