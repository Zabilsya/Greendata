import React from 'react';

import EditTableHeader from './edit-table-header';
import EditTableBody from './edit-table-body';

const EditTable = () => {
    return (
        <table className="table table-striped">
            <EditTableHeader/>
            <EditTableBody/>
        </table>
    )
}

export default EditTable
