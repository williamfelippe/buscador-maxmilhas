import React, { Component } from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom'
import {
	Home,
	NoMatch
} from './containers'
import {
	rootRoute
} from './strings/routes'

class App extends Component {

	componentDidUpdate(prevProps) {
		const prevLocation = prevProps.location
		const currentLocation = this.props.location

		if (currentLocation !== prevLocation) {
			window.scrollTo(0, 0)
		}
	}

	render() {
		return (
			<Router>
				<Switch>
					<Route exact path={rootRoute} component={Home} />
					<Route component={NoMatch} />
				</Switch>
			</Router>
		)
	}
}

export default App
