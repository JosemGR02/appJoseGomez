import ItemCount from './ItemCount'
import { useState } from "react"

const ItemListConteiner = (props) => {
    const [mensaje, setMensaje] = useState ('')

    const onAdd = (cantidad) => {
        setMensaje (`agregaste ${cantidad} productos al carrito`)
    }

    return(
        <div>
            <h1>buenass, {props.name}</h1>
            {mensaje && <p>{mensaje}</p>}
            <ItemCount initial= {1} stock= {20} onAdd= {onAdd}/>
        </div>
    )
}

export default ItemListConteiner;


