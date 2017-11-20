import React, { Component } from 'react'

const options = [
    { text: 'Companhia', value: '', order: 1 },
    { text: 'Partida', value: '', order: 1 },
    { text: 'Duração', value: '', order: 1 },
    { text: 'Chegada', value: '', order: 1 }
]

class FlightSort extends Component {
    constructor() {
        super()
        this.state = {
            order: []
        }
    }

    render() {
        const sortOptions = options.map(({ text, value, order }, key) => {
            return (
                <a
                    key={key}
                    onClick={}
                    className="hmmFlightSort__item">
                    <span>{text}</span>
                </a>
            )
        })

        return (
            <section className="hmmFlightSort">
                {sortOptions}

                <div className="hmmFlightSort__item">
                    Detalhes
                    <Button secondary>
                        Ver qtd. milhas
                    </Button>
                </div>

                <a
                    className="hmmFlightSort__item"
                    onClick={}>
                    <span>Preço</span>
                    Por adulto (a incluir taxar)
                </a>
            </section>
        )
    }
}

export default FlightSort