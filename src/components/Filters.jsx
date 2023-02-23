import React from 'react';

export default function Filters() {
  return (
    <form className="flex">

      <label className="flex flex-column" htmlFor="meal">
        Refeição
        <select
          id="meal"
          defaultValue=""
          onChange={() => {}} // sua lógica...
        >
          <option value="">Todas as refeições</option>
          <option value="Café da manhã">Café da manhã</option>
          <option value="Lanche da manhã">Lanche da manhã</option>
          <option value="Almoço">Almoço</option>
          <option value="Lanche da tarde">Lanche da tarde</option>
          <option value="Janta">Janta</option>
          <option value="Ceia">Ceia</option>
        </select>
      </label>

      <label className="flex flex-column" htmlFor="date">
        Data
        <input
          id="date"
          type="date"
          onChange={() => {}} // sua lógica...
        />
      </label>

      <button
        type="button"
        onClick={() => {}} // sua lógica...
      >
        Limpar Filtros
      </button>
    </form>
  );
}
