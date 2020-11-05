import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import {bindActionCreators} from 'redux';

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