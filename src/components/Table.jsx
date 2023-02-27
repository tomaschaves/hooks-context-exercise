import React, { useState, useContext, useEffect } from 'react';
import ContextCalories from '../context/contextCalories';

export default function Table() {
  const context = useContext(ContextCalories);
  const {
    食事,
    filteredFood,
    filteredDate,
  } = context;

  // console.log(食事)
  // console.log(filteredFood)
  // console.log(filteredDate)
  const [食事Filter, set食事Filter] = useState([]);
  useEffect(() => {
    if (filteredDate.length !== 0 && filteredFood.length === 0) {
      set食事Filter(食事.filter((element) => element.date === filteredDate));
    } else if (filteredDate.length === 0 && filteredFood.length !== 0) {
      set食事Filter(食事.filter((element) => element.type === filteredFood));
    } else if (filteredDate.length !== 0 && filteredFood.length !== 0) {
      set食事Filter(食事
        .filter((element) => (element.type === filteredFood && element.date === filteredDate)));
    } else if (!(filteredFood && filteredDate)) {
      set食事Filter(食事);
    }
  }, [食事, filteredDate, filteredFood]);
  // console.log(!(filteredFood && filteredDate));
  // console.log(filteredDate);
  // set食事Filter(食事.filter((element) => element.type === 'Lanche da tarde'));

  return (
    <table>
      <thead>
        <tr>
          <th>Refeição</th>
          <th>Calorias</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        {
          食事Filter.map((食) => (
            <tr key={Math.random()}>
              <td>{ 食.type }</td>
              <td>{ 食.calories }</td>
              <td>{ 食.date }</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}
