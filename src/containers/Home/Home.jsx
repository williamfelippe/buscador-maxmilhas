import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { AirportAutocomplete, Button, FlightSort, FlightItem } from '../../components'
import { search as searchActions } from '../../actions'

class Home extends Component {

    searchFlights() {
        console.log('BUSCANDO')
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
        createSearch(postData)
    }

    onSelectCheckoutAirport(airport) {
        console.log('CHECKOUT AIRPORT', airport)
    }

    onSelectArriveAirport(airport) {
        console.log('ARRIVE AIRPORT', airport)
    }

    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col xs={2}>
                        <AirportAutocomplete
                            onSelect={(airport) => this.onSelectCheckoutAirport(airport)} />
                    </Col>

                    <Col xs={2}>
                        <AirportAutocomplete
                            onSelect={(airport) => this.onSelectArriveAirport(airport)} />
                    </Col>

                    <Col xs={2}></Col>

                    <Col xs={2}></Col>

                    <Col xs={2}></Col>

                    <Col xs={2}>
                        <Button text="Pesquisar"
                            to={() => this.searchFlights()} />
                    </Col>
                </Row>

                <Row>
                    <Col xs={6}>
                        <div>
                            Selecione seu voo de ida
                        </div>
                    </Col>

                    <Col xs={6}>
                        <div>
                            Selecione seu voo de volta
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md={3}>
                        <Row>
                            <Col xs={12}>
                                {/* Alert */}
                                <div>
                                    <div>
                                        Alerta de preço
                                    </div>

                                    <p>
                                        Crie um alerta de Belo Horizonte para Florianópolis. Quando
                                        o voo estiver no preço cadastrado, enviaremos um alerta para seu e-mail
                                        e você economiza ainda mais
                                    </p>

                                    <Button
                                        text="Criar alerta agora"
                                        to={() => console.log('Alerta')} />
                                </div>
                            </Col>


                            <Col xs={12}>
                                {/* Filter */}
                                <div>
                                    <div>
                                        Filtre seus resultados
                                    </div>

                                    {/* List of checkboxes */}
                                </div>
                            </Col>
                        </Row>

                    </Col>

                    <Col md={9}>
                        <FlightSort />
                        <FlightItem flight={{ok: 'sucks'}} />
                    </Col>
                </Row>
            </Grid>
        )
    }
}

const mapStateToProps = () => ({

})

const mapDispatchToProps = (dispatch) => ({
    createSearch: (body) => dispatch(searchActions.createSearch(body))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)