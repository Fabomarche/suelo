import { useState, createContext, useContext} from 'react'

const searchContext = createContext([])

export const UseSearchContext = () => useContext(searchContext)

export default function SearchContextProvider ({children}){
    const [productos, setProductos] = useState([])
    const [typing, setTyping] = useState("")
    const [allProducts, setAllProducts] = useState([])

    const serch = (e) => {
        setProductos(allProducts.filter( prod => prod.title.toLowerCase().includes( typing.toLowerCase() ) ))
        if(e) if(typing.length === 0) setProductos(allProducts)
    }

    const cleanSearch = (e) => {
        typing.length === 0 && setProductos(allProducts)
    }

    return(
        <searchContext.Provider value={{ typing, productos, 
                                        setTyping, setAllProducts, setProductos, serch, cleanSearch}}>
            {children}
        </searchContext.Provider>
    )
}