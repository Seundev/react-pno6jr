import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomHookPage from './components/CustomHookPage';
import UseReducerPage from './components/UseReducerPage';
import ErrorBoundary from './components/ErrorBoundary';
import './style.css';

function App() {
  return (
    <main>
      <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<CustomHookPage />} />;
          <Route path="/usereducerpage" element={<UseReducerPage />} />;
        </Routes>
      </Router>
      </ErrorBoundary>
    </main>
  );
}

export default App;
