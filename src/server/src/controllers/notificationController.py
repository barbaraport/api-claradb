from flask import Blueprint, request
from models.services.notificationService import persistToken

notificationRoutes = Blueprint("notificationRoutes", __name__)

@notificationRoutes.route("/notification/persistToken", methods=["POST"])
def persistReceivedToken():
    token = request.json["token"]
    userID = request.json["userID"]

    persistToken(token, userID)

    return '', 204

