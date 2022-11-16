import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="error-container">
      <Link className="link-color" to="/">
        <button className="link-button">home</button>
      </Link>
      <div className="error">
        <h1>404 Page</h1>
        <p>This is an Error page.</p>
      </div>
    </div>
  );
};
export default ErrorPage;
