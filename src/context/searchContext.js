import { useState, createContext, useContext, useEffect} from 'react'

import { getFirestore } from '../services/getFirebase'
import  firebase  from 'firebase'
import 'firebase/firestore'

const searchContext = createContext([])

export const UseSearchContext = () => useContext(searchContext)

export default function SearchContextProvider ({children}){
    const [typing, setTyping] = useState("")
    const [searchProducts, setSearchProducts] = useState([])

    const SearchFilter = () => {
        useEffect(() =>{
            const dbQuery = getFirestore()
            dbQuery.collection('products').get()
            .then(resp => {
                setSearchProducts(resp.docs.map(product => ( {id: product.id, ...product.data()} )) )
            })
            .catch(err => console.log(err))
            .finally(() => {
                let filterResult = searchProducts.filter( prod => {
                    if(prod.title.toString().toLowerCase().includes(typing.toLowerCase())
                    || prod.category.toString().toLowerCase().includes(typing.toLowerCase())){
                        return prod
                    }
                })
                setSearchProducts(filterResult)
            })
        })
    }
    

    return(
        <searchContext.Provider value={{typing, searchProducts, setTyping, SearchFilter}}>
            {children}
        </searchContext.Provider>
    )
}