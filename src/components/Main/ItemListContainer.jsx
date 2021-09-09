import React from 'react'
import ItemList from '../Products/ItemList'

const ItemListContainer = ({ mensaje }) => {
    return (
        <>
            <ItemList />
            <h2 className="text-center mt-5">{ mensaje }</h2>
        </>
    )
}

export default ItemListContainer
