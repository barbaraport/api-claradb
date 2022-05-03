from geopy.geocoders import Nominatim

geolocator = Nominatim(user_agent="claraDBFolconnApp")


def getCoordinatePlace(position):
    latitude = position["lat"]
    longitude = position["long"]

    stringToGetGeolocation = f"{latitude}, {longitude}";

    location = geolocator.reverse(stringToGetGeolocation).raw["address"]

    print(location)

    usefulLocation = {
        "suburb": location["suburb"],
        "town": location["town"],
        "state": location["state"],
        "country": location["country"],
        "city": location["city"]
    }

    return usefulLocation
