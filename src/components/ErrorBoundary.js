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

function Bomb({ username }) {
  if (username === 'bomb') {
    throw new Error('💥 CABOOM 💥');
  }
  return `Hi ${username}`;
}

function ErrorBoundary() {
  const [username, setUsername] = useState('');
  const usernameRef = React.useRef(null);

  return (
    <div>
      <Helmet>
        <title>ErrorBoundary</title>
        <mata name="description" content="Seun's counter App" />
        <meta
          name="Keywords"
          content="Customhooks,React, Seun's project, Developer, ErorBoundary "
        />
      </Helmet>

      <Link className="link-color" to="/">
        Home
      </Link>

      <label>
        {`Username (don't type "bomb"): `}
        <input
          placeholder={`type "bomb"`}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          ref={usernameRef}
        />
      </label>
      <div>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            setUsername('');
            usernameRef.current.focus();
          }}
          resetKeys={[username]}
        >
          <Bomb username={username} />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default ErrorBoundary;
