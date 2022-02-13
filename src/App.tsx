import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CrewPage from './pages/CrewPage';
import DestinationPage from './pages/DestinationPage';
import HomePage from './pages/HomePage';
import TechnologyPage from './pages/TechnologyPage';
import './styles/index.scss';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/destinations' element={<DestinationPage />} />
        <Route path='/crews' element={<CrewPage />} />
        <Route path='/technologies' element={<TechnologyPage />} />
      </Routes>
      <footer className='bg--accent text--dark py-2 text--center'>&copy; Made with ♥ by <a href="https://ngocoder.com">Ngoc Nguyen Duy Minh</a></footer>
    </BrowserRouter>
  );
}

export default App;
