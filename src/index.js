import React from 'react';
// import ReactDOM from 'react-dom/client';
import { render } from 'react-snapshot';
import { BrowserRouter as Router } from "react-router-dom";
import './assets/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css';
import './index.css';
import './media.css';
import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);