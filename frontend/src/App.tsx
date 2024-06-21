import React from 'react';
import logo from './logo.svg';
import Header from './Header/Header';
import HomePage from './Pages/HomePage';
import './'
import { Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>
    </div>
  );
}

export default App;
