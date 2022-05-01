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

@authRoutes.route("/authentication/admin/login", methods=["POST"])
@cross_origin()
def adminLogin():
    conn = PyMongoConnection()

    print(request.json)
    userLogin = request.json["login"].strip()
    password = request.json["password"].strip()

    condition = {
        "login": userLogin
    }

    document = conn.getDocument("folconn", "adminUsers", condition)

    if document is None:
        abort(404, "User not found with the given credentials")

    userStoredPassword = document["password"]

    if not bcrypt.checkpw(password.encode("utf-8"), userStoredPassword):
        abort(404, "User not found with the given credentials")

    user_id = str(document["_id"])

    data = {
        "id": user_id
    }

    response = make_response(data)

    return response