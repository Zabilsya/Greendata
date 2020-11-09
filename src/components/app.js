import React from 'react';
import MainTable from './mainTable/mainTable';
import EditTable from './editTable/editTable';
import Buttons from './buttons/buttons';
import '../css/app.css';

const App = () => {
    return (
    <div className='content'>
        <h1 className='header'>Управление персоналом</h1>
        <div className='content-elements'>
            <MainTable/>
            <div className='edit-elements'>
                <EditTable/>
                <Buttons/>
            </div>
        </div>
    </div>
    )
}

export default App;