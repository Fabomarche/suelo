import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { UseSearchContext } from '../../context/searchContext'

import { getFirestore } from '../../services/getFirebase'
import  firebase  from 'firebase'
import 'firebase/firestore'


/* import { products } from '../utils/mock' */
import ItemList from '../Products/ItemList'
import LoadingItem from '../Products/LoadingItem'

import Container from 'react-bootstrap/Container'



const ItemListContainer = () => {
    /* const [productos, setProductos] = useState([]) */
    const [loading, setLoading] = useState(true)
    const { idCategory } = useParams()
    const { productos, setProductos, setAllProducts } = UseSearchContext()

    useEffect(() => {
        //subir el stock entero acordarde de borrar la collection 
       /*  products.map(item => {
            dbQuery.collection('products').add(item)
            .then(res => console.log(res.id))
            .catch(err => console.log(err))
        }) */
        
        const dbQuery = getFirestore()
        
        dbQuery.collection('products').get()
        .then(resp => {
            setAllProducts(resp.docs.map(product => ( {id: product.id, ...product.data()} )))
        })
        .catch(err => console.log(err))

        const ifQuery = idCategory ?
                        dbQuery.collection('products').where('category', '==', idCategory)
                        :
                        dbQuery.collection('products')
        ifQuery.get()
        .then(resp => {
            setProductos(resp.docs.map(product => ( {id: product.id, ...product.data()} )) )
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
        
        
    }, [idCategory])
    



    return (
        <>
            <Container fluid className="d-flex row justify-content-center m-0 pt-3">
            { loading ?  <LoadingItem /> : <ItemList productos={productos}/> }
            </Container>
        </>
    )
}

export default ItemListContainer
