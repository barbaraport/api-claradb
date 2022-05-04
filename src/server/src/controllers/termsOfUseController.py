from flask import Blueprint, make_response
from models.services.termsOfUseService import getTermsOfUseText

termsOfUseRoutes = Blueprint("termsOfUseRoutes", __name__)

@termsOfUseRoutes.route("/termsOfUse", methods=["GET"])
def getTermsOfUse():

    termsOfUseText = getTermsOfUseText()

    return make_response({"termsOfUse": termsOfUseText})