import {
    ADD_FLIGHT,
    UPDATE_FLIGHT,
    REMOVE_FLIGHT
} from '../constants/actionTypes'

const initialState = {
    flights: {},
    allIds: []
}

const flights = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FLIGHT:
            return addFlight(state, action.flight)

        case UPDATE_FLIGHT:
            return updateFlight(state, action.id, action.flight)

        case REMOVE_FLIGHT:
            return removeFlight(state, action.id)

        default:
            return state
    }
}

const addFlight = (state, categories) => ({
    
})

const updateFlight = (state, id, flight) => ({

})

const removeFlight = (state, id) => ({

})

export default flights