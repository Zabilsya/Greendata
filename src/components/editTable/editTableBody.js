import React from 'react';
import {connect} from 'react-redux';
import {changeSex, changeFired, changeName, changeDate, changePosition} from '../../actions';
import '../../css/editTable.css';

const positions = [
    '',
    'Администратор баз данных', 
    'Архитектор программного обеспечения', 
    'Аналитик программного обеспечения', 
    'Ведущий программист', 
    'Контент-менеджер', 
    'Редактор', 
    'Системный администратор', 
    'Тестировщик',
    'Технический писатель', 
    'Руководитель проектов']

const EditTableBody = ({worker, changeSex, changeFired, changeName, changeDate, changePosition}) => {
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
                <td><input type="text" className="form-control" id="name" disabled={!worker} value={name} onChange={(e) => changeName(e.target.value, worker)}/></td>
            </tr>

            <tr>
                <th>Должность</th>
                <td>
                    <select value={position} disabled={!worker} onChange={(e) => changePosition(e.target.value, worker)}>
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
                    <input type="date" value={date} disabled={!worker} max={new Date()} onChange={(e) => changeDate(e.target.value, worker)} onInput={(e) => changeDate(e.target.value, worker)}/>      
                </td>
            </tr>

            <tr>
                <th>Пол</th>
                <td>
                    <div className="radio-buttons">
                        <div className="custom-control custom-radio radio1">
                            <input type="radio" id="customRadio1" value="man" className="custom-control-input" disabled={!worker} checked={sex === "Мужской" ? true : false} onChange={(e) => changeSex(e.target.value, worker)}/>
                            <label className="custom-control-label" htmlFor="customRadio1">Мужской</label>
                        </div>
                        <div className="custom-control custom-radio radio2">
                            <input type="radio" id="customRadio2" value="woman" className="custom-control-input" disabled={!worker} checked={sex === "Женский" ? true : false} onChange={(e) => changeSex(e.target.value, worker)}/>
                            <label className="custom-control-label" htmlFor="customRadio2">Женcкий</label>
                        </div>
                    </div>
                </td>
            </tr>

            <tr>
                <th>Уволен</th>
                <td>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" disabled={!worker} checked={fired} onChange={() => changeFired(worker)}/>
                        <label className="custom-control-label" htmlFor="customCheck1">Уволен</label>
                    </div>
                </td>
            </tr>
                                 
        </tbody>
    ) 
}

const mapStateToProps = ({worker}) => ({
    worker
})


const mapDispatchToProps = {
    changeSex,
    changeFired,
    changeName, 
    changeDate,
    changePosition
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTableBody)
