import React from 'react'
import Pagination from 'react-bootstrap/Pagination';



export function Paginación() {
    return (
        <div style={{display: 'flex', justifyContent: 'center', marginBottom: '30px'}}>
            <Pagination>
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Item>{5}</Pagination.Item>
                <Pagination.Next />
            </Pagination>
        </div>
);
}

export default Paginación;