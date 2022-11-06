import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomHookPage from './components/CustomHookPage';
import UseReducerPage from './components/UseReducerPage';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './components/Home';
import './style.css';

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />;
          <Route path="/customhookpage" element={<CustomHookPage />} />;
          <Route path="/usereducerpage" element={<UseReducerPage />} />;
          <Route path="/errorboundary" element={<ErrorBoundary />} />;
        </Routes>
      </Router>
    </main>
  );
}

export default App;
