import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Placeholder from 'react-bootstrap/Placeholder'
import Spinner from 'react-bootstrap/Spinner'


const Item = ({ products, loading }) => {
    
    

    return (
        <Container className="d-flex justify-content-center">
        { loading ? <Card style={{ width: '18rem' }} className="text-center shadow border-5 m-2" border="primary">
                        <Container class="container flex d-flex">
                            <Spinner animation="border" variant="primary"className="m-3" />
                            <Card.Title>Cargando...</Card.Title>
                        </Container>
                        <Card.Body>
                            <Placeholder as={Card.Text} animation="glow">
                                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                <Placeholder xs={6} /> <Placeholder xs={8} />
                            </Placeholder>
                            <Placeholder.Button variant="primary" xs={6} />
                        </Card.Body>
                    </Card> : products.map( prod => 
            
                    <Card key={prod.id} style={{ width: '18rem' }} className="m-2 text-center shadow border-5 fade-in" border="primary">
                        <div className="overflow">
                            <Card.Img variant="top" src={prod.pictureUrl} className="card-img-top"/>
                        </div>
                        <Card.Body className="bg-secondary">
                            <Card.Title>{prod.title}</Card.Title>
                            <Card.Text>
                            Precio: $ {prod.price}
                            </Card.Text>
                            <Button variant="primary" className="shadow btn-primary w-100 mx-0">Ver detalles</Button>
                        </Card.Body>
                    </Card>
            
            )}
        </Container>
    )
}

export default Item
