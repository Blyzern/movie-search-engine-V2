import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';
import { Register } from './Pages/Register';
import { Description } from './Pages/description';
import { Wrapper } from './components/Wrapper/styles';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <Wrapper>
      <NavBar />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route path="movie/:movieid" element={<Description />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
