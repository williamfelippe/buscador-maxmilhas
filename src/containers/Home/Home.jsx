import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-flexbox-grid'
import {
    search as searchActions,
    formErrors as formErrorsActions,
    flights as flightsActions
} from '../../actions'
import {
    FlightTabs,
    FlightSort,
    FlightsList,
    FlightAlert,
    FlightSearch,
    Loader,
    Error,
    NoFlights
} from '../../components'
import Validator from 'validatorjs'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            error: false,
            empty: true,
            status: "inbound"
        }
    }

    searchValuesToString(values) {
        return (
            Object
                .values(values)
                .reduce((previousValue, currentValue) => `${previousValue}/${currentValue}`, '')
        )
    }

    searchFlights(postData) {
        const { createSearch, removeFlights } = this.props

        if (this.isSearchValid(postData)) {
            removeFlights()
            this.setState({ loading: true, empty: false }, () => {
                createSearch(postData)
                    .then(() => {
                        this.setState({
                            loading: false
                        })
                    })
                    .catch(error => {
                        this.setState({
                            loading: false,
                            empty: false,
                            error: true
                        })
                    })
            })
        }
    }

    isSearchValid(data) {
        const rules = {
            from: "required",
            to: "required",
            outboundDate: "required",
            inboundDate: "required"
        }

        const validation = new Validator(data, rules, { required: 'Campo obrigatório' })

        if (validation.fails()) {
            const { addFormErrors } = this.props
            addFormErrors(validation.errors.all())

            return false
        }

        return true
    }

    selectFlight(status) {
        this.setState({ status })
    }

    renderElements() {
        const { loading, error, empty, status } = this.state

        if (loading) {
            return <Loader />
        }
        else if (error) {
            return <Error />
        }
        else if (empty) {
            return <NoFlights />
        }

        const { inboundFlightsById, inboundAllIds, outboundFlightsById, outboundAllIds } = this.props
        return (
            <div>
                <FlightSort />
                <FlightsList
                    allIds={(status === "inbound") ? inboundAllIds : outboundAllIds}
                    byId={(status === "inbound") ? inboundFlightsById : outboundFlightsById} />
            </div>
        )
    }

    render() {
        const { status } = this.state

        return (
            <Grid fluid>
                <FlightSearch searchFlights={
                    (postData) => this.searchFlights(postData)
                } />

                <FlightTabs
                    status={status}
                    selectFlight={
                        (status) => this.selectFlight(status)
                    } />

                <Row>
                    <Col md={3}>
                        <Row>
                            <FlightAlert />
                        </Row>
                    </Col>

                    <Col md={9}>
                        {this.renderElements()}
                    </Col>
                </Row>
            </Grid>
        )
    }
}

const mapStateToProps = ({ flights }) => ({
    inboundFlightsById: flights.inboundFlights.byId,
    inboundAllIds: flights.inboundAllIds,

    outboundFlightsById: flights.outboundFlights.byId,
    outboundAllIds: flights.outboundAllIds
})

const mapDispatchToProps = (dispatch) => ({
    createSearch: (body) => dispatch(searchActions.createSearch(body)),
    addFormErrors: (errors) => dispatch(formErrorsActions.addFormErrors(errors)),
    removeFlights: () => dispatch(flightsActions.removeFlights())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)