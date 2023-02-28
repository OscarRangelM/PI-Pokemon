import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Here the components are imported
import Landing from './components/LandingPage/Landing.jsx';
import Home from './components/Home/Home.jsx';
import Detail from './components/DetailPage/Detail.jsx';
import Form from './components/FormPage/Form.jsx';

/* Rutas Landing Page, Home Page, Detail Page,  FORM PAGE ,*/

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} ></Route>
        <Route path="/home" element={<Home />} ></Route>
        <Route path="/detail/:detailId" element={<Detail />} ></Route>
        <Route path="/form" element={<Form />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
