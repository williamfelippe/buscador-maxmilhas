import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Button } from '../'
import './style.css'

const FlightItem = ({ flight }) => {

    const showFlightDetail = () => {

    }

    return (
        <Grid fluid>
            <Row>
                <Col md={2}>
                    <div>
                        <p>
                            <span>GOL</span>
                            G3-1307
                        </p>
                    </div>
                </Col>

                <Col md={2}>
                    <p>
                        <span>
                            11:25
                        </span>
                        CNF (Confins)
                    </p>
                </Col>

                <Col md={2}>
                    <p>
                        <span>
                            3H10
                        </span>
                        1 parada
                    </p>
                </Col>

                <Col md={2}>
                    <p>
                        <span>
                            14:35
                        </span>
                        FLN
                    </p>
                </Col>

                <Col md={2}>
                    <Button
                        to={showFlightDetail}
                        text="Detalhes do voo"
                        secondary />
                </Col>

                <Col md={2}>
                    <div>
                        <span>
                            GOL R$1279,31
                        </span><br />

                        <Button 
                            text="R$268,40" 
                            to={() => console.log('Quanta grana O.o')} /><br />
                        Economize 44% na Maxmilhas
                    </div>
                </Col>
            </Row>
        </Grid>
    )
}

FlightItem.propTypes = {
    flight: PropTypes.object.isRequired
}

export default FlightItem