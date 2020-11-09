import React from 'react';
import '../../css/buttons.css';

const AddButton = ({onAddWorker}) => {
    return (
        <button className="btn btn-outline-success" type="button" onClick={() => onAddWorker()}>Добавить нового сотрудника</button>
    )
}

export default AddButton