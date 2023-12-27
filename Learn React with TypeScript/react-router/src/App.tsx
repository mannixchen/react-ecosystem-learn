import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export function App() {
  return (
    <div className="App">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
