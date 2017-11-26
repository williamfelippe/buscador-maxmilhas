import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import Datetime from 'react-datetime'
import { AirportAutocomplete, Button } from '../'
import 'react-datetime/css/react-datetime.css'
import './style.css'

const FlightSearch = () => {
    return (
        <Row className="hmmFlightSearch">
            <Col xs={2}>
                <AirportAutocomplete
                    label="Sair de"
                    onSelect={(airport) => this.onSelectCheckoutAirport(airport)} />
            </Col>

            <Col xs={2}>
                <AirportAutocomplete
                    label="Ir para"
                    onSelect={(airport) => this.onSelectArriveAirport(airport)} />
            </Col>

            <Col xs={2}>
                <Datetime />
            </Col>

            <Col xs={2}>
                <Datetime />
            </Col>

            <Col xs={2}></Col>

            <Col xs={2}>
                <Button text="Pesquisar"
                    to={() => this.searchFlights()} />
            </Col>
        </Row>
    )
}

export default FlightSearch