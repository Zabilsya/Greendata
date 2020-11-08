import React from 'react';
import TableElement from './table-element';


const TableBody = ({workers, choose}) => {

    return (
        <tbody>
            {
                workers.map(item => {
                    return <TableElement key={item.id} worker={item} onClick={() => choose(item)}/>
                })
            }           
        </tbody>
    ) 
}


export default TableBody;
