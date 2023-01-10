import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomHookPage from './components/CustomHookPage';
import UseReducerPage from './components/UseReducerPage';
import Home from './components/Home';
import Error from './components/Error';
import { Fallback } from './components/Fallback';
import ErrorPage from './components/ErrorPage';

import './style.css';

function App() {
  const errorHandler = (error, errorInfo) => {
    console.log('logging', error, errorInfo);
  };
  return (
    <main>
      <Router>
        <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
          <Routes>
            <Route path="/" element={<Home />} />;
            <Route path="/customhookpage" element={<CustomHookPage />} />;
            <Route path="/usereducerpage" element={<UseReducerPage />} />;
            <Route path="/error" element={<Error />} />;
            <Route path="/errorpage" element={<ErrorPage />} />;
          </Routes>
        </ErrorBoundary>
      </Router>
    </main>
  );
}

export default App;
