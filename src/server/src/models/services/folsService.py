import base64
import re
from datetime import datetime

import PyPDF2
from bson import ObjectId
from flask import jsonify, abort

from src.models.database.MongoConnection import PyMongoConnection
from src.models.enumerations.FOLsStatuses import FOLsStatuses
from src.models.services import locationService


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
    conn = PyMongoConnection()

    fol = conn.getDocument("folconn", "documents", {"Title": folTitle})
    fol_file = conn.getDocument("folconn", "FOLsFiles", {"Equipment": fol["Equipment"]})

    if fol_file is not None and fol is not None and fol["Status"] == FOLsStatuses.IN_EFFECT:

        opened_pdf = PyPDF2.PdfFileReader("./resources/" + fol_file["fileName"])
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

    return jsonify({"page": 0})


def getOpenedFolFile(folTitle):

    conn = PyMongoConnection()

    fol = conn.getDocument("folconn", "documents", {"Title": folTitle})
    fol_file = conn.getDocument("folconn", "FOLsFiles", {"Equipment": fol["Equipment"]})

    if fol_file is not None:
        opened_pdf = open("./resources/" + fol_file["fileName"], "rb")
        opened_pdf_read = opened_pdf.read()

        fol_base_64 = base64.b64encode(opened_pdf_read).decode()

        return {"data": str(fol_base_64)}

    return {"data": ""}


def registerAccess(folTitle, position, userId):
    geolocation = locationService.getCoordinatePlace(position)

    folAccessAttempt = {
        "userId": None,
        "userName": None,  # TO-DO Salvar o nome do usuário também 🥺
        "folTitle": folTitle,
        "date": datetime.today().replace(microsecond=0),
        "geolocation": geolocation
    }

    conn = PyMongoConnection()

    condition = {
        "_id": ObjectId(userId)
    }

    user = conn.getDocument("folconn", "users", condition)

    if user["currentlyAcceptingTermsOfUse"]:
        folAccessAttempt["userId"] = userId
        folAccessAttempt["userName"] = user["Username"]

    conn.insert("folconn", "folAccessAttempts", folAccessAttempt)
