import { useState } from "react"
import { UseCartContext } from "../../context/cartContext"

import { Link as RouterLink} from 'react-router-dom'

import { getFirestore } from '../../services/getFirebase'
import  firebase  from 'firebase'
import 'firebase/firestore'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Modal from 'react-bootstrap/Modal'
import { Container } from "react-bootstrap"

const CartForm = () => {
    const [formData, setFormData] = useState({name:'', phone:'', email:'', email2:''})
    const [showAlert, setShowAlert] = useState(false)
    const [idPurchase, setIdPurchase] = useState('')

    const { cartList, totalToPay, eraseList } = UseCartContext()


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

    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        }
        )
    }

    const handleClose = () => setShowAlert(false);

    return (
        <>
            <h3 className="pt-5 text-center text-dark">Ingresa tus datos para confirmar la compra</h3>
            <Form onChange={handleOnChange} onSubmit={handleOnSubmit} className="container text-center py-4 w-75">
                <Row>
                    <Col>
                        <Form.Control required type="text" name="name" placeholder="Nombre y Apellido" defaultValue={formData.name} required/>
                    </Col>
                    <Col>
                        <Form.Control required type="text" name="phone" placeholder="Telefono" defaultValue={formData.phone}/>
                    </Col>
                </Row>
                <Form.Control required type="email" name="email" placeholder="E-mail" defaultValue={formData.email}/>
                <Form.Control required type="email" name="email2" placeholder="Confirme E-mail" defaultValue={formData.email2}/>
                <p className="mt-5 mb-0">Total a pagar: ${totalToPay}</p>
                <Button variant="danger" className="m-0 shadow" type="submit" >Terminar compra</Button> 
            </Form>

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
                    <RouterLink to={`/`}>   
                        <Button variant="outline-primary" onClick={handleClose}>
                            Cerrar
                        </Button>
                    </RouterLink>
                    </div>
            </Alert>
        </Modal>
            
        </>
    )
}

export default CartForm
