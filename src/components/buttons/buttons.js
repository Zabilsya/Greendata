import React from 'react';
import {connect} from 'react-redux';
import AddButton from './addButton';
import DeleteButton from './deleteButton';
import {addWorker, deleteWorker} from '../../actions';

const Buttons = ({worker, addWorker, deleteWorker}) => {
    return (
        <div className="buttons">
            <DeleteButton worker={worker} onDeleteWorker={deleteWorker}/>
            <AddButton onAddWorker={addWorker}/>
        </div>
    )
}

const mapStateToProps = ({worker}) => ({
    worker
})

const mapDispatchToProps = {
    addWorker,
    deleteWorker
}


export default connect(mapStateToProps, mapDispatchToProps)(Buttons);