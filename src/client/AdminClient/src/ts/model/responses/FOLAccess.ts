import { GeoLocation } from "./GeoLocation";

export interface FOLAccess {
    date: string,
    folTitle: string,
    geolocation: GeoLocation,
    userId: string | null,
    userName: string | null
}