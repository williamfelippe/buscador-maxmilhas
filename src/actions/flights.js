import {
    getFlights,
    getSpecificFlight
} from '../api/SearchApi'
import { 
    ADD_INBOUND_FLIGHT,
    UPDATE_INBOUND_FLIGHT,
    REMOVE_INBOUND_FLIGHT,
    ADD_OUTBOUND_FLIGHT,
    UPDATE_OUTBOUND_FLIGHT,
    REMOVE_OUTBOUND_FLIGHT
} from '../constants/actionTypes'

export const addInboundFlight = (flight) => ({
    type: ADD_INBOUND_FLIGHT,
    flight
})

export const addOutboundFlight = (flight) => ({
    type: ADD_OUTBOUND_FLIGHT,
    flight
})

export const getFlightsData = (searchId, airlineLabel = null) => {
    return dispatch => {
        return getFlights(searchId, airlineLabel)
            .then(data => {
                const { bestPrice, outbound, inbound } = data
                inbound.map((item) => dispatch(addInboundFlight(item)))
                outbound.map((item) => dispatch(addOutboundFlight(item)))

                /*"bestPrice":{  
                    "pricing":{  
                       "airline":{  
                          "fare":751
                       },
                       "miles":{  
                          "fare":1501.3400000000001
                       }
                    },
                    "outbound":"ffb4cf3e114b95ce121ecc95f7a9685f319e02e1",
                    "inbound":"c34503dc276d9c6b5ef82ef44b85f9d75effdd99"
                 }*/
            })
            .catch(error => {
                throw error
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