import React from 'react'
import introSuelo from '../assets/images/intro_suelo.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


const Intro = () => {
    return (
        <Row className="container justify-content-center mt-3">
            <Container className="d-flex justify-content-center">
            <img src={introSuelo} alt="logo suelo mercado organico" />
            </Container>
        </Row>
    )
}

export default Intro
