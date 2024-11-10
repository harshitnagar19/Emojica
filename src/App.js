
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import DashBoard from './components/DashBoard';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="dashboard" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
