
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import DashBoard from './components/DashBoard';
import Detail from './components/Detail';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="dashboard" element={<DashBoard />} />
          {/* <Route path="" element={<Detail/>} /> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
