import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import CustomHookPage from './components/CustomHookPage';
import UseReducerPage from './components/UseReducerPage';
import ErrorBoundary from './components/ErrorBoundary';
import './style.css';

const UseReducerPage = () => {
  const [count, dispatch] = useReducer(countReducer, 0);
  return (
    <div className="counter-container">
      <button className="button" onClick={() => dispatch('decreament')}>
        Decreament
      </button>
      <button className="button" onClick={() => dispatch('setValue')}>
        multiply by 9
      </button>
      <div className="result">{count}</div>
      <button className="button" onClick={() => dispatch('increament')}>
        Increament
      </button>
      <button className="button" onClick={() => dispatch('reset')}>
        Reset
      </button>
    </div>
  );
};

function App() {
  return (
    <main>
      <ErrorBoundary>
        <div className="counter-container">
          <Routes>
            {/* <Route path="/" element={<CustomHookPage />} /> */}
            <Route path="/" element={<UseReducerPage />} />
          </Routes>
        </div>
      </ErrorBoundary>
    </main>
  );
}

export default App;
