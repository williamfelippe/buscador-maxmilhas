import React from 'react'
import { AlertTriangle } from 'react-feather'
import './style.css'

const Error = () => {
    return (
        <div className="hmmError">
            <AlertTriangle className="hmmError__icon" />

            <p className="hmmError__title">
                Ops...
            </p>

            <p>
                Ocorreu um erro ao realizar sua busca. Por favor, tente novamente.
            </p>
        </div>
    )
}

export default Error