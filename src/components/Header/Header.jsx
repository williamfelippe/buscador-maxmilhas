import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './style.css'

const Header = () => {
    return (
        <header className="bmmHeader">
            <Grid fluid>
                <Row>
                    <Col xs={12} md={6}>
                        <div className="bmmHeader__logo">
                            <span className="bmmHeader__logo__title">
                                Buscador MaxMilhas
                            </span>
                        </div>
                    </Col>

                    <Col md={6}>
                        <Row end="md">
                            <Col mdOffset={3} md={3}>
                                Venda suas milhas
                            </Col>

                            <Col md={3}>
                                Tire suas dúvidas
                            </Col>

                            <Col md={3}>
                                Login ou cadastro
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        </header>
    )
}

export default Header