import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderComponent from './compontents/header';
import HomePage from './pages/home'
import AboutPage from './pages/about';
import ImageGallery from './pages/gallery';

function App() {
  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<ImageGallery />} />
      </Routes>
    </Router>
  );
}

export default App;
