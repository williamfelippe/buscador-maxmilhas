import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import reducers from './store'

import axios from 'axios'

import App from './App'

import './assets/styles/index.css'

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_API_KEY

let middleware = [promise, thunk]
if (process.env.NODE_ENV !== 'production') {
    const logger = createLogger({
        level: 'info',
        collapsed: true
    })

    middleware = [...middleware, logger]
}

const configuredStore = createStore(
    reducers,
    compose(
        applyMiddleware(...middleware)
    )
)

ReactDOM.render(
    <Provider store={configuredStore}>
        <App />
    </Provider>,
    document.getElementById('root')
)