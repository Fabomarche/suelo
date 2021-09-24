import { useState, createContext, useContext } from 'react'

const cartContext = createContext([])

export const UseCartContext = () => useContext(cartContext)

export default function CartContextProvider ({children}){
    const [cartList, setCartList] = useState([])
    
    const addToCart = (prodAndCount) => {
        setCartList([...cartList, prodAndCount])
    }
    
    /* const eraseList = () => {
        setCartList([])
    } */
    
    return(
        <cartContext.Provider value={cartList, addToCart}>
            {children}
        </cartContext.Provider>
    )
}
