import React, { useState, useEffect } from 'react';
import Filter from './components/Filter.js';
import Countries from './components/Countries.js';

const App = () => {
  const [ filter, setFilter ] = useState('');

  return (
    <div>
      <Filter value={filter} onChange={setFilter} />
      <Countries searchFilter={filter} />
    </div>

  );
}

export default App;