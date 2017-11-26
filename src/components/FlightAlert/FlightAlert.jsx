import React from 'react'
import { Col } from 'react-flexbox-grid'
import { Button } from '../'
import './style.css'

const FlightAlert = () => {
    return (
        <Col xs={12} className="hmmAlert">
            <div className="hmmHeaders">
                Alerta de preço
            </div>

            <div className="hmmAlert__content">
                <p>
                    <span className="hmmAlert__content__highlight">
                        Crie um alerta de Belo Horizonte para Florianópolis.
                    </span> Quando o voo estiver no preço cadastrado, enviaremos um alerta para 
                    seu e-mail e você economiza ainda mais
                </p>

                <Button
                    text="Criar alerta agora"
                    to={() => console.log('Alerta')} />
            </div>
        </Col>
    )
}

export default FlightAlert