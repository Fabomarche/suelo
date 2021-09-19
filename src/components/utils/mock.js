const products = [
{
    id: 1,
    category: 'frutas',
    title: "Kiwi",
    price: 250,
    stock: 500,
    pictureUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/088/440/products/_p6462451-65ba310511aa545df815861420982237-640-0.jpg",
    description: "El kiwi es la baya de la enredadera Actinidia deliciosa. Es originaria de una gran área de China, sobre todo de los bosques del valle del río Yangtsé."
},
{
    id: 2,
    category: 'verduras',
    title: "Kale",
    price: 165,
    stock: 450,
    pictureUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/088/440/products/kale1-f7cd5c08d5ead2069715861055204004-1024-1024.jpg",
    description:"lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem "
},
{
    id: 3,
    category: 'verduras',
    title: "Coliflor",
    price: 280,
    stock: 450,
    pictureUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/088/440/products/7a1efc1a-97b0-41f7-b25d-aa5cfcf61c5c1-03414fab43b37f314615873822642186-1024-1024.jpeg",
    description:"lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem "
},
{
    id: 4,
    category: 'verduras',
    title: "Lechuga Francesa",
    price: 115,
    stock: 1000,
    pictureUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/088/440/products/_p6455641-d8f9208102669c201c15861055731430-1024-1024.jpg",
    description:"350gr Lechuga Francesa Orgánica (aprox 1 planta grande o 2 medianas)"
},
{
    id: 5,
    category: 'frutas',
    title: "Manzana Roja",
    price: 275,
    stock: 300,
    pictureUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/088/440/products/_p6463391-513490b576b307c2b815861057231148-1024-1024.jpg",
    description:"lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem "
},
{
    id: 6,
    category: 'frutas',
    title: "Limón",
    price: 299,
    stock: 1500,
    pictureUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/088/440/products/diseno-sin-titulo-51-11-b7212dc7d49e79a0cd16192213359234-640-0.png",
    description:"lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem "
},
{
    id: 7,
    category: 'frutas',
    title: "Tomate Cherry",
    price: 299,
    stock: 1500,
    pictureUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/088/440/products/_p6460381-6418042ae6e258faa215861066099585-640-0.jpg",
    description:"lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem "
},
{
    id: 8,
    category: 'verduras',
    title: "Batata",
    price: 299,
    stock: 1500,
    pictureUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/088/440/products/_p6461401-5c282797786bf8f82015861050573791-1024-1024.jpg",
    description:"lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem "
},
{
    id: 9,
    category: 'bakery',
    title: "Pan",
    price: 100,
    stock: 200,
    pictureUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/088/440/products/lhoimg_65161-a18168ca2740dd59be16179924212750-640-0.jpg",
    description:"lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem "
},
{
    id: 10,
    category: 'conservas',
    title: "Tomate Orgánico Triturado",
    price: 678,
    stock: 500,
    pictureUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/088/440/products/tomate-11-0c94aff3e537da2d7816232606703412-1024-1024.jpg",
    description:"lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem "
},
{
    id: 11,
    category: 'legumbres',
    title: "Porotos Negros",
    price: 460,
    stock: 1400,
    pictureUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/088/440/products/porotos-negros1-506690ebcf638ed2c115884669777458-1024-10241-5624dbf2e70210442315929160220757-1024-1024.jpg",
    description:"lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem lorem  lorem "
}

]

export const productsFetch = new Promise((res, rej) => {
setTimeout(() => {
    res(products)
}, 2000)
})