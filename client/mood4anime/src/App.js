import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home';
import Happy from './pages/Mood/Happy';
import Sad from './pages/Mood/Sad';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animes/happy" element={<Happy />} />
        <Route path="/animes/sad" element={<Sad />} />
      </Routes>
    </Router>
  );
}

export default App;
