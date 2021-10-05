import { UseCartContext } from '../../context/cartContext'

import ItemCount from '../ItemCount'

import Card from 'react-bootstrap/Card'

const ItemDetail = ({ detalle }) => {

    const { addToCart } = UseCartContext()
    
    const onAdd = (quantity) => {
        addToCart({...detalle, quantity: quantity})
    }

    return (
        <>
            <Card key={detalle.id} style={{ width: '25rem' }} className="m-2 text-center shadow border-4 fade-in" border="dark">
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
        </Card>
        </>
    )
}

export default ItemDetail
