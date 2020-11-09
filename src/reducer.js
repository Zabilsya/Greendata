const initialState = {
    workers: [
        {id: 1, name: 'Калиниченко Дмитрий Николаевич', position: 'Тестировщик', dateOfBirth: formatDate(new Date(1995, 2, 11)), sex: 'Мужской', fired: true},
        {id: 2, name: 'Черемных Александр Александрович', position: 'Редактор', dateOfBirth: formatDate(new Date(1984, 6, 2)), sex: 'Мужской', fired: false},
        {id: 3, name: 'Кириленко Анна Ивановна', position: 'Контент-менеджер', dateOfBirth: formatDate(new Date(1991, 0, 29)), sex: 'Женский', fired: false},
        {id: 4, name: 'Шарипова Марина Анатольевна', position: 'Администратор баз данных', dateOfBirth: formatDate(new Date(1977, 11, 8)), sex: 'Женский', fired: false},
        {id: 5, name: 'Неустоев Аркадий Витальевич', position: 'Руководитель проектов', dateOfBirth: formatDate(new Date(1999, 9, 22)), sex: 'Мужской', fired: false}
    ],

    worker : {}

};

const reducer = (state = initialState, action) => {
    let before;
    let after;
    if (action.worker) {
        before = state.workers.slice(0, action.worker.id - 1);
        after = state.workers.slice(action.worker.id);
    }
    
    switch (action.type) {
        case "CHOOSE":
            if (!state.worker.name || !state.worker.position) {
                alert("Заполните поля ФИО и/или Должность!");
                return {
                    ...state
                }
            }
                const item = state.workers.find(item => item.id === action.worker.id);
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

        case "CHANGE_NAME":
            const newArr = [...before, {...action.worker, name: action.value}, ...after];
            return {
                ...state,
                workers: newArr,
                worker: {...action.worker, name: action.value},
            }

        case "CHANGE_POSITION":
            const newArr1 = [...before, {...action.worker, position: action.value}, ...after];
            return {
                ...state,
                workers: newArr1,
                worker:  {...action.worker, position: action.value}
            }

        case "CHANGE_DATE":
            const date = action.value.split('-').reverse().join('.');
            const newArr2 = [...before, {...action.worker, dateOfBirth: date}, ...after];
            return {
                ...state,
                workers: newArr2,
                worker: {...action.worker, dateOfBirth: date}
            }

        case "CHANGE_SEX":
            let sex;
            const radio = action.value;
            if (radio === 'man') sex = 'Мужской'
            else sex = 'Женский'
    
            const newArr3 = [...before, {...action.worker, sex}, ...after]
           
            return {
                ...state,
                workers: newArr3,
                worker: {...action.worker, sex}
            }

        case "CHANGE_FIRED":
            const newArr4 = [...before, {...action.worker, fired : !action.worker.fired}, ...after]
            return {
                ...state,
                workers: newArr4,
                worker: {...action.worker, fired : !action.worker.fired}
            }

        case "DELETE_WORKER":
            const arr = [...before, ...after];
            const newArr5 = arr.map((item, index) => {
                return {...item, id : index + 1}
            });

            const choosenElem = newArr5[0] || null;
           
            return {
                ...state,
                workers: newArr5,
                worker: choosenElem
            }

        case "ADD_WORKER":
            if (state.worker) {
                if (!state.worker.name || !state.worker.position) {
                    alert("Заполните поля ФИО и/или Должность!");
                    return {
                        ...state
                    }
                }
            } 
           
            const newWorker = {id: state.workers.length + 1, name: '', position: '', dateOfBirth: '', sex: '', fired: false};
            const newArr6 = [...state.workers];
            newArr6.push(newWorker);
            return {
                ...state,
                workers: newArr6,
                worker: newWorker
            }        
            
        default:
            const initialWorker = state.workers[0];
            return {
                ...state,
                worker: initialWorker
            };
    }
}


function formatDate (date) {
    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
  
    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
  
    let yy = date.getFullYear();
    if (yy < 10) yy = '0' + yy;
  
    return dd + '.' + mm + '.' + yy;
  }

export default reducer