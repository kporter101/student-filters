import React, { useState } from 'react';
import './App.css';
import FilterContainer from './FilterContainer.jsx';
import StudentContainer from './StudentContainer.jsx';
import styled from 'styled-components';

const AppDiv = styled.div`
text-align: center;
`;

function App() {

  const [filterState, setFilter] = useState();

  return (
    <AppDiv>
      <FilterContainer filterState={filterState} setFilter={setFilter}/>
      <StudentContainer filterState={filterState}/>
    </AppDiv>
  );
}

export default App;
