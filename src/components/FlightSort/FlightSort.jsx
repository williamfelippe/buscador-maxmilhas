import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Button } from '../'

const options = [
    { text: 'Companhia', value: '', order: 1 },
    { text: 'Partida', value: '', order: 1 },
    { text: 'Duração', value: '', order: 1 },
    { text: 'Chegada', value: '', order: 1 }
]

class FlightSort extends Component {

    sortBy(value, order) {

    }

    render() {
        const sortOptions = options.map(({ text, value, order }, key) => {
            return (
                <Col md={2} key={key}>
                    <a onClick={() => this.sortBy(value, order)}
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
                                <Button to={() => console.log('Veja as milhas O.o')}
                                    text="Ver qtd. milhas" secondary />
                            </div>
                        </Col>

                        <Col md={2}>
                            <a
                                className="hmmFlightSort__item"
                                onClick={() => this.sortBy('x', 'bolinha')}>
                                <span>Preço</span>
                                Por adulto (a incluir taxar)
                            </a>
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }
}

export default FlightSort