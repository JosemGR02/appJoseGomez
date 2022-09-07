import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
import { ContenPaginacion } from './Styled'


export function Paginación() {
    return (
        <ContenPaginacion>
            <Pagination>
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Item>{5}</Pagination.Item>
                <Pagination.Next />
            </Pagination>
        </ContenPaginacion>
);
}

export default Paginación