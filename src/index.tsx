import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/bootstrap.scss';
import './styles/fonts.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import AppNavigation from './navigation';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppNavigation />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
