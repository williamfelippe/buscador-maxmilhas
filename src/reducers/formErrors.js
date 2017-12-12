import {
    ADD_FORM_ERRORS,
    REMOVE_FORM_ERROR
} from '../constants/actionTypes'

const initialState = {
    errors: {}
}

const formErrors = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FORM_ERRORS:
            return addFormErrors(state, action.errors)

        case REMOVE_FORM_ERROR:
            return removeFormError(state, action.id)

        default:
            return state
    }
}

const addFormErrors = (state, errors) => {
    return {
        ...state,
        errors
    }
}

const removeFormError = (state, id) => {
    let errors = {...state.errors}
    delete errors[id]

    return {
        ...state,
        errors
    }
}

export default formErrors