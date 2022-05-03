export type LoginAttempt = {
    geolocation: {
        city: string,
        country: string,
        state: string,
        suburb: string,
        town: string
    },
    date: string,
    userId: string | null,
    userName: string | null
}
