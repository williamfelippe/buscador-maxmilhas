import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../'
import './style.css'

const FlightItem = ({ flight }) => {
    
    const showFlightDetail = () => {

    }

    return (
        <div>
            <div>
                <div>
                    <p>
                        <span>
                            GOL
                        </span>
                        G3-1307
                    </p>
                </div>

                <div>
                    <p>
                        <span>
                            11:25
                        </span>
                        CNF (Confins)
                    </p>
                </div>

                <div>
                    <p>
                        <span>
                            3H10
                        </span>
                        1 parada
                    </p>
                </div>

                <div>
                    <p>
                        <span>
                            14:35
                        </span>
                        FLN
                    </p>
                </div>

                <div>
                    <Button 
                        to={showFlightDetail}
                        text="Detalhes do voo" 
                        secondary />
                </div>
            </div>

            <div>
                <div>
                    <span>
                        GOL R$1279,31
                    </span><br />

                    <Button text="R$268,40" /><br />
                    Economize 44% na Maxmilhas
                </div>
            </div>
        </div>
    )
}

FlightItem.propTypes = {
    flight: PropTypes.object.isRequired
}

export default FlightItem