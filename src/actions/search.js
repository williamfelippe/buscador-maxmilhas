import {
    postSearch,
    patchSearch,
    getSearch
} from '../api/SearchApi'

export const createSearch = (body) => {
    return dispatch => {
        postScreateSearch(body).then(data => {
            console.log('CREATE SEARCH', data)
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