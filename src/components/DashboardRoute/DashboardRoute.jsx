import React from 'react'
import { Route } from 'react-router-dom'
import { Header } from '../'

const DashboardRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        <div>
            <Header {...props} />

            <main>
                <Component {...props} />
            </main>
        </div>
    )} />
)

export default DashboardRoute