import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import {bindActionCreators} from 'redux';

import TableHeader from './table-header';
import TableBody from './table-body';

const Table = () => {
    return (
        <table className="table">
            <TableHeader/>
            <TableBody/>
        </table>
    )
}

export default Table;

