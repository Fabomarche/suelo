import { UseCartContext } from '../../context/cartContext'

import ItemCount from '../ItemCount'

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ItemDetail = ({ detail, condition }) => {
    const { addToCart } = UseCartContext()
    
    const onAdd = (quantity) => {
        addToCart({...detail, quantity: quantity})
    }

    return (
        <div style={{display: condition ? 'contents' : 'none'}}>

            {window.screen.width <= 768 ?
                <Card key={detail.id} style={{ width: '20rem'}} className="m-2 text-center shadow border-4 fade-in" border="dark">
                    <div className="overflow border-bottom border-primary border-3">
                        <Card.Img variant="top" src={detail.pictureUrl} className="card-img-top"/>
                    </div>
                    <Card.Body className="bg-secondary pt-4 pb-0 px-0">
                        <Card.Title className="display-5">{detail.title}</Card.Title>
                        <Card.Text className="details-text text-primary">{detail.description}</Card.Text>
                        <Card.Text className="font-weight-bolder">
                        Precio: $ {detail.price}
                        </Card.Text>

                        <ItemCount stock={detail.stock} initial={1} onAdd={onAdd}/>

                    </Card.Body>
                </Card> 
                :
                <Card key={detail.id} className='m-2 text-center shadow border-4 fade-in w-75' border="dark">
                        <Row className="m-0">
                                <Col className="p-0">
                                    <div className="overflow border-end border-primary border-3">
                                        <Card.Img variant="top" src={detail.pictureUrl} className="img-fluid"/>
                                    </div>
                                </Col>
                            <Col className="mt-auto p-0">
                                <Row className="mb-4 p-3">
                                    <Card.Title className="display-5">{detail.title}</Card.Title>
                                    <Card.Text className="details-text text-primary">{detail.description}</Card.Text>
                                    <Card.Text className="font-weight-bolder"> Precio: $ {detail.price}</Card.Text> 
                                </Row>
                                
                                <Row className="m-0 p-0">
                                    <ItemCount stock={detail.stock} initial={1} onAdd={onAdd}/>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
        }
        </div>
    )
}

export default ItemDetail
