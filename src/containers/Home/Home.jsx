import React, { Component } from 'react'
import { AirportAutocomplete } from '../../components'

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

class Home extends Component {

    onSelectAirport(airport) {
        console.log('AIRPORT', airport)
    }

    render() {
        return (
            <div>
                <AirportAutocomplete 
                    onSelect={this.onSelectAirport.bind(this)} />
            </div>
        )
    }
}

export default Home