from geopy.geocoders import Nominatim

geolocator = Nominatim(user_agent="claraDBFolconnApp")


def getCoordinatePlace(position):
    latitude = position["lat"]
    longitude = position["long"]

    stringToGetGeolocation = f"{latitude}, {longitude}";

    location = geolocator.reverse(stringToGetGeolocation, language='en').raw["address"]

    if "city" in location:
        city = location["city"]
    else:
        city = location["city_district"]

    usefulLocation = {
        "suburb": location["suburb"],
        "state": location["state"],
        "country": location["country"],
        "city": city
    }

    return usefulLocation

