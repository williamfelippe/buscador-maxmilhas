import React from 'react'
import { Info } from 'react-feather'
import './style.css'

const NoFlights = () => {
    return (
        <div className="hmmNoFlights">
            <Info className="hmmNoFlights__icon" />

            <p className="hmmNoFlights__title">
                Nenhum voo no momento
            </p>

            <p >
                Realize uma pesquisa logo acima
            </p>
        </div>
    )
}

export default NoFlights