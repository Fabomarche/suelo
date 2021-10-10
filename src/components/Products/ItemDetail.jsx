import { UseCartContext } from '../../context/cartContext'

import ItemCount from '../ItemCount'

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ItemDetail = ({ detalle }) => {

    const { addToCart } = UseCartContext()
    
    const onAdd = (quantity) => {
        addToCart({...detalle, quantity: quantity})
    }

    return (
        <>
        {   <Card key={detalle.id} className='m-2 text-center shadow border-4 fade-in w-75' border="dark">
                <Row className="m-0">
                    <Col className="p-0">
                        <div className="overflow border-end border-primary border-3">
                            <Card.Img variant="top" src={detalle.pictureUrl} className="img-fluid"/>
                        </div>
                    </Col>

                    <Col className="mt-auto p-0">
                        <Row className="mb-4 p-3">
                            <Card.Title className="display-5">{detalle.title}</Card.Title>
                            <Card.Text className="detalles-texto text-primary">{detalle.description}</Card.Text>
                            <Card.Text className="font-weight-bolder"> Precio: $ {detalle.price}</Card.Text> 
                        </Row>
                        
                        <Row className="m-0 p-0">
                            <ItemCount stock={detalle.stock} initial={1} onAdd={onAdd}/>
                        </Row>
                    </Col>
                </Row>

            </Card>}

            {/* {<Card key={detalle.id} style={{ width: '25rem'}} className="m-2 text-center shadow border-4 fade-in" border="dark">
                <div className="overflow border-bottom border-primary border-3">
                    <Card.Img variant="top" src={detalle.pictureUrl} className="card-img-top"/>
                </div>
                <Card.Body className="bg-secondary pt-4 pb-0 px-0">
                    <Card.Title>{detalle.title}</Card.Title>
                    <Card.Text className="detalles-texto">{detalle.description}</Card.Text>
                    <Card.Text>
                    Precio: $ {detalle.price}
                    </Card.Text>

                    <ItemCount stock={detalle.stock} initial={1} onAdd={onAdd}/>

                </Card.Body>
            </Card>} */}
        </>
    )
}

export default ItemDetail
