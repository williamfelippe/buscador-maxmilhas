import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Menu, User, MessageSquare, Percent } from 'react-feather'
import './style.css'

const Header = () => {
    return (
        <header className="bmmHeader">
            <Grid fluid>
                <Row>
                    <Col xs={12} md={5} className="bmmHeader__logo">
                        <Menu className="bmmHeader__logo__icon" />
                        <span className="bmmHeader__logo__title">
                            Buscador MaxMilhas
                        </span>
                    </Col>

                    <Col md={7}>
                        <Row end="md">
                            <Col mdOffset={3} md={3} className="bmmHeader__options">
                                <Percent className="bmmHeader__options__icon" />
                                <span>Venda suas milhas</span>
                            </Col>

                            <Col md={3} className="bmmHeader__options">
                                <MessageSquare className="bmmHeader__options__icon" />
                                <span>Tire suas dúvidas</span>
                            </Col>

                            <Col md={3} className="bmmHeader__options">
                                <User className="bmmHeader__options__icon" />
                                <span>Login ou cadastro</span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        </header>
    )
}

export default Header