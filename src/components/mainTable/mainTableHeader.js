import React from 'react';

const MainTableHeader = () => {
  return (
    <thead className="thead-dark">
    <tr>
      <th>id</th>
      <th>ФИО</th>
      <th>Должность</th>
      <th>Дата рождения</th>
      <th>Пол</th>
      <th>Уволен</th>
    </tr>
  </thead>
  )
}

export default MainTableHeader;