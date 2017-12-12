import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'
import './style.css'

const FlightTabs = ({ status, selectFlight }) => {

    return (
        <Row className="hmmFlightTabs">
            <Col xs={6}>
                <a onClick={() => selectFlight('inbound')}
                    className={`hmmFlightTabs__item ${status === 'inbound'
                        ? 'hmmFlightTabs__item--active'
                        : ''} `
                    }>
                    <span className="hmmFlightTabs__item__smallText">
                        Selecione sua ida
                    </span>

                    <span className="hmmFlightTabs__item__text">
                        Selecione seu voo de ida
                    </span>
                </a>
            </Col>

            <Col xs={6}>
                <a onClick={() => selectFlight('outbound')}
                    className={`hmmFlightTabs__item ${status === 'outbound'
                        ? 'hmmFlightTabs__item--active'
                        : ''} `
                    }>
                    <span className="hmmFlightTabs__item__smallText">
                        Selecione sua volta
                    </span>
                    <span className="hmmFlightTabs__item__text">
                        Selecione seu voo de volta
                    </span>
                </a>
            </Col>
        </Row>
    )
}

FlightTabs.propTypes = {
    status: PropTypes.string.isRequired,
    selectFlight: PropTypes.func.isRequired
}

export default FlightTabs