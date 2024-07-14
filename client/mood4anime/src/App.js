import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home';
import Happy from './pages/Mood/Happy';
import Sad from './pages/Mood/Sad';
import Curious from './pages/Mood/Curious';
import Scared from './pages/Mood/Scared';
import Loved from './pages/Mood/Loved';
import Excited from './pages/Mood/Excited';
import Relaxed from './pages/Mood/Relaxed';
import Inspired from './pages/Mood/Inspired';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animes/happy" element={<Happy />} />
        <Route path="/animes/sad" element={<Sad />} />
        <Route path="/animes/loved" element={<Loved />} />
        <Route path="/animes/curious" element={<Curious />} />
        <Route path="/animes/scared" element={<Scared />} />
        <Route path="/animes/excited" element={<Excited />} />
        <Route path="/animes/relaxed" element={<Relaxed />} />
        <Route path="/animes/inspired" element={<Inspired />} />
      </Routes>
    </Router>
  );
}

export default App;
