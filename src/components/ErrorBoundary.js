import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="error-boundary-countainer,">
      <p>Something went wrong:</p>
      <p style={{ color: 'red' }}>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function ErrorBoundary() {
  const [username, setUsername] = useState(false);

  const test = {
    description: `ErrorBoundary section`,
  };

  function Bomb() {
    throw new Error('💥 CABOOM 💥');
  }

  return (
    <div>
      <Helmet>
        <title>ErrorBoundary</title>
        <meta name="description" content="Seun's counter App" />
        <meta
          name="Keywords"
          content="Customhooks,React, Seun's project, Developer, ErorBoundary "
        />
      </Helmet>

      <Link className="link-color" to="/">
        Home
      </Link>

      <div className="errorboundary-container">
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => setUsername(false)}
          resetKeys={[username]}
        >
          <h5>{test.description.toUpperCase()}</h5>
          <h4>Error will be thrown once you click the button</h4>
          <div>
            {username ? <Bomb /> : null}
            <button onClick={() => setUsername((state) => !state)}>
              Click Explode
            </button>
          </div>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default ErrorBoundary;
