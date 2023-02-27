import React, { useContext, useState } from 'react';
import ContextCalories from '../context/contextCalories';

export default function Filters() {
  const context = useContext(ContextCalories);
  const {
    食事,
    setFilter,
    setfilteredFood,
    setfilteredDate,
  } = context;

  const optionsFilter = () => {
    const newArray = 食事.map(((食) => 食.type))
      .filter((value, index, self) => self.indexOf(value) === index);
    return newArray;
  };

  // const mealsFilter = ({ target: { value } } => {
  //   console.log
  //   // setFilter(食事
  //   //     .filter((element) => element.type === value))
  // });
  const resetFilter = () => {
    setfilteredDate('');
    setfilteredFood('');
  };

  return (
    <form className="flex">

      <label className="flex flex-column" htmlFor="meal">
        Refeição
        <select
          id="meal"
          defaultValue=""
          onChange={({ target: { value } }) => setfilteredFood(value)} // sua lógica...
        >
          <option value="" defaultValue="">Todas as refeições</option>
          {
          optionsFilter().map((option) => (
            <option value={option} key={option}>{option}</option>
          ))
          }
        </select>
      </label>

      <label className="flex flex-column" htmlFor="date">
        Data
        <input
          id="date"
          type="date"
          onChange={({ target: { value } }) => setfilteredDate(value)} // sua lógica...
        />
      </label>

      <button
        type="button"
        onClick={resetFilter} // sua lógica...
      >
        Limpar Filtros
      </button>
    </form>
  );
}
