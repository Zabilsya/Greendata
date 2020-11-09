import React from 'react';
import {connect} from 'react-redux';
import {choose} from '../../actions';

import MainTableHeader from './mainTableHeader';
import MainTableBody from './mainTableBody';
import '../../css/mainTable.css';

const MainTable = ({workers, choose}) => {
   
    return (
        <div className="main-table">
          <h2>Список сотрудников</h2>
          <table className="table table-bordered">
              <MainTableHeader/>
              <MainTableBody workers={workers} choose={choose}/>
          </table>
        </div>
    )
}

const mapStateToProps = state => ({
    workers: state.workers
  })

  const mapDispatchToProps = {
    choose
  }

export default connect(mapStateToProps, mapDispatchToProps)(MainTable)

