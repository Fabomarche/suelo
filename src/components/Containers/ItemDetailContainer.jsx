import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getFirestore } from '../../services/getFirebase'

import LoadingItem from '../Products/LoadingItem'

import { productsFetch } from '../utils/mock'
import ItemDetail from '../Products/ItemDetail'

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()


    useEffect(() => {
        const dbQuery = getFirestore()
        dbQuery.collection('products').doc(id).get()
        .then(resp => setDetalle({id: resp.id, ...resp.data()}))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [])

    
   /*  useEffect(() => {
        productsFetch
        .then(resp => setDetalle(resp.find(item => item.id == id)))
        .finally(() => setLoading(false))
    }, []) */

    return (
        <div className="d-flex justify-content-center">  
            { loading ? <LoadingItem /> : <ItemDetail detalle={detalle} />
            } 
        </div>
    )
}

export default ItemDetailContainer
