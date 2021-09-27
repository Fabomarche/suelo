import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import { productsFetch } from '../utils/mock'
import ItemList from '../Products/ItemList'
import LoadingItem from '../Products/LoadingItem'

import Container from 'react-bootstrap/Container'


const ItemListContainer = () => {
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
            <Container fluid className="d-flex row justify-content-center m-0 pt-3">
            { loading ?  <LoadingItem /> : <ItemList productos={productos}/> }
            </Container>
        </>
    )
}

export default ItemListContainer
