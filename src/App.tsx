import React from 'react';
import Button from './components/Button';
import NavLink from './components/NavLink';
import './styles/global.scss';

function App() {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <Button>Explore</Button>
      <NavLink href='#'>Active</NavLink>
    </div>
  );
}

export default App;
