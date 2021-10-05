import { useState } from "react"
import { UseCartContext } from "../../context/cartContext"

import { getFirestore } from '../../services/getFirebase'
import  firebase  from 'firebase'
import 'firebase/firestore'

import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Modal from 'react-bootstrap/Modal'

import { Link as RouterLink} from 'react-router-dom'


const Cart = () => {
    const [formData, setFormData] = useState({name:'', phone:'', email:''})
    const [showAlert, setShowAlert] = useState(false)
    const [idPurchase, setIdPurchase] = useState('')

    const { cartList, totalToPay, removeItem, eraseList } = UseCartContext()


    const handleOnSubmit = (e) => {
        e.preventDefault()
        let purchase = {}

        purchase.date = firebase.firestore.Timestamp.fromDate( new Date() )

        purchase.buyer = formData 

        purchase.total = totalToPay

        purchase.items = cartList.map(cartItem => {
            return {id: cartItem.id,
                    title: cartItem.title,
                    price: cartItem.price * cartItem.quantity   
                }
            })
            
            if(formData.email !== formData.email2){
                alert('confirme su email')
            }else {
                const db = getFirestore()
                db.collection('purchases').add(purchase)
                .then(resp => setIdPurchase(resp.id))
                .catch(err => console.log(err))
                .finally(() => {
                    setFormData({name:'', phone:'', email:'', email2:''})
                    eraseList(e)
                })    
                
                //Actualizar todos los items del CartList en CartContentext
                //Filtrar del collection los items en cartList
                const productsToUpdate = db.collection('products')
                .where(firebase.firestore.FieldPath.documentId(), 'in', cartList.map(item => item.id))
                
                const batch = db.batch() 
                
                //restar el stock por cada item
                productsToUpdate.get()
                .then( collection => {
                    collection.docs.forEach(prod => {
                        batch.update(prod.ref, {
                            stock: prod.data().stock - cartList.find(item => item.id === prod.id).quantity
                        })
                    })
                    batch.commit().then(res => {
                        console.log('resuultado batch:', res)
                    })
                }) 

                setShowAlert(true)
            }
};
        
    

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Quitar item
        </Tooltip>
    );

    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        }
        )
    }

    const handleClose = () => setShowAlert(false);


   
    
    //para actualizar data
    // db.collection('products').doc('id').update({stock: ***}) 
    
    return (
        <div className="text-center mt-5 py-5">
            {cartList.length == 0 
            ? <div>
                <h3>No hay items en el carrito</h3>
                <RouterLink to='/'>
                    <Button variant="primary" className="m-1 shadow">Ir a Comprar</Button>
                </RouterLink>
            </div>    

            :<>
            <Button variant="danger" className="mb-4 shadow" onClick={eraseList}>Borrar carrito</Button> 
            <Table striped bordered hover size="sm">
                <thead className="bg-primary text-secondary">
                    <tr>
                    <th>Cantidad</th>
                    <th>Producto</th>
                    <th>Precio unitario</th>
                    <th>Final</th>
                    </tr>
                </thead>
                <tbody>
                {cartList.map(itemInCart => 
                    <tr >
                        <td>{itemInCart.quantity}</td>
                        <RouterLink to={`/detalle/${itemInCart.id}`}>
                            <td>{itemInCart.title}</td>
                        </RouterLink>
                        <td>$ {itemInCart.price}</td>
                        <td>$ {itemInCart.quantity * itemInCart.price}</td>
                        <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
                            <td className="bg-dark" ><CloseButton onClick={(e) => removeItem(itemInCart, e)} aria-label="Hide" variant="white"/></td>
                        </OverlayTrigger>
                    </tr>
                )}
                    <tr>
                        <td colSpan="3" className="text-end text-danger bg-secondary">Total</td>
                        <td className="text-danger bg-secondary">$ {totalToPay}</td>
                    </tr>
                </tbody>
            </Table>
            <Form onChange={handleOnChange} onSubmit={handleOnSubmit}>
                <Row>
                    <Col>
                        <Form.Control required type="text" name="name" placeholder="Nombre y Apellido" value={formData.name} required/>
                    </Col>
                    <Col>
                        <Form.Control required type="text" name="phone" placeholder="Telefono" value={formData.phone}/>
                    </Col>
                </Row>
                <Form.Control required type="email" name="email" placeholder="E-mail" value={formData.email}/>
                <Form.Control required type="email" name="email2" placeholder="Confirme E-mail" value={formData.email2}/>
                <Button variant="primary" className="mt-3 shadow" type="submit" >Terminar compra</Button> 
            </Form>
            </>     
        }
        <Modal show={showAlert}  onHide={handleClose} className="mt-3">
            <Alert show={true} variant="primary" className="m-0">
                <Alert.Heading>¡Compra Terminada!</Alert.Heading>
                    <p>
                        Total abonado: ${totalToPay}
                    </p>
                    <p>
                    Id de compra: {idPurchase}
                    </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button variant="outline-primary" onClick={handleClose}>
                            Cerrar
                        </Button>
                    </div>
            </Alert>
        </Modal>
        </div>

    )
}

export default Cart
