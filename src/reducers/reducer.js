import {combineReducers} from 'redux';
const initialState = {
    workers: [
        {id: 1, name: 'Калиниченко Дмитрий Николаевич', position: 'Чувак', dateOfBirth: formatDate(new Date(1995, 2, 11)), sex: 'Мужской', fired: true},
        {id: 2, name: 'Черемных Александр Александрович', position: 'Чувак', dateOfBirth: formatDate(new Date(1984, 6, 2)), sex: 'Мужской', fired: false},
        {id: 3, name: 'Кириленко Анна Ивановна', position: 'Чувак', dateOfBirth: formatDate(new Date(1991, 0, 29)), sex: 'Женский', fired: false},
        {id: 4, name: 'Шарипова Марина Анатольевна', position: 'Чувак', dateOfBirth: formatDate(new Date(1977, 11, 8)), sex: 'Женский', fired: false},
        {id: 5, name: 'Неустоев Аркадий Витальевич', position: 'Чувак', dateOfBirth: formatDate(new Date(1999, 9, 22)), sex: 'Мужской', fired: false}
    ],

    worker : {}

};

// const reducerEdit = (state = initialState.visible, action) => {
//     switch (action.type) {
//         case 'ALL':
//             return action.value;
//         default:
//             return state;
//     }
// }


const reducerShow = (state = initialState, action) => {
    switch (action.type) {
        case "CHOOSE":
            const item = state.workers.find(item => item.id === action.value.id);
            const choosenWorker = {
                id: item.id,
                name: item.name,
                position: item.position,
                dateOfBirth: item.dateOfBirth,
                sex: item.sex,
                fired: item.fired
            }
            return {
                ...state,
                worker: choosenWorker
            };

        case "CLICK_DATE": 
            return {
                ...state,
                worker: {...state.worker, dateOfBirth: formatDate(action.value)}
            }

        case "CHANGE_RADIO":
            // const changedSex = state.workers.find(item => item.id === action.value);
            return {
                ...state,
            }
            
        default:
            const initialWorker = state.workers[0];
            return {
                ...state,
                worker: initialWorker
            };
    }
}

// const reducerEdit = (state = initialState.worker, action) => {
//     switch (action.type) {
//         case 'CHOOSE':
//             return state;
//         default:
//             return state;
//     }
// }



function formatDate (date) {
    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
  
    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
  
    let yy = date.getFullYear();
    if (yy < 10) yy = '0' + yy;
  
    return dd + '.' + mm + '.' + yy;
  }

//   export default combineReducers({
//     reducerShow,
//     reducerEdit
//   })

export default reducerShow