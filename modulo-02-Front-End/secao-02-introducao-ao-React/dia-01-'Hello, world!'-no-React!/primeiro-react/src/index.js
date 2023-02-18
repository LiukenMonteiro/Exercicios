import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppA from './AppA';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootA = ReactDOM.createRoot(document.getElementById('rootA'));
rootA.render(
  <React.StrictMode>
    <AppA />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
