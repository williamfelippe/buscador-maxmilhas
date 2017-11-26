import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-flexbox-grid'
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
import { search as searchActions } from '../../actions'
import { rootRoute } from '../../strings/routes'

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
        const { createSearch, history } = this.props

        history.push(`${rootRoute}/${this.searchValuesToString(postData)}`)

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

    selectFlight(status) {
        this.setState({ status })
    }

    renderElements() {
        const { loading, error, empty } = this.state

        if (loading) {
            return <Loader />
        }
        else if (error) {
            return <Error />
        }
        else if (empty) {
            return <NoFlights />
        }

        const { byId, allIds } = this.props
        return (
            <div>
                <FlightSort />
                <FlightsList
                    allIds={allIds}
                    byId={byId} />
            </div>
        )
    }

    render() {
        const { status } = this.state

        return (
            <Grid fluid>
                {/*<FlightSearch searchFlights={
                    (postData) => this.searchFlights(postData)
                } />*/}

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

const mapStateToProps = ({ inboundFlights, outboundFlights }) => ({
    byId: inboundFlights.byId,
    allIds: inboundFlights.allIds
})

const mapDispatchToProps = (dispatch) => ({
    createSearch: (body) => dispatch(searchActions.createSearch(body))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)