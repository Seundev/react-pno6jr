import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-link">
        <h1>Hi, Welcome to my counter Project.</h1>

        <Link className="link-color" to="/customhookpage">
          CustomHookPage
        </Link>
        <br />
        <br />
        <Link className="link-color" to="/UseReducerPage">
          UseReducerPage
        </Link>
        <br />
        <br />
        <Link className="link-color" to="/errorboundary">
          ErrorBoundary
        </Link>
      </div>
    </div>
  );
};

export default Home;
