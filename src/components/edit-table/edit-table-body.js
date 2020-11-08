import React from 'react';
import {connect} from 'react-redux';
import Calendar from 'react-calendar';
import {changeRadio} from '../../actions';

const EditTableBody = ({worker, changeRadio}) => {
    const {name, position, dateOfBirth, sex, fired} = worker;
    const positions = ['Администратор баз данных', 
    'Архитектор программного обеспечения', 
    'Аналитик программного обеспечения', 
    'Ведущий программист', 
    'Контент-менеджер', 
    'Редактор', 
    'Системный администратор', 
    'Тестировщик',
    'Технический писатель', 
    'Руководитель проектов'];

    const date = new Date(dateOfBirth.split('.').reverse().join('.'));
    console.log("render");

    return (
        <tbody>
            
            <tr>
                <th>ФИО</th>
                <td>{name}</td>
            </tr>

            <tr>
                <th>Должность</th>
                <td>
                    <div className="btn-group">
                        <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {position}
                        </button>
                        <div className="dropdown-menu">
                            {
                                positions.forEach((item, index) => {
                                    <button key={index} className="dropdown-item" type="button">{item}</button>
                                })
                            }
                        </div>
                    </div>
                </td>
            </tr>

            <tr>
                <th>Дата рождения</th>
                <td>
                    <Calendar 
                        onChange={() => console.log("")}
                        value={date}/>
                </td>
            </tr>

            <tr>
                <th>Пол</th>
                <td>
                    <input type="radio" id="choice1" value="man" checked={sex === "Мужской" ? true : false} onChange={(e) => changeRadio(e.target.value)}/>
                    <label for="choice1">Мужской</label>
                    <input type="radio" id="choice2" value="woman" checked={sex === "Женский" ? true : false} onChange={(e) => changeRadio(e.target.value)}/>
                    <label for="choice2">Женский</label>
                </td>
            </tr>

            <tr>
                <th>Уволен</th>
                <td>
                    <input type="checkbox" id="fired" checked={fired}/>
                    <label for="fired">Уволен</label>
                </td>
            </tr>
                                 
        </tbody>
    ) 
}

const mapStateToProps = ({worker}) => ({
    worker
})


const mapDispatchToProps = {
    changeRadio
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTableBody)
