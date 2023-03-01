import './App.css';
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Here the components are imported
import Landing from './components/LandingPage/Landing.jsx';
import Home from './components/Home/Home.jsx';
import Detail from './components/DetailPage/Detail.jsx';
import Form from './components/FormPage/Form.jsx';
import Nav from './components/Nav/Nav.jsx';
import Favorites from './components/Favorites/Favorites.jsx'

/* Rutas Landing Page, Home Page, Detail Page,  FORM PAGE ,*/

function App() {

  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === '/home' || location.pathname === '/favorites' ? <Nav /> : null}
      <Routes>
        <Route path="/" element={<Landing />} ></Route>
        <Route path="/home" element={<Home />} ></Route>
        <Route path="/detail/:detailId" element={<Detail />} ></Route>
        <Route path="/form" element={<Form />} ></Route>
        <Route path="/favorites" element={<Favorites />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
