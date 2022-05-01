from flask import Blueprint
from flask import request
from models.services.userService import userLogin

authRoutes = Blueprint("authRoutes", __name__)


@authRoutes.route("/authentication/login", methods=["POST"])
def login():

    login = request.json["login"].strip()
    password = request.json["password"].strip()

    userId = userLogin(login, password)

    return userId
