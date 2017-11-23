import {
    getFlights,
    getSpecificFlight
} from '../api/SearchApi'

export const getFlightsData = (searchId) => {
    return dispatch => {
        return getFlights(searchId).then(data => {
            console.log('GET FLIGHTS', data)
        })
    }
}

export const getFlightDetail = (searchId, flightId) => {
    return dispatch => {
        return getSpecificFlight(searchId, flightId).then(data => {
            console.log('GET FLIGHT DETAIL', data)
        })
    }
}