from flask import Blueprint, request

from src.models.services.adminService import getAppLoginAttempts

from src.models.services.adminService import getFolAccesses, getFolAcessesByUserName,getUsers

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
    user = request.args.get("user")
    response = getFolAcessesByUserName(user)
    return response

@adminRoutes.route("/admin/getUsers", methods=["GET"])
def getAllUsers():
    response = getUsers()
    return response
