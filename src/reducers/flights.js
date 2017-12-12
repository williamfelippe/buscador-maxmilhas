import {
    ADD_INBOUND_FLIGHT,
    ADD_OUTBOUND_FLIGHT,
    REMOVE_FLIGHTS
} from '../constants/actionTypes'

const initialState = {
    inboundFlights: {},
    inboundAllIds: [],
    outboundFlights: {},
    outboundAllIds: []
}

const flights = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INBOUND_FLIGHT:
            return addInboundFlight(state, action.flight)

        case ADD_OUTBOUND_FLIGHT:
            return addOutboundFlight(state, action.flight)

        case REMOVE_FLIGHTS:
            return removeFlights(state)

        default:
            return state
    }
}

const addInboundFlight = (state, flight) => {
    const { id } = flight

    return {
        ...state,
        inboundFlights: {
            ...state.inboundFlights,
            byId: {
                ...state.inboundFlights.byId,
                [id]: flight
            }
        },
        inboundAllIds: [
            ...state.inboundAllIds,
            id
        ]
    }
}

const addOutboundFlight = (state, flight) => {
    const { id } = flight

    return {
        ...state,
        outboundFlights: {
            ...state.outboundFlights,
            byId: {
                ...state.outboundFlights.byId,
                [id]: flight
            }
        },
        outboundAllIds: [
            ...state.outboundAllIds,
            id
        ]
    }
}

const removeFlights = (state) => {
    return {
        ...state,
        inboundFlights: {},
        inboundAllIds: [],
        outboundFlights: {},
        outboundAllIds: []
    }
}

export default flights