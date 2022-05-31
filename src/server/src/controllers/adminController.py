from flask import Blueprint
from flask import request
from flask_cors import cross_origin

from models.services.adminService import getAppLoginAttempts

from models.services.adminService import getFolAccesses, getFolAcessesByUserName,getUsers

adminRoutes = Blueprint("adminRoutes", __name__)


@adminRoutes.route("/admin/getLoginAttempts")
def getLoginAttempts():
    response = getAppLoginAttempts()

    return response


@adminRoutes.route("/admin/getFolAccesses")
def getFolAccess():
    response = getFolAccesses()

    return response


@adminRoutes.route("/admin/getAccessByUser", methods=["GET"])
def getAccessByUser():
    user = request.args["user"]
    response = getFolAcessesByUserName(user)
    return response

@adminRoutes.route("/admin/getUsers", methods=["GET"])
def getAllUsers():
    response = getUsers()
    return response
