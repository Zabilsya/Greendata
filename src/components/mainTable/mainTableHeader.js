import React from 'react';

const MainTableHeader = () => {
  return (
    <thead className="thead-dark">
    <tr>
      <th scope="col">id</th>
      <th scope="col">ФИО</th>
      <th scope="col">Должность</th>
      <th scope="col">Дата рождения</th>
      <th scope="col">Пол</th>
      <th scope="col">Уволен</th>
    </tr>
  </thead>
  )
}

export default MainTableHeader;