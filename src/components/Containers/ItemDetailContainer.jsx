import React, { useState, useEffect } from 'react'

import { productsFetch } from '../utils/mock'
import ItemDetail from '../Products/ItemDetail'

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    
    useEffect(() => {
        productsFetch
        .then(resp => setDetalle(resp.find(item => item.id == 1)))
    }, [])

    return (
        <div className="d-flex justify-content-center">   
            <ItemDetail detalle={detalle} />
        </div>
    )
}

export default ItemDetailContainer
