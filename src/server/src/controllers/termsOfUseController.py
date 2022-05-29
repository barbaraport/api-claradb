from flask import Blueprint, make_response, request, jsonify
from models.services.termsOfUseService import getTermsOfUseText

from models.services.termsOfUseService import changeTermsOfUse

from src.models.services.termsOfUseService import getTermsOfUseOptions, getUserSelectedOptions, \
    isAcceptingLastVersion

termsOfUseRoutes = Blueprint("termsOfUseRoutes", __name__)


@termsOfUseRoutes.route("/termsOfUse", methods=["GET"])
def getTermsOfUse():
    termsOfUseText = getTermsOfUseText()

    return make_response({"termsOfUse": termsOfUseText})


@termsOfUseRoutes.route("/termsOfUse/accept", methods=["POST"])
def acceptTermsOfUse():
    acceptingTermsOfUse = request.json["acceptedOption"]
    userId = request.json["userId"]

    changeTermsOfUse(acceptingTermsOfUse, userId)

    return '', 204


@termsOfUseRoutes.route("/termsOfUse/getOptions", methods=["GET"])
def getOptionsTermsOfUse():
    options = make_response(jsonify(getTermsOfUseOptions()))

    return options


@termsOfUseRoutes.route("/termsOfUse/getUserSelectedOptions", methods=["GET"])
def getSelectedOptions():
    userId = request.args.get("userId")

    selectedOptions = make_response(jsonify(getUserSelectedOptions(userId)))

    return selectedOptions


@termsOfUseRoutes.route("/termsOfUse/acceptingLastVersion", methods=["GET"])
def getAcceptingVersion():
    userId = request.args.get("userId")

    selectedOptions = make_response(jsonify(isAcceptingLastVersion(userId)))

    return selectedOptions
