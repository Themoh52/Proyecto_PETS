//Import all the hooks, pages, componentsand css used//
import { createContext, useState, useContext } from "react"

//It create context.//
export const CartContext = createContext([])

//It allows the use of context.//
export const useCartContext = () => useContext(CartContext)

//It provides the use of the global functions created.//
export const CartContextProvider = ({children}) => {
    
//Establishes the initial state of the cart list.//
    const [cartList, setCartList] = useState([])
    
//It allows to add products to the cart.//
    const addCart = (product) =>{
        
//It keeps the count of products added to the cart. In addition, it allows to add more products to the product added previously, and this avoid duplicates.//
        const idx =cartList.findIndex(prod => prod.id === product.id)
        if (idx === -1) {
            setCartList([
                ...cartList,
                product
            ])
        } else {
            cartList[idx].cantidad += product.cantidad 
            setCartList([...cartList]) 
        }
    }

//It removes every product added to the cart.//
    const deleteCart =() => setCartList([])

//It removes a specific product from the cart.//
    const deleteItem = (id) => setCartList(cartList.filter(product => product.id !== id)) 

//It calculates the total products added to the cart.//
    const totalPrice = () => cartList.reduce((count, product) => count += (product.cantidad*product.price),0)

//It calculates the total price from the list of products.//
    const totalQuantity = () => cartList.reduce((count, product) => count += product.cantidad, 0)

//It contains the list of functions provided by useCartContext.//
    return(
        <CartContext.Provider value={{
            cartList,
            addCart,
            deleteCart,
            totalPrice,
            totalQuantity,
            deleteItem
        }}>
            {children}
        </CartContext.Provider>    
    )
}
