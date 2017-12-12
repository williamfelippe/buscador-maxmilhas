import {
    getFlights,
    getSpecificFlight
} from '../api/SearchApi'
import { 
    ADD_INBOUND_FLIGHT,
    ADD_OUTBOUND_FLIGHT,
    REMOVE_FLIGHTS
} from '../constants/actionTypes'

export const addInboundFlight = (flight) => ({
    type: ADD_INBOUND_FLIGHT,
    flight
})

export const addOutboundFlight = (flight) => ({
    type: ADD_OUTBOUND_FLIGHT,
    flight
})

export const removeFlights = () => ({
    type: REMOVE_FLIGHTS
})

export const getFlightsData = (searchId, airlineLabel = null) => {
    return dispatch => {
        return getFlights(searchId, airlineLabel)
            .then(data => {
                const { outbound, inbound } = data
                inbound.map((item) => dispatch(addInboundFlight(item)))
                outbound.map((item) => dispatch(addOutboundFlight(item)))
            })
            .catch(error => {
                throw error
            })
    }
}

export const getFlightDetail = (searchId, flightId) => {
    return dispatch => {
        return getSpecificFlight(searchId, flightId).then(data => {
            return data
        })
    }
}