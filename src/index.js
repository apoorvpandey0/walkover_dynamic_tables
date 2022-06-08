import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-b3mc630g.us.auth0.com"
      clientId="xSTz7gpNjc30vlgi1AxrJ5j2MFo9RNpT"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>,
  </React.StrictMode>
);
