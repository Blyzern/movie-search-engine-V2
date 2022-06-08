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
