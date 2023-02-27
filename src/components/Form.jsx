import React, { useContext } from 'react';
import ContextCalories from '../context/contextCalories';

export default function Form() {
  const context = useContext(ContextCalories);
  const {
    type,
    calories,
    date,
    食事,
    setType,
    setCalories,
    setDate,
    set食事,
  } = context;

  const handleSubmit = (event) => {
    event.preventDefault();
    const object = {
      type,
      calories,
      date,
    };
    set食事([...食事, object]);
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <label className="flex flex-column" htmlFor="meal">
        <span>
          Refeição
          <span className="red">*</span>
        </span>
        <select
          id="meal"
          defaultValue="Café da manhã"
          onChange={({ target: { value } }) => setType(value)} // sua lógica...
        >
          <option value="Café da manhã">Café da manhã</option>
          <option value="Lanche da manhã">Lanche da manhã</option>
          <option value="Almoço">Almoço</option>
          <option value="Lanche da tarde">Lanche da tarde</option>
          <option value="Janta">Janta</option>
          <option value="Ceia">Ceia</option>
        </select>
      </label>

      <label className="flex flex-column" htmlFor="calories">
        <span>
          Calorias
          <span className="red">*</span>
        </span>
        <input
          id="calories"
          type="number"
          placeholder="ex: 400"
          defaultValue="1"
          onChange={({ target: { value } }) => setCalories(value)} // sua lógica...
        />
      </label>

      <label className="flex flex-column" htmlFor="date">
        <span>
          Data
          <span className="red">*</span>
        </span>
        <input
          id="date"
          type="date"
          defaultValue="2023-01-01"
          onChange={({ target: { value } }) => setDate(value)} // sua lógica...
        />
      </label>

      <button type="submit">Adicionar</button>
    </form>
  );
}
