import React from 'react'
import { Loader as LoaderIcon } from 'react-feather'
import './style.css'

const Loader = () => {
    return (
        <div className="hmmLoader">
            <LoaderIcon className="hmmLoader__icon" />
        </div>
    )
}

export default Loader