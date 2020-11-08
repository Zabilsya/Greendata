import React from 'react';
import {connect} from 'react-redux';
import {changeSex, changeFired, changeName, changeDate, changePosition} from '../../actions';
import '../../style.css';

const EditTableBody = ({worker, positions, changeSex, changeFired, changeName, changeDate, changePosition}) => {
    let name, position, dateOfBirth, sex, fired;
    if (worker) 
        {
            name = worker.name;
            position = worker.position; 
            dateOfBirth = worker.dateOfBirth;
            sex = worker.sex;
            fired = worker.fired;
        } else {
            name = '';
            position = '';
            dateOfBirth = '';
            sex = '';
            fired = '';
        }
   
    const date = dateOfBirth.split('.').reverse().join('-');

    return (
        <tbody>
            
            <tr>
                <th>ФИО</th>
                <td><input type="text" id="name" disabled={!worker} value={name} onChange={(e) => changeName(e.target.value)}/></td>
            </tr>

            <tr>
                <th>Должность</th>
                <td>
                    <select value={position} disabled={!worker} onChange={(e) => changePosition(e.target.value)}>
                        {
                            positions.map((item, index) => (
                                <option key={index}>{item}</option>
                            ))
                        }
                        
                    </select>
                </td>
            </tr>

            <tr>
                <th>Дата рождения</th>
                <td>
                    <input type="date" value={date} disabled={!worker} max={new Date()} onChange={(e) => changeDate(e.target.value)} onInput={(e) => changeDate(e.target.value)}/>      
                </td>
            </tr>

            <tr>
                <th>Пол</th>
                <td>
                    <input type="radio" id="choice1" disabled={!worker} value="man" checked={sex === "Мужской" ? true : false} onChange={(e) => changeSex(e.target.value)}/>
                    <label for="choice1">Мужской</label>
                    <input type="radio" id="choice2" disabled={!worker} value="woman" checked={sex === "Женский" ? true : false} onChange={(e) => changeSex(e.target.value)}/>
                    <label for="choice2">Женский</label>
                </td>
            </tr>

            <tr>
                <th>Уволен</th>
                <td>
                    <input type="checkbox" id="fired" disabled={!worker} checked={fired} onChange={() => changeFired()}/>
                    <label for="fired">Уволен</label>
                </td>
            </tr>
                                 
        </tbody>
    ) 
}

const mapStateToProps = ({worker, positions}) => ({
    worker,
    positions
})


const mapDispatchToProps = {
    changeSex,
    changeFired,
    changeName, 
    changeDate,
    changePosition
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTableBody)
