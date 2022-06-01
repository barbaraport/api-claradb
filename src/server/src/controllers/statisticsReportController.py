from flask import Blueprint, make_response, request, jsonify

from src.models.services.statisticsReportService import getUsersWithAcceptedTerms, getUserAcceptanceHistory

statisticsReportRoutes = Blueprint("statisticsReportController", __name__)


@statisticsReportRoutes.route("/statisticsReport/getUsersWithTerms", methods=["GET"])
def getUsersWithTerms():
    terms = request.args.get("terms").split(",")
    version = request.args.get("version")

    usersWithTerms = getUsersWithAcceptedTerms(terms, version)

    response = make_response(jsonify(list(usersWithTerms)))

    return response


@statisticsReportRoutes.route("/statisticsReport/getUserHistory", methods=["GET"])
def getUserHistory():
    userId = request.args.get("userId")

    userHistory = getUserAcceptanceHistory(userId)

    response = make_response(jsonify(userHistory))

    return response
