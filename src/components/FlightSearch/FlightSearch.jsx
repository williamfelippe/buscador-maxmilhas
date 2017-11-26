import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'
import { AirportAutocomplete, FlightDate, FlightPassengers, Button } from '../'
import Datetime from 'react-datetime'
import './style.css'

class FlightSearch extends Component {
    constructor() {
        super()
        this.state = {
            checkoutAirport: [],
            arriveAirport: [],
            checkoutDate: '',
            arriveDate: '',
            adults: 1,
            children: 0,
            infants: 0,
            cabin: "EC"
        }
    }

    onSelectAirport(airport, type) {
        if (type === 'CHECKOUT') {
            this.setState({ checkoutAirport: airport })
            return
        }

        this.setState({ arriveAirport: airport })
    }

    onSelectDate(date, type) {
        if (type === 'CHECKOUT') {
            this.setState({ checkoutDate: date })
            return
        }

        this.setState({ arriveDate: date })
    }

    onSelectPassengersInformations(event) {
        const target = event.target
        this.setState({
            [target.name]: target.value
        })
    }

    isArriveDateValid() {
        const { checkoutDate } = this.state
        if (checkoutDate !== '') {
            const limit = Datetime.moment(checkoutDate, 'YYYY-MM-DD').subtract(1, 'day')
            return (current) => current.isAfter(limit)
        }

        const yesterday = Datetime.moment().subtract(1, 'day')
        return (current) => current.isAfter(yesterday)
    }

    search() {
        const {
            checkoutAirport,
            checkoutDate,
            arriveAirport,
            arriveDate,
            adults,
            children,
            infants,
            cabin
        } = this.state

        const from = checkoutAirport[1]
        const to = arriveAirport[1]

        const postData = {
            tripType: "RT",
            from: from ? from : '',//"REC",  //origem
            to: to ? to : '',//"RIO",  //destino
            outboundDate: checkoutDate,//"2017-12-22", //data de partida
            inboundDate: arriveDate,//"2017-12-28", //data de volta
            adults, //adultos
            children, //crianças
            infants, //bebês
            cabin, //classe econômica (EC) ou executiva (EX)
        }

        this.props.searchFlights(postData)
    }

    render() {
        const { adults, children, infants, cabin } = this.state

        return (
            <Row className="hmmFlightSearch">
                <Col xs={2}>
                    <AirportAutocomplete
                        label="Sair de"
                        onSelect={
                            (airport) => this.onSelectAirport(airport, 'CHECKOUT')
                        } />
                </Col>

                <Col xs={2}>
                    <AirportAutocomplete
                        label="Ir para"
                        onSelect={
                            (airport) => this.onSelectAirport(airport)
                        } />
                </Col>

                <Col xs={2}>
                    <FlightDate
                        label="Ida"
                        onSelect={
                            (date) => this.onSelectDate(date, 'CHECKOUT')
                        } />
                </Col>

                <Col xs={2}>
                    <FlightDate
                        label="Volta"
                        isDateValid={() => this.isArriveDateValid()}
                        checkoutOnly
                        onSelect={(date) => this.onSelectDate(date)} />
                </Col>

                <Col xs={2}>
                    <FlightPassengers
                        onSelectPassengersInformations={
                            (event) => this.onSelectPassengersInformations(event)
                        }
                        adultsValue={adults}
                        childrensValue={children}
                        infantsValue={infants}
                        cabinValue={cabin} />
                </Col>

                <Col xs={2} className="hmmFlightSearch__buttonContainer">
                    <Button
                        text="Pesquisar"
                        buttonClassName="hmmFlightSearch__buttonContainer__button"
                        to={() => this.search()} />
                </Col>
            </Row>
        )
    }
}

FlightSearch.propTypes = {
    searchFlights: PropTypes.func.isRequired
}

export default FlightSearch