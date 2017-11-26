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
            selectedAirport: [],
            showInput: true
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
                        .indexOf(searchText.toLowerCase()) >= 0
                    : false
            )
        })

        this.setState({ airportsWhoMatch })
    }

    onChange(event) {
        const searchText = event.target.value

        this.setState({ searchText }, () => {
            if (searchText.length >= 4) {
                debounce(this.search(searchText), 10)
            }
        })
    }

    onSelectAirport(airportCode, name) {
        const { onSelect } = this.props

        this.setState({ searchText: name }, () => {
            const selectedAirport = airportsInformations.airports[airportCode]
            this.setState({
                selectedAirport,
                showInput: false
            }, () => onSelect(selectedAirport))
        })
    }

    showInput() {
        this.setState({ showInput: true })
    }

    formatAirportSelected(position) {
        const { selectedAirport } = this.state
        const name = selectedAirport[0]
        const names = name.split('-')

        if(names.length >= position) {
            return names[position]
        }

        return ''
    }

    render() {
        const {
            searchText,
            airportsWhoMatch,
            showInput,
            selectedAirport
        } = this.state

        const { label } = this.props

        const airportsList = airportsWhoMatch.map((item, key) => {
            const name = item[0]
                , code = item[1]

            return (
                <li key={key}>
                    <a onClick={() => this.onSelectAirport(code, name)} 
                        className="hmmAirportAutocompleteOptions__item">
                        {name} <MapPin className="hmmAirportAutocompleteOptions__item__icon" />
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
                    <Col xs={10}>
                        {
                            (!showInput)
                                ? <a className="hmmAirportAutocomplete__form"
                                    onClick={() => this.showInput()}>
                                    <span className="hmmAirportAutocomplete__form__name">
                                        {this.formatAirportSelected(0)}
                                    </span>
                                    <span className="hmmAirportAutocomplete__form__code">
                                        <b>{selectedAirport[1]}</b><br />
                                        {this.formatAirportSelected(1)}
                                    </span>
                                </a>
                                : <div>
                                    <input
                                        className="hmmAirportAutocomplete__input"
                                        value={searchText}
                                        onChange={(event) => this.onChange(event)} />

                                    <div style={{ display: (airportsWhoMatch.length) ? 'block' : 'none' }}>
                                        <ul className="hmmAirportAutocompleteOptions">
                                            {airportsList}
                                        </ul>
                                    </div>
                                </div>
                        }
                    </Col>

                    <Col xs={2}>
                        <MapPin className="hmmAirportAutocomplete__icon" />
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