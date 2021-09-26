import { useState, createContext, useContext } from 'react'

const cartContext = createContext([])

export const UseCartContext = () => useContext(cartContext)

export default function CartContextProvider ({children}){
    const [cartList, setCartList] = useState([])
    
    const addToCart = (prodWithCount) => {
        if(cartList.find( item => item.title == prodWithCount.title)){
            let prodIndex = cartList.findIndex(el => el.title == prodWithCount.title)
            cartList[prodIndex].quantity = cartList[prodIndex].quantity + prodWithCount.quantity
            setCartList(cartList)
        }else{
            setCartList([...cartList, prodWithCount])
        }
        

        
    }
    
    const eraseList = () => {
        setCartList([])
    }
    
    console.log(cartList)
   
    return(
        <cartContext.Provider value={{cartList, addToCart, eraseList}}>
            {children}
        </cartContext.Provider>
    )
}
