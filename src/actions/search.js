import { postSearch, patchSearch, getSearch } from '../api/SearchApi'
import { flights as flightsActions } from './'

export const createSearch = (body) => {
    return dispatch => {
        return postSearch(body)
            .then(data => {
                const { id, airlines } = data
                if (airlines) {
                    const { getFlightsData } = flightsActions
                    for(const {label, status} of airlines) {
                        if(status.enable) {
                            dispatch(getFlightsData(id, label))
                        }
                    }
                }
            })
            .catch(error => {
                throw error
            })
    }
}

export const updateSearch = (searchId, body) => {
    return dispatch => {
        return patchSearch(searchId, body).then(data => {
            console.log('UPDATE SEARCH', data)
        })
    }
}

export const getSearchData = (searchId) => {
    return dispatch => {
        return getSearch(searchId).then(data => {
            console.log('GET SEARCH', data)
        })
    }
}