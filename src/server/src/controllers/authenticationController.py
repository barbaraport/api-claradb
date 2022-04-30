from flask import Blueprint
from flask import request
from models.services.userService import login

authRoutes = Blueprint("authRoutes", __name__)


@authRoutes.route("/authentication/login", methods=["POST"])
def login():

    userLogin = request.json["login"].strip()
    password = request.json["password"].strip()

    userId = login(userLogin, password)

    return userId
