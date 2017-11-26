import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import './style.css'

class FlightTabs extends Component {

    constructor() {
        super()
        this.state = {
            status: "inbound"
        }
    }

    selectFlight(status) {
        this.setState({ status })
    }

    render() {
        const { status } = this.state
        
        return (
            <Row className="hmmFlightTabs">
                <Col xs={6}>
                    <a onClick={() => this.selectFlight('inbound')}
                        className={`hmmFlightTabs__item ${status === 'inbound'
                            ? 'hmmFlightTabs__item--active'
                            : ''} `
                        }>
                        Selecione seu voo de ida
                    </a>
                </Col>

                <Col xs={6}>
                    <a onClick={() => this.selectFlight('outbound')}
                        className={`hmmFlightTabs__item ${status === 'outbound'
                            ? 'hmmFlightTabs__item--active'
                            : ''} `
                        }>
                        Selecione seu voo de volta
                    </a>
                </Col>
            </Row>
        )
    }
}

export default FlightTabs