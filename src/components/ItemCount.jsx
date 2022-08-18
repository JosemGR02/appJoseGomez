import React from 'react'


const ItemCount = ({ stock, onAdd, contador, setContador }) => {

    const sumar = () => {
        if(contador < stock){
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if(contador > 0){
            setContador(contador - 1)
        }
    }

    return(
        <>
            <div>
                <button className='btn btn-danger' onClick={restar}> - </button>
                <span>{contador}</span>
                <button className='btn btn-success' onClick={sumar}> + </button>
            </div>
            <button className='btn btn-dark' disabled={contador === 0} onClick={onAdd}>Comprar</button>
        </>
    )
}

export default ItemCount


