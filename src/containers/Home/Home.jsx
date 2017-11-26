import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-flexbox-grid'
import {
    FlightTabs,
    FlightSort,
    FlightsList,
    FlightAlert,
    FlightSearch,
    FlightsFilter
} from '../../components'
import { search as searchActions } from '../../actions'

class Home extends Component {

    componentDidMount() {
        this.searchFlights()
    }

    searchFlights() {
        const postData = {
            tripType: "RT",
            from: "REC",  //origem
            to: "RIO",  //destino
            outboundDate: "2017-12-22", //data de partida
            inboundDate: "2017-12-28", //data de volta
            cabin: "EC", //classe econômica (EC) ou executiva (EX)
            adults: 2, //adultos
            children: 1, //crianças
            infants: 0 //bebês
        }

        const { createSearch } = this.props
        //createSearch(postData)
    }

    render() {
        const { byId, allIds } = this.props

        return (
            <Grid fluid>
                <FlightSearch />

                <FlightTabs />

                <Row>
                    <Col md={3}>
                        <Row>
                            <FlightAlert />
                            <FlightsFilter />
                        </Row>
                    </Col>

                    <Col md={9}>
                        <FlightSort />

                        <FlightsList 
                            allIds={allIds} 
                            byId={byId} />
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