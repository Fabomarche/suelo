import { useState, createContext, useContext } from 'react'

const cartContext = createContext([])

export const UseCartContext = () => useContext(cartContext)

export default function CartContextProvider ({children}){
    const [cartList, setCartList] = useState([])
    const [totalToPay, setTotalToPay] = useState(0)
    const [totalItemsQuntity, setTotalItemsQuntity] = useState(0)
    

    const addToCart = (prodWithCount) => {
        if(cartList.find( item => item.title === prodWithCount.title)){
            let prodIndex = cartList.findIndex(el => el.title === prodWithCount.title)
            cartList[prodIndex].quantity = cartList[prodIndex].quantity + prodWithCount.quantity
            setCartList(cartList)
        }else{
            
            setCartList([...cartList, prodWithCount])
        }
        setTotalItemsQuntity(totalItemsQuntity + prodWithCount.quantity)
        setTotalToPay(totalToPay + prodWithCount.quantity * prodWithCount.price)
    }
    
    const removeItem = (item, e) => {
        e.preventDefault()
        setTotalItemsQuntity(totalItemsQuntity - item.quantity)
        setTotalToPay(totalToPay - item.quantity * item.price)
        setCartList(cartList.filter(prodToRemove => prodToRemove !== item))
    }

    const eraseList = (e) => {
        e.preventDefault()
        setCartList([])
        setTotalItemsQuntity(0)
    }

    return(
        <cartContext.Provider value={{cartList, setCartList, totalToPay, totalItemsQuntity, addToCart, eraseList, removeItem}}>
            {children}
        </cartContext.Provider>
    )
}
