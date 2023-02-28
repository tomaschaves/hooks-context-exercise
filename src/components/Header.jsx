import React, { useContext } from 'react';
import ContextCalories from '../context/contextCalories';

export default function Header() {
  const context = useContext(ContextCalories);
  const {
    食事Filter,
  } = context;

  const sumCalories = () => {
    const newArray = 食事Filter
      .map((element) => Number(element.calories));
    const sum = newArray.reduce((acc, curr) => acc + curr, 0);
    return sum;
  };

  return (
    <div>
      <h1>Contador de calorias</h1>
      <span>
        Total de calorias:

        { 食事Filter ? sumCalories() : 0 }
      </span>
    </div>
  );
}
