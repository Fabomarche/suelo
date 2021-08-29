import React from 'react'
import introSuelo from '../assets/images/intro_suelo.png'
import {Row, Form, Container} from 'react-bootstrap'

const Intro = () => {
    return (
        <Row className="container justify-content-center mt-3">
            <Container className="d-flex justify-content-center">
            <img src={introSuelo} alt="logo suelo mercado organico" />
            </Container>
            
            <Form className="w-50 mt-3" >
                <Form.Group >
                    <Form.Control className="text-center" type="search" placeholder="¿Qué querés comer hoy?"/>
                </Form.Group>
            </Form>
        </Row>
    )
}

export default Intro
