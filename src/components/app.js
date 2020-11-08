import React from 'react';
import Table from './main-table/table';
import EditTable from './edit-table/edit-table';
import DeleteButton from './deleteButton';
import AddButton from './addButton';

const App = () => {
    return (
        <>
        <Table/>
        <DeleteButton/>
        <AddButton/>
        <EditTable/>
        </>
    )
}

export default App;