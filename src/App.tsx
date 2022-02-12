import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import DestinationPage from './pages/DestinationPage';
import HomePage from './pages/HomePage';
import './styles/index.scss';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/destinations' element={<DestinationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
