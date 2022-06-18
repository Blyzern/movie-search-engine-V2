import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';
import { Register } from './Pages/Register';
import { Details } from './Pages/details';
import { TopRatedFilms } from './Pages/topRatedFilms';
import { Wrapper } from './components/Wrapper/styles';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <Wrapper>
      <NavBar />
      {/* prelevop un valore dal selettore se il valore è true faccio il display dell errore al click della x lo stesso valore deve diventare false*/}
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route path="movie/:movieid" element={<Details />} />
        <Route path="serie/:movieid" element={<Details />} />
        <Route path="topRatedFilms" element={<TopRatedFilms />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
