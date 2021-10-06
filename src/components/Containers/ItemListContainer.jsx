import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import { getFirestore } from '../../services/getFirebase'

/* import { productsFetch } from '../utils/mock' */
import ItemList from '../Products/ItemList'
import LoadingItem from '../Products/LoadingItem'

import Container from 'react-bootstrap/Container'



const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategory } = useParams()

    useEffect(() => {

        if(idCategory){
            const dbQuery = getFirestore()
            dbQuery.collection('products').where('category', '==', idCategory).get()
            .then(resp => {
                setProductos(resp.docs.map(product => ( {id: product.id, ...product.data()} )) )
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        } else {
            const dbQuery = getFirestore()
            dbQuery.collection('products').get()
            .then(resp => {
                setProductos(resp.docs.map(product => ( {id: product.id, ...product.data()} )) )
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }

    
    }, [idCategory])

    /* useEffect(() => {

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

    }, [idCategory]) */


    return (
        <>
            <Container fluid className="d-flex row justify-content-center m-0 pt-3">
            { loading ?  <LoadingItem /> : <ItemList productos={productos}/> }
            </Container>
        </>
    )
}

export default ItemListContainer
