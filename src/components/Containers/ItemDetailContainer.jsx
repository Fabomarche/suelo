import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import LoadingItem from '../Products/LoadingItem'

import { productsFetch } from '../utils/mock'
import ItemDetail from '../Products/ItemDetail'

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    
    useEffect(() => {
        productsFetch
        .then(resp => setDetalle(resp.find(item => item.id == id)))
        .finally(() => setLoading(false))
    }, [])

    return (
        <div className="d-flex justify-content-center">  
            { loading ? <LoadingItem /> : <ItemDetail detalle={detalle} />
            } 
        </div>
    )
}

export default ItemDetailContainer
