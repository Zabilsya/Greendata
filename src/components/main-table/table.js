import React from 'react';
import {connect} from 'react-redux';
import {choose} from '../../actions';
import {bindActionCreators} from 'redux';

import TableHeader from './table-header';
import TableBody from './table-body';

const Table = ({workers, choose}) => {
   
    return (
        <table className="table">
            <TableHeader/>
            <TableBody workers={workers} choose={choose}/>
        </table>
    )
}

const mapStateToProps = state => ({
    workers: state.workers
  })

  const mapDispatchToProps = {
    choose
  }

export default connect(mapStateToProps, mapDispatchToProps)(Table)

