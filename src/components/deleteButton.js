import React from 'react';
import {connect} from 'react-redux';
import {deleteWorker} from '../actions';

const DeleteButton = ({deleteWorker, worker}) => {
    return (
        <button type="button" disabled={!worker} onClick={() => deleteWorker()}>Удалить выбранного сотрудника</button>
    )
}

const mapStateToProps = ({worker}) => ({
    worker
})

const mapDispatchToProps = {
    deleteWorker
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton);