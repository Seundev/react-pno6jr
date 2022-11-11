import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <Link className="link-color" to="/">
        Home
      </Link>
      <div>
        <h1>404 Page</h1>
      </div>
    </>
  );
};
export default ErrorPage;
