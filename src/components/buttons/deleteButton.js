import React from 'react';
import '../../css/buttons.css';

const DeleteButton = ({worker, onDeleteWorker}) => {
    return (
        <button className="btn btn-outline-dark delete" type="button" disabled={!worker} onClick={() => onDeleteWorker()}>Удалить выбранного сотрудника</button>
    )
}

export default DeleteButton;