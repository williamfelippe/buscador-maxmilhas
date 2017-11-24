import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Button } from '../'

const options = [
    { text: 'Companhia', value: '', order: 1 },
    { text: 'Partida', value: '', order: 1 },
    { text: 'Duração', value: '', order: 1 },
    { text: 'Chegada', value: '', order: 1 }
]

const FlightSort = ({ }) => {

    const sortBy = (value, order) => {

    }

    const sortOptions = options.map(({ text, value, order }, key) => {
        return (
            <Col md={2} key={key}>
                <a onClick={() => sortBy(value, order)}
                    className="hmmFlightSort__item">
                    <span>{text}</span>
                </a>
            </Col>
        )
    })

    return (
        <section className="hmmFlightSort">
            <Grid>
                <Row>
                    {sortOptions}

                    <Col md={2}>
                        <div className="hmmFlightSort__item">
                            Detalhes
                            <Button 
                                to={() => console.log('Veja as milhas O.o')}
                                text="Ver qtd. milhas" 
                                secondary />
                        </div>
                    </Col>

                    <Col md={2}>
                        <a
                            className="hmmFlightSort__item"
                            onClick={() => sortBy('x', 'bolinha')}>
                            <span>Preço</span>
                            Por adulto (a incluir taxa)
                        </a>
                    </Col>
                </Row>
            </Grid>
        </section>
    )
}

export default FlightSort