import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { productsFetch } from '../utils/mock'
import ItemList from '../Products/ItemList'

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Placeholder from 'react-bootstrap/Placeholder'
import Spinner from 'react-bootstrap/Spinner'
/* import { isCompositeComponent } from 'react-dom/test-utils' */


const ItemListContainer = ({ mensaje }) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategory } = useParams()

    useEffect(() => {

        if(idCategory){
            productsFetch
            .then(respuesta =>{
                setProductos(respuesta.filter(prod => prod.category === idCategory))
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
        }else{
            productsFetch
            .then(respuesta =>{
                setProductos(respuesta)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
        }

    }, [idCategory])

    

    return (
        <>
            <Container fluid className="d-flex row justify-content-center m-0">
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
                        </Card> 
                    : <ItemList productos={productos}/> }
            </Container>
        
            <h2 className="text-center mt-5">{ mensaje }</h2>
        </>
    )
}

export default ItemListContainer
