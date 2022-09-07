


import React from 'react'
import { createContext, useState } from "react";
import { useContext } from "react";

export const CartContext = createContext()

export const CartProvider = ({hijo})=> {

    const [favoritos, setFavoritos] = useState([])

    const agregarAlFav = (item) => {
        const algoEnFav = favoritos.find((prod)=> prod.id === item.id)
        if(algoEnFav){
            const actualizarFav = cart.map((prod)=> {
                if (prod.id === item.id){
                    return {...prod, cantidad: prod.cantidad + item.cantidad}
                }else{
                    return prod
                }
            })
            setFavoritos(actualizarFav)
        }else{
            setFavoritos([...favoritos,item])
        }
    }

    const algoEnFav = (id) => {
        return favoritos.some((prod) => prod.id === id)
    }

    const vaciarFav = () => {
        setFavoritos([])
    }

    const removerProdFav = (id) => {
        setFavoritos(favoritos.filter((prod)=> prod.id !== id))
    }

    const favCantidad = () => {
        return favoritos.reduce((acc, prod)=> acc += prod.cantidad, 0 )
    }
    
    const favCantTotal = () => {
        return favoritos.reduce((acc, prod)=> acc += prod.precio * prod.cantidad, 0 )
    }

    return(
        <CartContext.Provider value={{ favoritos, agregarAlFav, algoEnFav, vaciarFav, removerProdFav, favCantidad, favCantTotal }}>
            {hijo}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)
