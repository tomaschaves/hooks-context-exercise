import React, { useMemo, useState } from 'react';
// import PropTypes from 'prop-types';
import ContextCalories from './contextCalories';

function CaloriesProvider({ children }) {
  const [type, setType] = useState('Café da manhã');
  const [calories, setCalories] = useState(1);
  const [date, setDate] = useState('2023-01-01');
  const [食事, set食事] = useState([]);
  const [filteredFood, setfilteredFood] = useState('');
  const [filteredDate, setfilteredDate] = useState('');
  const [食事Filter, set食事Filter] = useState([]);
  const contextValue = useMemo(() => ({
    type,
    calories,
    date,
    食事,
    filteredFood,
    filteredDate,
    食事Filter,
    setType,
    setCalories,
    setDate,
    set食事,
    setfilteredFood,
    setfilteredDate,
    set食事Filter,
  }), [type, calories, date, 食事, filteredFood, filteredDate, 食事Filter]);

  return (
    <ContextCalories.Provider value={contextValue}>
      {children}
    </ContextCalories.Provider>
  );
}

// CaloriesProvider.propTypes = {
//   children: PropTypes.node,
// }.isRequired;

export default CaloriesProvider;
