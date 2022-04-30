from flask import Blueprint, request, abort

carRoutes = Blueprint("carRoutes", __name__)

from models.services.carService import getCarsByUser

@carRoutes.route("/car/carsByUser", methods=["POST"])
def getCarsByUser():
    code = request.json["code"].strip()

    if code == "":
        abort(404, "User not found with the given credentials")

    user_cars = getCarsByUser(code)

    return user_cars
