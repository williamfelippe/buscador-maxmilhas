import {
    ADD_OUTBOUND_FLIGHT,
    UPDATE_OUTBOUND_FLIGHT,
    REMOVE_OUTBOUND_FLIGHT
} from '../constants/actionTypes'

const initialState = {
    outboundFlights: {},
    allIds: []
}

const outboundFlights = (state = initialState, action) => {
    switch (action.type) {
        case ADD_OUTBOUND_FLIGHT:
            return addFlight(state, action.flight)

        case UPDATE_OUTBOUND_FLIGHT:
            return updateFlight(state, action.id, action.flight)

        case REMOVE_OUTBOUND_FLIGHT:
            return removeFlight(state, action.id)

        default:
            return state
    }
}

const addFlight = (state, flight) => {
    const { id } = flight

    return {
        ...state,
        byId: {
            ...state.byId,
            [id]: flight
        },
        allIds: [
            ...state.allIds,
            id
        ]
    }
}

const updateFlight = (state, id, flight) => {
    return {
        ...state,
        byId: {
            ...state.byId,
            [id]: flight
        }
    }
}

const removeFlight = (state, id) => ({

})

export default outboundFlights