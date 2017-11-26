import React, { Component } from 'react'
import PropTypes from 'prop-types'
import debounce from 'debounce'
import { Row, Col } from 'react-flexbox-grid'
import { MapPin } from 'react-feather'
import airportsInformations from '../../assets/files/airports'
import './style.css'

class AirportAutocomplete extends Component {

    constructor(props) {
        super(props)
        this.state = {
            airportsWhoMatch: [],
            searchText: '',
            showInput: false
        }
    }

    search() {
        const { searchText } = this.state

        const airportsValues = Object.values(airportsInformations.airports)
        const airportsWhoMatch = airportsValues.filter(airport => {
            return (
                (airport.length > 0)
                    ? airport[0]
                        .toLowerCase()
                        .indexOf(searchText) >= 0
                    : false
            )
        })

        this.setState({ airportsWhoMatch })
    }

    onChange(event) {
        const searchText = event.target.value

        this.setState({ searchText }, () => {
            if (searchText.length > 3) {
                debounce(this.search(searchText), 10)
            }
        })
    }

    onSelectAirport(airportCode, name) {
        const { onSelect } = this.props

        this.setState({ searchText: name }, () => {
            onSelect(airportsInformations.airports[airportCode])
        })
    }

    showInput() {
        this.setState({ showInput: true })
    }

    render() {
        const { 
            searchText, 
            airportsWhoMatch, 
            showInput 
        } = this.state
        const { label } = this.props

        const airportsList = airportsWhoMatch.map((item, key) => {
            const name = item[0]
                , code = item[1]

            return (
                <li key={key}>
                    <a onClick={() => this.onSelectAirport(code, name)}>
                        {name}
                    </a>
                </li>
            )
        })

        return (
            <div className="hmmAirportAutocomplete">
                <Row>
                    <Col xs={12}>
                        <p className="hmmAirportAutocomplete__label">
                            {label}
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={11} className="">
                        {
                            (!showInput)
                                ? <a className="hmmAirportAutocomplete__form"
                                    onClick={() => this.showInput()}>
                                    <span className="hmmAirportAutocomplete__form__name">
                                        Belo Horizonte
                                    </span>
                                    <span className="hmmAirportAutocomplete__form__code">
                                        CNF<br />
                                        Confins
                                    </span>
                                </a>
                                : <div>
                                    <input
                                        className="hmmAirportAutocomplete__input"
                                        value={searchText}
                                        onChange={(event) => this.onChange(event)} />

                                    <div style={{ display: (airportsWhoMatch.length) ? 'block' : 'none'}}>
                                        <ul className="">
                                            {airportsList}
                                        </ul>
                                    </div>
                                </div>
                        }
                    </Col>

                    <Col xs={1}>
                        <MapPin size={15} />
                    </Col>
                </Row>
            </div>
        )
    }
}

AirportAutocomplete.propTypes = {
    onSelect: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
}

export default AirportAutocomplete