import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'

import logoSuelo from '../assets/images/Logo_Suelo.jpg'
import CartWidget from './CartWidget'

const NavBar = () => {
    return(
        <>
            <Navbar className="p-0" bg="primary" variant="dark" expand="lg" sticky="top">
                <Container className="ps-0 text-secondary">

                    <Navbar.Brand href="#home" className="p-0 m-0">
                        <img 
                            src={logoSuelo} 
                            width="75"
                            height="75"
                            className="d-inline-block align-top" />
                    </Navbar.Brand>

                        <Container className="d-flex justify-content-center">
                        <Form className="w-50" >
                            <Form.Group >
                                <Form.Control className="text-center" type="search" placeholder="¿Qué querés comer hoy?"/>
                            </Form.Group>
                        </Form>
                        </Container>


                  {/*   <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-secondary bg-primary"/>    

                    <Navbar.Collapse id="basic-navbar-nav" className="">
                        
                        <Nav className="ms-auto w-50" >
                            <Nav.Link className="text-secondary" href="#home">Nosotros</Nav.Link>

                            <Nav.Link className="text-secondary" href="#home">E-commerce</Nav.Link>
                        </Nav>

                    </Navbar.Collapse> */}

                    <CartWidget />

                </Container>
            </Navbar>
        </>
    )
}

/* let stylesNav = {
    display: 'flex',
    backgroundColor: '#1D1D1B',
    width: '100%',
    justifyContent: 'center',
    margin: '0',
    padding: '0',

}

let stylesUl ={
    display: 'flex',
    listStyle: 'none',
    alignItems: 'center'
}

let stylesLi={
    padding: '0 2% 0 2%'
}

let styleImg={
    width: '10%',
    height: '100%'
}

const NavBar = () => {
    return (
        <div style={stylesNav}>
            <img src={logoSuelo} style={styleImg} />
            <h2>Suelo</h2>
            <ul style={stylesUl}>
                <li style={stylesLi}><a href="">Vegetales</a></li>
                <li style={stylesLi}><a href="">Frutas</a></li>
                <li style={stylesLi}><a href="">Sandwiches</a></li>
                <li style={stylesLi}><a href="">Ensaladas</a></li>
            </ul>
        </div>
    )
} */

export default NavBar
