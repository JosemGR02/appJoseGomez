import { createContext, useState } from "react";
import { useContext } from "react";

export const CartContext = createContext()

export const CartProvider = ({children})=> {

    const [cart, setCart] = useState([])

    const aÑadirAlCart = (item) => {
        const algoEnCart = cart.find((prod)=> prod.id === item.id)
        if(algoEnCart){
            const actualizarCart = cart.map((prod)=> {
                if (prod.id === item.id){
                    return {...prod, cantidad: prod.cantidad + item.cantidad}
                }else{
                    return prod
                }
            })
            setCart(actualizarCart)
        }else{
            setCart([...cart,item])
        }
    }

    const algoEnCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const vaciarCart = () => {
        setCart([])
    }

    const removerItem = (id) => {
        setCart(cart.filter((prod)=> prod.id !== id))
    }

    const cartCantidad = () => {
        return cart.reduce((acc, prod)=> acc += prod.cantidad, 0 )
    }
    
    const cartCantTotal = () => {
        return cart.reduce((acc, prod)=> acc += prod.precio * prod.cantidad, 0 )
    }

    return(
        <CartContext.Provider value={{ cart, aÑadirAlCart, algoEnCart, vaciarCart, removerItem, cartCantTotal, cartCantidad }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)