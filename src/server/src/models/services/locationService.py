from geopy.geocoders import Nominatim

geolocator = Nominatim(user_agent="claraDBFolconnApp")

def getCoordinatePlace(position):
    latitude = position["lat"]
    longitude = position["long"]

    stringToGetGeolocation = f"{latitude}, {longitude}";

    location = geolocator.reverse(stringToGetGeolocation).raw

    usefulLocation = {
        "suburb": location["address"]["suburb"],
        "city_district": location["address"]["city_district"],
        "town": location["address"]["town"],
        "state": location["address"]["state"],
        "country": location["address"]["country"],
        "country_code": location["address"]["country_code"]
    }

    return usefulLocation

