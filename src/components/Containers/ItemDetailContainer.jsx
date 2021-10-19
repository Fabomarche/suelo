import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link as RouterLink} from 'react-router-dom'

import { getFirestore } from '../../services/getFirebase'

import LoadingItem from '../Products/LoadingItem'

import Button from 'react-bootstrap/Button'


/* import { productsFetch } from '../utils/mock' */
import ItemDetail from '../Products/ItemDetail'

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    const [loading, setLoading] = useState(true)
    const [condition, setCondition] = useState(true)
    
    const { id } = useParams()


    useEffect(() => {
        const dbQuery = getFirestore()
        dbQuery.collection('products').doc(id).get()
        .then(resp => {
            resp.data() === undefined ? setCondition(false)
                                    :
                                    setDetalle({id: resp.id, ...resp.data()})
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [id])
    
    
   /*  useEffect(() => {
        productsFetch
        .then(resp => setDetalle(resp.find(item => item.id == id)))
        .finally(() => setLoading(false))
    }, []) */

    

    return (
        <div className={condition ? 'd-flex justify-content-center' : "d-flex flex-column text-center"} >  
            
            <h2 style={{display: condition && 'none'}} className="fs-1 mt-5 pt-5">⚠️ No se encuentra el producto ⚠️</h2>
            <RouterLink to='/'>
                            <Button variant="primary" className="mt-3 shadow" style={{display: condition && 'none'}}>Volver al inicio</Button>
            </RouterLink>

            { loading ? <LoadingItem /> : <ItemDetail detalle={detalle} condition={condition}/>} 

            
        </div>
    )
}

export default ItemDetailContainer
