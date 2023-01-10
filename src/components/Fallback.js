import React from 'react';

export const Fallback = () => {
  const Return = () => {
    window.location.href = '/';
  };
  return (
    <div className="main_container">
      <h1>Something went wrong!</h1>
      <p>Count limit exceeded!</p>
      <button onClick={Return}>Return to Home page</button>
    </div>
  );
};
