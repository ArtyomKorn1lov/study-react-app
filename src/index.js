import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import AppPage from './pages/app-page/App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppPage />
    </BrowserRouter>
  </React.StrictMode>
);