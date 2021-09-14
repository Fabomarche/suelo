const products = [
{
    id: 1,
    title: "Kiwi",
    price: 250,
    stock: 500,
    pictureUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/088/440/products/_p6462451-65ba310511aa545df815861420982237-640-0.jpg",
    description: "El kiwi es la baya de la enredadera Actinidia deliciosa. Es originaria de una gran área de China, sobre todo de los bosques del valle del río Yangtsé."
},
{
    id: 2,
    title: "Kale",
    price: 165,
    pictureUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/088/440/products/kale1-f7cd5c08d5ead2069715861055204004-1024-1024.jpg"
},
{
    id: 3,
    title: "Coliflor",
    price: 280,
    pictureUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/088/440/products/7a1efc1a-97b0-41f7-b25d-aa5cfcf61c5c1-03414fab43b37f314615873822642186-1024-1024.jpeg"
}
]

export const productsFetch = new Promise((res, rej) => {
setTimeout(() => {
    res(products)
}, 2000)
})