import React, { useState } from 'react'
import Item from './Item'


const products = [
    {
        id: "001",
        title: "Kiwi",
        price: 250,
        pictureUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/088/440/products/_p6462451-65ba310511aa545df815861420982237-640-0.jpg"
    },
    {
        id: "002",
        title: "Kale",
        price: 165,
        pictureUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/088/440/products/kale1-f7cd5c08d5ead2069715861055204004-1024-1024.jpg"
    },
    {
        id: "003",
        title: "Coliflor",
        price: 280,
        pictureUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/088/440/products/7a1efc1a-97b0-41f7-b25d-aa5cfcf61c5c1-03414fab43b37f314615873822642186-1024-1024.jpeg"
    }
]

const productsFetch = new Promise((res, rej) => {
    setTimeout(() => {
        res(products)
    }, 2000)
})



const ItemList = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    productsFetch.then(respuesta => {setProductos(respuesta)})
    .finally(() => setLoading(false))

    return (
        <div>
            <Item products={productos} loading={loading}/>
        </div>
    )
}

export default ItemList
