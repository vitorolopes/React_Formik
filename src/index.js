import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.css"
import { ThemeContextProvider } from './context/ThemeContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeContextProvider>
      <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeContextProvider>
  );


