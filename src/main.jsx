import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/checkbox/checkbox.js';
import "@material/web/all.js";
import { LoginProvider, ProductoProvider } from './context/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginProvider>
    <BrowserRouter>
      <ProductoProvider>
        <App />
      </ProductoProvider>
    </BrowserRouter>
    </LoginProvider>
  </React.StrictMode>,
)
