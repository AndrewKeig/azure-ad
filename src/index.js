import React from 'react';
import ReactDOM from 'react-dom';
import { runWithAdal } from 'react-adal';
import { authContext } from './adal';
import './index.css';
import App from './App';

runWithAdal(authContext, () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}, false);
