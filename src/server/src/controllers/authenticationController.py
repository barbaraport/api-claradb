from flask import Blueprint
from flask import request
from flask_cors import cross_origin
from models.services.userService import userLogin

from models.services.userService import adminLogin
from models.services.userService import isValidUser

authRoutes = Blueprint("authRoutes", __name__)


@authRoutes.route("/authentication/login", methods=["POST"])
def login():

    login = request.json["login"].strip()
    password = request.json["password"].strip()

    userId = userLogin(login, password)

    return userId


@authRoutes.route("/authentication/admin/login", methods=["POST"])
@cross_origin()
def administratorLogin():
    userLogin = request.json["login"].strip()
    password = request.json["password"].strip()

    response = adminLogin(userLogin, password)

    return response


@authRoutes.route("/authentication/checkSession", methods=["POST"])
@cross_origin()
def checkSession():
    userId = request.json["userId"]

    response = isValidUser(userId)

    return response
