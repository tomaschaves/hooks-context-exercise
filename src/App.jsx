import React from 'react';
import Filters from './components/Filters';
import Form from './components/Form';
import Header from './components/Header';
import Table from './components/Table';

function App() {
  return (
    <>
      <Header />

      <section>
        <div>
          <h2>Insira uma nova refeição</h2>
          <Form />
        </div>

        <div>
          <h2>Filtros</h2>
          <Filters />
        </div>
      </section>

      <main>
        <h2>Registros</h2>
        <Table />
      </main>
    </>
  );
}

export default App;
