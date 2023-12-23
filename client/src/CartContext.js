import React, { createContext, useState } from 'react'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (webinar, id) => {

        const cartItem = cart.find(item => {
            return item.id === id
        })
        if(cartItem===undefined){
            const newArray = [...cart, webinar]
            alert("Enrolled Successfully !")
            setCart(newArray)
        }
        else{
            alert("You already enrolled to this webinar")
        }
       


    }

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider