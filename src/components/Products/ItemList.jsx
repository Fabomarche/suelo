import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {
    return (
        <>
            {productos.length !== 0 ?
                                    productos.map( producto => <Item producto={producto}  key={producto.id}/>)
                                    :
                                    <p className="fs-3 text-center">¡No se encuentran productos con esa descripción!</p>
                                }
        </>
    )
}

export default ItemList
