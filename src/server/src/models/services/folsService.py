import base64
import re

import PyPDF2
from bson import ObjectId
from flask import jsonify, make_response, abort
from models.database.MongoConnection import PyMongoConnection

from models.services import locationService
from datetime import datetime



def getFolsByEquipment(equipment):
    conn = PyMongoConnection()

    condition = {
        "Equipment": equipment
    }

    projection = {
        "_id": 0,
        "id": 1,
        "Title": 1,
        "Equipment": 1,
        "Issue description": 1
    }

    document = jsonify(list(conn.getDocuments("folconn", "documents", condition, projection)))

    if document is None:
        abort(404, "No FOL found for the given equipment")

    return document


def getFolsByStatus(equipmentList, status):
    conn = PyMongoConnection()

    condition = {
        "Equipment": {
            "$in": equipmentList
        },
        "Status": status
    }

    projection = {
        "_id": 0,
        "id": 1,
        "Title": 1,
        "Equipment": 1,
        "Issue description": 1
    }

    document = jsonify(list(conn.getDocuments("folconn", "documents", condition, projection)))

    return document


def getFolsByKeywords(equipmentList, keywords):
    conn = PyMongoConnection()

    condition = {
        "Equipment": {
            "$in": equipmentList
        },
        "Keywords": {
            "$in": keywords
        }
    }

    projection = {
        "_id": 0,
        "id": 1,
        "Title": 1,
        "Equipment": 1,
        "Issue description": 1
    }

    document = jsonify(list(conn.getDocuments("folconn", "documents", condition, projection)))

    return document


def getFolsByCategory(equipmentList, category):
    conn = PyMongoConnection()

    condition = {
        "Equipment": {
            "$in": equipmentList
        },
        "Category": category
    }

    projection = {
        "_id": 0,
        "id": 1,
        "Title": 1,
        "Equipment": 1,
        "Issue description": 1
    }

    document = jsonify(list(conn.getDocuments("folconn", "documents", condition, projection)))

    return document


def getFolsCategories(equipmentList):
    conn = PyMongoConnection()

    pipeline = [
        {
            '$match': {
                'Equipment': {
                    '$in': equipmentList
                }
            }
        },
        {
            '$group': {
                '_id': '$Category'
            }
        }
    ]

    document = list(conn.aggregate("folconn", "documents", pipeline))

    categoriesList = []

    for result in document:
        category = result["_id"]

        categoriesList.append(category)

    return jsonify(categoriesList)


def getFolsByTitle(carsList, title):
    conn = PyMongoConnection()

    condition = {
        "Equipment": {
            "$in": carsList
        },
        "Title": {"$regex": title}
    }

    projection = {
        "_id": 0,
        "id": 1,
        "Title": 1,
        "Equipment": 1,
        "Issue description": 1
    }

    document = jsonify(list(conn.getDocuments("folconn", "documents", condition, projection)))

    return document


def getFolFirstPage(folTitle):
    opened_pdf = PyPDF2.PdfFileReader("../resources/FOL-MUS-FATEC.pdf")
    total_pages_pdf = opened_pdf.getNumPages()

    page = 0
    total_matches = 0

    for page_number in range(0, total_pages_pdf):

        opened_page = opened_pdf.getPage(page_number)
        page_text = opened_page.extractText()

        result_search = re.search(folTitle, page_text)
        if result_search is not None:
            total_matches += 1

            if total_matches > 1:
                page = page_number + 1
                break

    return jsonify({"page": page})


def getOpenedFolFile():
    opened_pdf = open("../resources/FOL-MUS-FATEC.pdf", "rb")
    opened_pdf_read = opened_pdf.read()

    fol_base_64 = base64.b64encode(opened_pdf_read).decode()

    return make_response(jsonify({"data": str(fol_base_64)}))


def registerAccess(folTitle, position, user):

    geolocation = locationService.getCoordinatePlace(position)

    folAccessAttempt = {
        "userId": None,
        "folTitle": folTitle,
        "date": datetime.today().replace(microsecond=0),
        "geolocation": geolocation
    }

    conn = PyMongoConnection()

    condition = {
        "_id": ObjectId(user)
    }

    user = conn.getDocument("folconn", "users", condition)

    if user["currentlyAcceptingTermsOfUse"]:
        folAccessAttempt["userId"] = user["_id"]

    conn.insert("folconn", "folAccessAttempts", folAccessAttempt)
