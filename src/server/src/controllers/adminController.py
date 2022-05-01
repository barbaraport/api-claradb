from flask import Blueprint
from flask import request
from flask_cors import cross_origin

from models.services.adminService import getAppLoginAttempts

adminRoutes = Blueprint("adminRoutes", __name__)


@adminRoutes.route("/admin/getLoginAttempts")
def getLoginAttempts():
    response = getAppLoginAttempts()

    return response
