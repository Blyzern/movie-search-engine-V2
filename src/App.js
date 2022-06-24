import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';
import { Details } from './Pages/details';
import { TopRatedFilms } from './Pages/topRatedFilms';
import { Wrapper } from './components/Wrapper/styles';
import { NavBar } from './components/NavBar';
import { ErrorPopup } from './components/ErrorPopup';

function App() {
  return (
    <Wrapper>
      <NavBar />
      {/* prelevop un valore dal selettore se il valore è true faccio il display dell errore al click della x lo stesso valore deve diventare false*/}
      <ErrorPopup />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:movieid" element={<Details />} />
        <Route path="serie/:movieid" element={<Details />} />
        <Route path="topRatedFilms" element={<TopRatedFilms />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
