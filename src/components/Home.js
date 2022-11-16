import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-link">
        <h1 className="home-heading">Hi, Welcome to my counter Project.</h1>

        <Link to="/customhookpage">
          <button className="link-button">custom hook page</button>
        </Link>
        <br />
        <br />
        <Link to="/UseReducerPage">
          <button className="link-button">usereducer page</button>
        </Link>
        <br />
        <br />
        <Link to="/errorpage">
          <button className="link-button">error page</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
