from crypt import methods

from flask import Blueprint

from src.models.database.MongoConnection import PyMongoConnection

userRoutes = Blueprint("userRouter", __name__)

@userRoutes.route("/user/login", methods=["POST"])
def login():
    conn = PyMongoConnection()

@userRoutes.route("/user/cars", methods=["GET"])
def get_cars():
    conn = PyMongoConnection()
