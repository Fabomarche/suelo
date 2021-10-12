import { useState, } from 'react'
import { UseSearchContext } from '../../context/searchContext'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


import logoSuelo from '../../assets/images/Logo_Suelo.jpg'
import CartWidget from './CartWidget'
/* import UserWidget from './UserWidget' */

import { Link as RouterLink } from "react-router-dom"

const NavBar = () => {
    const {setTyping, SearchFilter } = UseSearchContext()

    const serchTyping = (e) => {  
        setTyping(e.target.value)
        SearchFilter()
    }


    return(
        <>
            <Navbar className="flex-column justify-content-center p-0 shadow-lg border-bottom border-white border-2" bg="primary" variant="dark" expand="lg" fixed="top">
                <Container className="p-0 text-secondary ">
                    <RouterLink to='/'>
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
                            <Form.Group className="d-flex">
                                <Form.Control className="text-center me-1" type="search" placeholder="¿Qué comés hoy?" name="Search" onChange={serchTyping}/>
                                <Button variant="outline-secondary">Buscar</Button>
                            </Form.Group>
                        </Form>
                    </Container>
                    
                    <RouterLink to={"/cart"} className="text-decoration-none"><CartWidget /></RouterLink>
                    
                    {/* <UserWidget/> */}
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-secondary bg-primary"/>    

                </Container>
                
                <Navbar.Collapse id="basic-navbar-nav col-2">
                    <Container className="justify-content-center border-top border-secondary border-1 border-top border-secondary border-2 py-2">
                        <Nav>                         
                            <RouterLink to={'/categoria/frutas'} className="container categorias m-0 text-secondary text-decoration-none">Frutas</RouterLink>
                            <RouterLink to={'/categoria/verduras'} className="container categorias m-0 text-secondary text-decoration-none">Verduras</RouterLink>
                            <RouterLink to={'/categoria/bakery'} className="container categorias m-0 text-secondary text-decoration-none">Bakery</RouterLink>
                            <RouterLink to={'/categoria/conservas'} className="container categorias m-0 text-secondary text-decoration-none">Conservas</RouterLink>
                            <RouterLink to={'/categoria/legumbres'} className="container categorias m-0 text-secondary text-decoration-none">Legumbres</RouterLink>
                        </Nav>
                    </Container>
                </Navbar.Collapse>

            </Navbar>
        </>
    )
}


export default NavBar
