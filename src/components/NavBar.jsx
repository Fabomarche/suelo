import React from 'react'
import { Navbar , Container, Nav, NavDropdown, Form, Button} from 'react-bootstrap'
import logoSuelo from '../assets/images/Logo_Suelo.jpg'

const NavBar = () => {
    return(
        <>
            <Navbar className="p-0 " bg="dark" variant="dark" expand="lg" sticky="top">
                <Container fluid className="ps-0">

                    <Navbar.Brand href="#home" className="p-0">
                        <img 
                            src={logoSuelo} 
                            width="75"
                            height="75"
                            className="d-inline-block align-top" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="me-5">
                            <Nav.Link href="#home">Nosotros</Nav.Link>
                            <NavDropdown menuVariant="dark" title="Productos" id="basic-nav-dropdown" className="dark">
                            <NavDropdown.Item href="#action/3.1">Orgánicos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Preparados</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Envasados</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#cart">Carrito</Nav.Link>
                        </Nav>
                        {/* <Form className="d-flex">
                            <Form.Group className="mb-3 me-2" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 me-2" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            
                            <Button h-50 variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form> */}
                    </Navbar.Collapse>
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
