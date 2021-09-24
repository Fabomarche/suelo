import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

import logoSuelo from '../../assets/images/Logo_Suelo.jpg'
import CartWidget from './CartWidget'
import UserWidget from './UserWidget'

import { Link as RouterLink } from "react-router-dom"

const NavBar = () => {
    return(
        <>
            <Navbar className="flex-column justify-content-center p-0 shadow-lg" bg="primary" variant="dark" expand="lg" sticky="top">
                <Container className="ps-0 text-secondary">
                    <RouterLink exact to='/'>
                        <Navbar.Brand className="col-4 col-md-2 d-flex justify-content-center ms-4 ">
                            <img id="logo-header"
                                src={logoSuelo} 
                                width="75"
                                height="75"
                                className="d-inline-block align-top" />
                        </Navbar.Brand>
                    </RouterLink>

                    <Container className="col-6 order-last order-md-0 d-flex justify-content-center mb-md-0 mb-2">
                        <Form className="buscar flex-grow-1 shadow" >
                            <Form.Group >
                                <Form.Control className="text-center" type="search" placeholder="¿Qué comés hoy?"/>
                            </Form.Group>
                        </Form>
                    </Container>
                    
                    <RouterLink exact to="/cart">
                        <CartWidget />
                    </RouterLink>
                    
                    <UserWidget />
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-secondary bg-primary"/>    

                </Container>
                
                <Navbar.Collapse id="basic-navbar-nav col-2">
                    <Container className="justify-content-center">
                        <Nav>                         
                            <Nav.Link className="categorias m-0" ><RouterLink to={`/categoria/frutas`} className="text-secondary text-decoration-none">Frutas</RouterLink></Nav.Link>
                            <Nav.Link className="categorias m-0"><RouterLink to={`/categoria/verduras`} className="text-secondary text-decoration-none">Verduras</RouterLink></Nav.Link>
                            <Nav.Link className="categorias m-0"><RouterLink to={`/categoria/bakery`} className="text-secondary text-decoration-none">Bakery</RouterLink></Nav.Link>
                            <Nav.Link className="categorias m-0"><RouterLink to={`/categoria/conservas`} className="text-secondary text-decoration-none">Conservas</RouterLink></Nav.Link>
                            <Nav.Link className="categorias m-0"><RouterLink to={`/categoria/legumbres`} className="text-secondary text-decoration-none">Legumbres</RouterLink></Nav.Link>
                        </Nav>
                    </Container>
                </Navbar.Collapse>

            </Navbar>
        </>
    )
}


export default NavBar
