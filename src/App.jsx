import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainContentPage from './pages/MainContentPage';
import SignOutPage from './pages/SignOutPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContentPage />} />
        <Route path="/signout" element={<SignOutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
