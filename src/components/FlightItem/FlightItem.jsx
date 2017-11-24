import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'
import { Button } from '../'
import { getDuration, formatDate } from '../../utils/date'
import './style.css'

const FlightItem = ({ flight }) => {

    const showFlightDetail = () => {

    }

    const getPrice = (pricing, availableIn) => {
        const { airline, miles } = pricing

        let fareTotal
        switch (availableIn) {
            case "both":
            case "airline":
                fareTotal = airline.fareTotal
                break

            case "miles":
            default:
                fareTotal = miles.fareTotal
                break
        }

        return `R$${fareTotal.toFixed(2)}`
    }

    const getStops = (stops) => {
        if (stops > 0) {
            return `${stops} ${stops === 1 ? 'parada' : 'paradas'}`
        }

        return 'Voo direto'
    }

    const {
        airline,
        flightNumber,
        departureDate,
        from,
        duration,
        arrivalDate,
        pricing,
        availableIn,
        stops,
        to
    } = flight

    return (
        <Row className="bmmFlightItem">
            <Col md={2}>
                <p className="bmmFlightItem__cell">
                    <span className="bmmFlightItem__cell__title">
                        {airline}
                    </span>
                    {flightNumber}
                </p>
            </Col>

            <Col md={2}>
                <p className="bmmFlightItem__cell">
                    <span className="bmmFlightItem__cell__title">
                        {formatDate(departureDate)}
                    </span>
                    {from}
                </p>
            </Col>

            <Col md={2}>
                <p className="bmmFlightItem__cell">
                    <span className="bmmFlightItem__cell__title">
                        {getDuration(duration)}
                    </span>
                    {getStops(stops)}
                </p>
            </Col>

            <Col md={2}>
                <p className="bmmFlightItem__cell">
                    <span className="bmmFlightItem__cell__title">
                        {formatDate(arrivalDate)}
                    </span>
                    {to}
                </p>
            </Col>

            <Col md={2}>
                <Button
                    to={showFlightDetail}
                    text="Detalhes do voo"
                    secondary />
            </Col>

            <Col md={2}>
                <span>GOL R$1279,31</span>

                <Button
                    text={`${getPrice(pricing, availableIn)}`}
                    to={() => console.log('Quanta grana O.o')} /><br />
                Economize 44% na Maxmilhas
            </Col>
        </Row>
    )
}

FlightItem.propTypes = {
    flight: PropTypes.object
}

export default FlightItem