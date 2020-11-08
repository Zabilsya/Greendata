import React from 'react';
import {connect} from 'react-redux';
import {addWorker} from '../actions';

const DeleteButton = ({addWorker}) => {
    return (
        <button type="button" onClick={() => addWorker()}>Добавить нового сотрудника</button>
    )
}

const mapStateToProps = () => ({
    
})

const mapDispatchToProps = {
    addWorker
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton);