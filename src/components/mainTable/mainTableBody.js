import React from 'react';
import MainTableElement from './mainTableElement';


const MainTableBody = ({workers, choose}) => {
    
    return (
        <tbody>
            {
                workers.map(item => {
                    return <MainTableElement key={item.id} worker={item} onClick={() => choose(item)}/>
                })
            }           
        </tbody>
    ) 
}


export default MainTableBody;
