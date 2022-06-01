from flask import Blueprint

from src.models.services.adminService import getAppLoginAttempts

from src.models.services.adminService import getFolAccesses

adminRoutes = Blueprint("adminRoutes", __name__)


@adminRoutes.route("/admin/getLoginAttempts")
def getLoginAttempts():
    response = getAppLoginAttempts()

    return response


@adminRoutes.route("/admin/getFolAccesses")
def getFolAccess():
    response = getFolAccesses()

    return response
