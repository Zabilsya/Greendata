import React from 'react';

const TableElement = ({worker, onClick}) => {
    const {id, name, position, dateOfBirth, sex, fired} = worker;

    return (
        <tr onClick={onClick}>
            <th>{id}</th>
            <td>{name}</td>
            <td>{position}</td>
            <td>{dateOfBirth}</td>
            <td>{sex}</td>
            <td>{fired}</td>
        </tr>
    )
}

export default TableElement;
