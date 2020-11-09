import React from 'react';

import EditTableHeader from './editTableHeader';
import EditTableBody from './editTableBody';
import '../../css/editTable.css';

const EditTable = () => {
    return (
        <div className="edit-table">
            <h2>Таблица редактирования</h2>
            <table className="table table-striped table-bordered">
                <EditTableHeader/>
                <EditTableBody/>
            </table>
        </div>
    )
}

export default EditTable
