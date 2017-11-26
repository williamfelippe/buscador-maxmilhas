import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'
import { Button } from '../'
import { getDuration, formatTime } from '../../utils/date'
import './style.css'

class FlightItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hasPromotion: false
        }
    }

    showFlightDetail() {

    }

    getPrice(pricing, availableIn) {
        const { airline, miles } = pricing

        let saleTotal
        switch (availableIn) {
            case "both":
                saleTotal = Math.min(airline.saleTotal, miles.saleTotal)
                break

            case "airline":
                saleTotal = airline.saleTotal
                break

            case "miles":
            default:
                saleTotal = miles.saleTotal
                break
        }

        return this.formatPrice(saleTotal)
    }

    formatPrice(value) {
        return `R$${value.toFixed(2)}`
    }

    calculatePercentageOfPromotion(milesTotal, airlineTotal) {
        return ((milesTotal / airlineTotal) * 100) - 100
    }

    getPromotion(pricing, availableIn) {
        const { airline, miles } = pricing

        switch (availableIn) {
            case "both":
                const milesTotal = miles.saleTotal
                const airlineTotal = airline.saleTotal
                if (milesTotal < airlineTotal) {
                    this.setState({ hasPromotion: true })
                    return `Economize ${
                        this.calculatePercentageOfPromotion(milesTotal, airlineTotal)
                        }% na Maxmilhas`
                }

                return 'Mais econonia na cia aérea'

            case "airline":
                return 'Exclusivo na cia aérea'

            case "miles":
                return 'Exclusivo na Maxmilhas'

            default:
                return ''
        }
    }

    getStops(stops) {
        if (stops > 0) {
            return `${stops} ${stops === 1 ? 'parada' : 'paradas'}`
        }

        return 'Voo direto'
    }

    render() {

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
        } = this.props.flight
        const {
            hasPromotion
        } = this.state

        return (
            <Row middle="xs" className="bmmFlightItem">
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
                            {formatTime(departureDate)}
                        </span>
                        {from}
                    </p>
                </Col>

                <Col md={2}>
                    <p className="bmmFlightItem__cell">
                        <span className="bmmFlightItem__cell__title">
                            {getDuration(duration)}
                        </span>
                        {this.getStops(stops)}
                    </p>
                </Col>

                <Col md={2}>
                    <p className="bmmFlightItem__cell">
                        <span className="bmmFlightItem__cell__title">
                            {formatTime(arrivalDate)}
                        </span>
                        {to}
                    </p>
                </Col>

                <Col md={2}>
                    <Button
                        to={() => this.showFlightDetail()}
                        text="Detalhes do voo"
                        secondary />
                </Col>

                <Col md={2}>
                    <p className="bmmFlightItem__cell">
                        <span className="bmmFlightItem__cell__worsePrice">
                            {hasPromotion && `${airline} ${this.formatPrice(pricing.airline.saleTotal)}`}
                        </span>

                        <Button
                            text={`${this.getPrice(pricing, availableIn)}`}
                            to={() => this.showFlightDetail()} /><br />

                        <span className={`bmmFlightItem__cell__promotion ${hasPromotion
                            ? 'bmmFlightItem__cell__promotion--yellow' : ''}`}>
                            {this.getPromotion()}
                        </span>
                    </p>
                </Col>
            </Row>
        )
    }
}

FlightItem.propTypes = {
    flight: PropTypes.object
}

export default FlightItem