import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Datetime from 'react-datetime'
import { Row, Col } from 'react-flexbox-grid'
import { Calendar } from 'react-feather'
import { formatDate, monthToString } from '../../utils/date'
import { formErrors as formErrorsActions } from '../../actions'
import 'react-datetime/css/react-datetime.css'
import './style.css'

class FlightDate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedDate: '',
            showInput: true
        }
    }

    onChange(date) {
        const formattedDate = formatDate(date, 'YYYY-MM-DD')
        const { onSelect } = this.props
        this.setState({ selectedDate: date, showInput: false }, () => onSelect(formattedDate))
    }

    showInput() {
        this.setState({ showInput: true })
    }

    getValuesFromSelectedDate() {
        const { selectedDate } = this.state

        return (selectedDate === '')
            ? {
                day: '',
                month: '',
                year: ''
            }
            : {
                day: selectedDate.date(),
                month: selectedDate.month() + 1,
                year: selectedDate.year()
            }
    }

    hideInput() {
        const { selectedDate } = this.state
        if (selectedDate !== '') {
            this.setState({ showInput: false })
        }
    }

    isValidDate() {
        const { isDateValid } = this.props
        if (isDateValid) {
            return isDateValid()
        }

        const yesterday = Datetime.moment().subtract(1, 'day')
        return (current) => current.isAfter(yesterday)
    }

    render() {
        const { showInput, selectedDate } = this.state
        const { id, errors, label, removeFormError } = this.props

        const { day, month, year } = this.getValuesFromSelectedDate()

        return (
            <div className="hmmFlightDate">
                <Row>
                    <Col xs={12}>
                        <p className="hmmFlightDate__label">
                            {label}
                        </p>
                    </Col>
                </Row>
                <Row middle="xs">
                    <Col xs={10}>
                        {
                            (!showInput)
                                ? <a className="hmmFlightDate__form"
                                    onClick={() => this.showInput()}>
                                    <div>
                                        <span className="hmmFlightDate__form__day">
                                            {day}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="hmmFlightDate__form__month">
                                            {(month !== '') ? monthToString(month) : ''}
                                        </p>
                                        <p className="hmmFlightDate__form__year">
                                            {year}
                                        </p>
                                    </div>
                                </a>
                                : <div>
                                    <Datetime
                                        value={selectedDate}
                                        isValidDate={this.isValidDate()}
                                        closeOnSelect
                                        timeFormat={false}
                                        inputProps={{
                                            onFocus: () => removeFormError(id),
                                            onBlur: () => this.hideInput(),
                                            className: 'hmmFlightDate__input'
                                        }}
                                        onChange={(value) => this.onChange(value)} />
                                    <div style={{ display: (errors[id]) ? 'block' : 'none' }}
                                        className="hmmFlightDate__error">
                                        {errors[id]}
                                    </div>
                                </div>
                        }
                    </Col>

                    <Col xs={2}>
                        <Calendar className="hmmFlightDate__icon" />
                    </Col>
                </Row>
            </div>
        )
    }
}

FlightDate.propTypes = {
    id: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    checkoutOnly: PropTypes.bool,
    isDateValid: PropTypes.func,
}

const mapStateToProps = ({ formErrors }) => ({
    errors: formErrors.errors
})

const mapDispatchToProps = (dispatch) => ({
    removeFormError: (id) => dispatch(formErrorsActions.removeFormError(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(FlightDate)