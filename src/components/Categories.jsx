
import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { link } from 'react-router-dom';


function Categories(){
    const { categories, setCategories } = useState([])


    useEffect(() => {
        const db = getFirestore();

        const categoriasColeccion = collection( db, 'categorias')
        getDocs(categoriasColeccion)
        .then((snapshot) => {
            console.log(snapshot.docs.map((doc)=> doc.data().nombre))
        })
        .catch((error) => {
            console.error(error)
        })
    }, [])


    return (
        <> 
        {
            categories.map((el) => (
                <li className='nav-item' key={el}>
                    <link to={'/categoria/' + el} className='nav-link'>
                        {el.charAt(0).toUpperCase() + el.slice(1)}
                    </link>
                </li>
            ))
        }
            
        </>
    )
}

export default Categories;