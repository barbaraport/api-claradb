import { GeoLocation } from "./GeoLocation"

export type LoginAttempt = {
    geolocation: GeoLocation,
    date: string,
    userId: string | null,
    userName: string | null
}
