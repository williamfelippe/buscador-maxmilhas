import {
    ADD_INBOUND_FLIGHT,
    UPDATE_INBOUND_FLIGHT,
    REMOVE_INBOUND_FLIGHT
} from '../constants/actionTypes'

const initialState = {
    inboundFlights: {},
    allIds: []
}

const inboundFlights = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INBOUND_FLIGHT:
            return addFlight(state, action.flight)

        case UPDATE_INBOUND_FLIGHT:
            return updateFlight(state, action.id, action.flight)

        case REMOVE_INBOUND_FLIGHT:
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

export default inboundFlights