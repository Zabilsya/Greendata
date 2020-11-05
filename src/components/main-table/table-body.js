import React from 'react';
import TableElement from './table-element';

import {connect} from 'react-redux';
import * as actions from '../../actions';
import {bindActionCreators} from 'redux';

const TableBody = ({workers}) => {
    return (
        <tbody>
            {
                workers.map(item => {
                    return <TableElement key={item.id} worker={item}/>
                })
            }           
        </tbody>
    ) 
}

const mapStateToProps = (state) => {
    return {
        workers : state
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch); 
}

export default connect(mapStateToProps, mapDispatchToProps)(TableBody);
