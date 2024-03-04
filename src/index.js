import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './context/Auth';
import "./index.css"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
    <BrowserRouter>
    <Toaster position='bottom-right'/>
    <App />
    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);


