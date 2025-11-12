import React from 'react';
import './css/App.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import FrontendLayout from './layout/FrontendLayout';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import About from './pages/About';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<FrontendLayout />}  >
            <Route path="/" element={<HomePage />} />
            <Route  path="/contact" element={<Contact/>} />
            <Route  path="/about" element={<About/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
// create a layout 
// use this layout
