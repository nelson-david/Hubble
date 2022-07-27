import React from 'react';
import ReactDOM from 'react-dom/client';
// import { render } from 'react-snapshot';
import { BrowserRouter as Router } from "react-router-dom";
import 'https://res.cloudinary.com/ruthless-labs/raw/upload/v1658892190/bootstrap_bl7lda.css';
import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css';
import './index.css';
import './media.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

serviceWorkerRegistration.register();