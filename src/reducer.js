
const initialState = [
    {id: 1, name: 'Калиниченко Дмитрий Николаевич', position: 'Чувак', dateOfBirth: formatDate(new Date(1995, 2, 11)), sex: 'Мужской', fired: 'Да'},
    {id: 2, name: 'Черемных Александр Александрович', position: 'Чувак', dateOfBirth: formatDate(new Date(1984, 6, 2)), sex: 'Мужской', fired: 'Нет'},
    {id: 3, name: 'Кириленко Анна Ивановна', position: 'Чувак', dateOfBirth: formatDate(new Date(1991, 0, 29)), sex: 'Женский', fired: 'Нет'},
    {id: 4, name: 'Шарипова Марина Анатольевна', position: 'Чувак', dateOfBirth: formatDate(new Date(1977, 11, 8)), sex: 'Женский', fired: 'Нет'},
    {id: 5, name: 'Неустоев Аркадий Витальевич', position: 'Чувак', dateOfBirth: formatDate(new Date(1999, 9, 22)), sex: 'Мужской', fired: 'Нет'}
];

// const initialState = [
//     {id: 1, name: 'Калиниченко Дмитрий Николаевич', position: 'Чувак', dateOfBirth: 5, sex: 'Мужской', fired: 'Да'},
//     {id: 2, name: 'Черемных Александр Александрович', position: 'Чувак', dateOfBirth: 8, sex: 'Мужской', fired: 'Нет'},
//     {id: 3, name: 'Кириленко Анна Ивановна', position: 'Чувак', dateOfBirth: 8, sex: 'Женский', fired: 'Нет'},
//     {id: 4, name: 'Шарипова Марина Анатольевна', position: 'Чувак', dateOfBirth: 1, sex: 'Женский', fired: 'Нет'},
//     {id: 5, name: 'Неустоев Аркадий Витальевич', position: 'Чувак', dateOfBirth: 0, sex: 'Мужской', fired: 'Нет'}
// ];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // case 'FOCUS':
        //     return 
        case 'INC':
        return state + 1;
        case 'DEC':
            return state - 1;
        case 'RND':
            return state + action.value;
        default:
            return state;
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

export default reducer;