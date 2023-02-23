import React from 'react';

export default function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // ...sua lógica
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
          onChange={() => {}} // sua lógica...
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
          onChange={() => {}} // sua lógica...
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
          onChange={() => {}} // sua lógica...
        />
      </label>

      <button type="submit">Adicionar</button>
    </form>
  );
}
