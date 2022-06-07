import React, { createContext, useState } from 'react'

export const cartContext = createContext()
const { Provider } = (cartContext)

export const CustomProvider = ({defaultValue = [], children}) => {

    const [cart, setCart] = useState(defaultValue)

    const addToCart = (product, quantity) => {
        if(isInCart(product.id)) {
            const newCart = [...cart]
            for (const element of newCart) {
                if(element.id === product.id) {
                    element.quantity = element.quantity + quantity
                }
            }
            setCart(newCart)
        } else {
            setCart([...cart, {...product, quantity}])
        }
    }

    const removeFromCart = (id) => {
        console.log(id)
        setCart(cart.filter(product => product.id !== id))
    }

    const emptyCart = () => {
        setCart([])
    }

    const totalQuantity = () => {        
        return cart.reduce((acc, product) => acc + product.quantity, 0)       
    }

    const totalPrice = () => {
        return cart.reduce((acc, product) => acc + product.price * product.quantity, 0)
    }

    const isInCart = (id) => {
        return cart.some(product => product.id === id)
    }   
    
    const contextValue = { 
        cart,
        addToCart,
        removeFromCart,
        emptyCart,
        totalQuantity,
        totalPrice,
        isInCart
    }

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}
export default CustomProvider