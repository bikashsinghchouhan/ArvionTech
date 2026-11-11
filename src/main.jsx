import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

const container = document.getElementById('root');
const app = (
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// Production pages are prerendered to static HTML (scripts/prerender.js): hydrate them.
// In dev the root is empty, so render from scratch.
if (container.firstElementChild) {
  ReactDOM.hydrateRoot(container, app);
} else {
  ReactDOM.createRoot(container).render(app);
}
