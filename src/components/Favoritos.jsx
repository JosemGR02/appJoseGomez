import React from 'react'
import { BsFillBookmarkStarFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const Favoritos = () => {

    return(
        <div>
            <Link className="nav-link" to='/favoritos'>
                <BsFillBookmarkStarFill style={{ fontSize: '1.5em', marginRight: '15px'}}/>
            </Link>
        </div>
    );
}

export default Favoritos;

