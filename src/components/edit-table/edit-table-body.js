import React from 'react';
import TableElement from './table-element';

const EditTableBody = ({workers}) => {
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
        counter : state
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch); 
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default EditTableBody;