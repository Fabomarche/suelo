import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { productsFetch } from '../utils/mock'
import ItemDetail from '../Products/ItemDetail'

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    const { id } = useParams()
    
    useEffect(() => {
        productsFetch
        .then(resp => setDetalle(resp.find(item => item.id == id)))
    }, [])

    return (
        <div className="d-flex justify-content-center">   
            <ItemDetail detalle={detalle} />
        </div>
    )
}

export default ItemDetailContainer
