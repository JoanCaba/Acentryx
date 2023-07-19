import React from 'react';
import './MainSection.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Contact from '../../pages/Contact';

const MainSection = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default MainSection;
