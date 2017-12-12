import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'
import { Users } from 'react-feather'
import _ from 'lodash'
import './style.css'

const cabinOptions = {
    "EC": { value: "EC", name: "Classe Econômica" },
    "EX": { value: "EX", name: "Classe Executiva" }
}

const FlightPassengersForm = ({
    openMenu,
    onSelectPassengersInformations,
    adultsValue,
    childrensValue,
    infantsValue,
    cabinValue
}) => {

    const renderOptions = (amount = 1, from = 0) => {
        return (
            _.range(from, amount).map(item => {
                return (
                    <option value={item} key={item}>
                        {item}
                    </option>
                )
            })
        )
    }

    const cabinOptionsList = Object.values(cabinOptions).map(({ value, name }) => {
        return (
            <option key={value} value={value}>{name}</option>
        )
    })

    return (
        <div style={{ display: (openMenu) ? 'block' : 'none' }}
            className="hmmFlightPassengersDropdown">
            <Row start="xs">
                <Col xs={6}>
                    <select
                        name="adults"
                        className="hmmFlightPassengersDropdown__select"
                        onChange={onSelectPassengersInformations}
                        value={adultsValue}>
                        {renderOptions(10, 1)}
                    </select>
                </Col>
                <Col xs={6}>
                <p className="hmmFlightPassengersDropdown__selectLabel">
                    Adultos
                    </p>
                </Col>
            </Row>

            <Row start="xs">
                <Col xs={6}>
                    <select
                        className="hmmFlightPassengersDropdown__select"
                        name="children"
                        onChange={onSelectPassengersInformations}
                        value={childrensValue}>
                        {renderOptions(parseInt(adultsValue, 10) + 1)}
                    </select>
                </Col>
                <Col xs={6}>
                    <p className="hmmFlightPassengersDropdown__selectLabel">Crianças</p>
                    <p className="hmmFlightPassengersDropdown__selectLabelHint">2 a 11 anos</p>
                </Col>
            </Row>

            <Row start="xs">
                <Col xs={6}>
                    <select
                        className="hmmFlightPassengersDropdown__select"
                        name="infants"
                        onChange={onSelectPassengersInformations}
                        value={infantsValue}>
                        {renderOptions(parseInt(adultsValue, 10) + 1)}
                    </select>
                </Col>
                <Col xs={6}>
                    <p className="hmmFlightPassengersDropdown__selectLabel">Bebês</p>
                    <p className="hmmFlightPassengersDropdown__selectLabelHint">0 a 23 meses</p>
                </Col>
            </Row>

            <Row start="xs">
                <Col xs={12}>
                    <select
                        className="hmmFlightPassengersDropdown__select"
                        name="cabin"
                        onChange={onSelectPassengersInformations}
                        value={cabinValue}>
                        {cabinOptionsList}
                    </select>
                </Col>
            </Row>
        </div>
    )
}

class FlightPassengers extends Component {

    constructor() {
        super()
        this.state = {
            openMenu: false
        }
    }

    onClick() {
        this.setState((prevState) => {
            return {
                openMenu: !prevState.openMenu
            }
        })
    }

    render() {
        const {
            onSelectPassengersInformations,
            adultsValue,
            childrensValue,
            infantsValue,
            cabinValue
        } = this.props
        const { openMenu } = this.state

        return (
            <div>
                <div className="hmmFlightPassengers">
                    <Row>
                        <Col xs={12}>
                            <p className="hmmFlightPassengers__label">
                                Passageiros
                            </p>
                        </Col>
                    </Row>
                    <Row middle="xs">
                        <Col xs={10}>
                            <a className="hmmFlightPassengers__input"
                                onClick={() => this.onClick()}>
                                <div>
                                    <span className="hmmFlightPassengers__input__adultsValue">
                                        {adultsValue}
                                    </span>
                                </div>
                                <div>
                                    <p className="hmmFlightPassengers__input__adult">
                                        Adulto
                                    </p>
                                    <p className="hmmFlightPassengers__input__cabin">
                                        {cabinOptions[cabinValue].name}
                                    </p>
                                </div>
                            </a>
                        </Col>

                        <Col xs={2}>
                            <Users className="hmmFlightPassengers__icon" />
                        </Col>
                    </Row>
                </div>
                <FlightPassengersForm
                    openMenu={openMenu}
                    onSelectPassengersInformations={onSelectPassengersInformations}
                    adultsValue={adultsValue}
                    childrensValue={childrensValue}
                    infantsValue={infantsValue}
                    cabinValue={cabinValue} />
            </div>
        )
    }
}

FlightPassengers.propTypes = {
    onSelectPassengersInformations: PropTypes.func.isRequired,
    adultsValue: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,
    childrensValue: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,
    infantsValue: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,
    cabinValue: PropTypes.string.isRequired
}

export default FlightPassengers