import { useState, createContext, useContext } from 'react'

const cartContext = createContext([])

export const UseCartContext = () => useContext(cartContext)

export default function CartContextProvider ({children}){
    const [cartList, setCartList] = useState([])
    const [totalToPay, setTotalToPay] = useState(0)
    const [totalItemsQuntity, setTotalItemsQuntity] = useState(0)
    const [countQuantity, setCountQuantity] = useState()

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

    
    
    const subItem = (item, e) => {
        e.preventDefault()
        if (item.quantity > 0){
            let prodIndex = cartList.findIndex(el => el.title === item.title)
            cartList[prodIndex].quantity = cartList[prodIndex].quantity - 1
            setCartList(cartList)
            setCountQuantity(cartList[prodIndex].quantity)
            setTotalItemsQuntity(totalItemsQuntity - 1)
            setTotalToPay(totalToPay - 1 * item.price)
        }
    }

    const sumItem = (item, e) => {
        e.preventDefault()
        if (item.quantity < item.stock){
            let prodIndex = cartList.findIndex(el => el.title === item.title)
            cartList[prodIndex].quantity = cartList[prodIndex].quantity + 1
            setCartList(cartList)
            setCountQuantity(cartList[prodIndex].quantity)
            setTotalItemsQuntity(totalItemsQuntity + 1)
            setTotalToPay(totalToPay + 1 * item.price)
        }
    }

    const eraseList = (e) => {
        e.preventDefault()
        setCartList([])
        setTotalItemsQuntity(0)
    }

    return(
        <cartContext.Provider value={{cartList, totalToPay, totalItemsQuntity, countQuantity, 
                                    setCountQuantity, addToCart, eraseList, removeItem, subItem, sumItem}}>
            {children}
        </cartContext.Provider>
    )
}
