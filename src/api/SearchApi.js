import axios from 'axios'

/**
 * 
 * @param {object} body 
 */
export const postSearch = (body) =>
    axios.post(`/search`, body)
        .then(response => response.data)

/**
 * 
 * @param {string} searchId 
 * @param {object} body 
 */
export const patchSearch = (searchId, body) =>
    axios.patch(`/search/${searchId}`, body)
        .then(response => response.data)

/**
 * 
 * @param {string} searchId 
 */
export const getSearch = (searchId) =>
    axios.get(`/search/${searchId}`)
        .then(response => response.data)

/**
 * 
 * @param {string} searchId 
 */
export const getFlights = (searchId) =>
    axios.get(`/search/${searchId}/flights`)
        .then(response => response.data)

/**
 * 
 * @param {string} searchId 
 * @param {string} flightId 
 */
export const getSpecificFlight = (searchId, flightId) =>
    axios.get(`/search/${searchId}/flights/${flightId}`)
        .then(response => response.data)

/**
 * 
 * @param {string} searchId 
 */
export const getItineraries = (searchId) =>
    axios.get(`/search/${searchId}/itineraries`)
        .then(response => response.data)