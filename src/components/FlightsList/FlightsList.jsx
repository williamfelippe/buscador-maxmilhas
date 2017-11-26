import React from 'react'
import { FlightItem } from '../'

const FlightsList = ({ allIds, byId }) => {
    const flightsList = allIds.map((id) => {
        const flight = byId[id]
        return (
            <FlightItem key={id} flight={flight} />
        )
    })

    return (
        allIds.length > 0 ? flightsList : null
    )
}

export default FlightsList