import React from 'react';
import {connect} from 'react-redux';
import '../../css/mainTable.css';

const MainTableElement = ({worker, choosenWorker, onClick}) => {
    const {id, name, position, dateOfBirth, sex, fired} = worker;
    const elemFired = fired === true ? 'Да' : 'Нет';
    return (
        <tr className={choosenWorker.id === id ? 'table-item active' : 'table-item'} onClick={onClick}>
            <th>{id}</th>
            <td>{name}</td>
            <td>{position}</td>
            <td>{dateOfBirth}</td>
            <td>{sex}</td>
            <td>{elemFired}</td>
        </tr>
    )
}

const mapStateToProps = ({worker}) => ({
    choosenWorker: worker
})


const mapDispatchToProps = {
   
}

export default connect(mapStateToProps, mapDispatchToProps)(MainTableElement)
