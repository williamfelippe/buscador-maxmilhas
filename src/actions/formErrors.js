import {
    ADD_FORM_ERRORS,
    REMOVE_FORM_ERROR
} from '../constants/actionTypes'

export const addFormErrors = (errors) => ({
    type: ADD_FORM_ERRORS,
    errors
})

export const removeFormError = (id) => ({
    type: REMOVE_FORM_ERROR,
    id
})
