from flask import  jsonify

def homeFunction():
    return jsonify({"message":""})

def helloWorld():
    return jsonify({"message":"hello world"})