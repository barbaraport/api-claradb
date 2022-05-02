from geopy.geocoders import Nominatim

geolocator = Nominatim(user_agent="claraDBFolconnApp")

def getCoordinatePlace(position):
    latitude = position["lat"]
    longitude = position["long"]

    stringToGetGeolocation = f"{latitude}, {longitude}";

    location = geolocator.reverse(stringToGetGeolocation).raw["address"]

    usefulLocation = {
        "suburb": location["suburb"],
        "city_district": location["city_district"],
        "town": location["town"],
        "state": location["state"],
        "country": location["country"],
        "country_code": location["country_code"]
    }

    return usefulLocation

