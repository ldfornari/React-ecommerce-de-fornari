import React, { createContext, useState } from 'react'

export const context = createContext()
const { Provider } = (context)

const CustomProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addToCart = (item, quantity) => {
        if(isInCart(item.id)) {
            const newCart = [...cart]
            for (const elment of newCart) {
                if(elment.id === item.id) {
                    elment.quantity += quantity
                }
            }
            setCart(newCart)
        } else {
            setCart([...cart, {...item, quantity}])
        }
    }

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    const empyCart = () => {
        setCart([])
    }

    const totalQuantity = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }

    const totalPrice = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }    

    return (
        <Provider value={{ 
            cart,
            addToCart,
            removeFromCart,
            empyCart,
            totalQuantity,
            totalPrice,
            isInCart
        }}>
            {children}
        </Provider>
    )
}
export default CustomProvider