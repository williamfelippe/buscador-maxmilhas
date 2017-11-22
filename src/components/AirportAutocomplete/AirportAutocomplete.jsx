import React, { Component } from 'react'
import PropTypes from 'prop-types'
import debounce from 'debounce'
import airportsInformations from '../../assets/files/airports'
import './style.css'

class AirportAutocomplete extends Component {

    constructor(props) {
        super(props)
        this.state = {
            airportsWhoMatch: [],
            searchText: ''
        }
    }

    search() {
        const { searchText } = this.state

        const airportsWhoMatch = Object.values(
            airportsInformations.airports
        ).filter(airport => {
            return airport[0].toLowerCase().indexOf(searchText) >= 0
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

    render() {
        const { searchText, airportsWhoMatch } = this.state

        const airportsList = airportsWhoMatch.map((item, key) => {
            const name = item[0]
                , code = item[1]

            return (
                <li key={key}>
                    <a onClick={this.onSelectAirport.bind(this, code, name)}>
                        {name}
                    </a>
                </li>
            )
        })

        return (
            <div>
                <input
                    className=""
                    value={searchText}
                    onChange={this.onChange.bind(this)} />

                <div style={{ display: (airportsWhoMatch.length) ? 'block' : 'none' }}>
                    <ul className="">
                        {airportsList}
                    </ul>
                </div>
            </div>
        )
    }
}

AirportAutocomplete.propTypes = {
    onSelect: PropTypes.func.isRequired
}

export default AirportAutocomplete