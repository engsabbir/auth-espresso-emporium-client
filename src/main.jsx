/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from "react-router-dom";
import AddCoffee from './pages/AddCoffee.jsx';
import UpdateCoffeeDetails from './pages/UpdateCoffeeDetails.jsx';
import Layout from './layouts/Layout.jsx';
import router from './router/Router.jsx';
import AuthProvider from './provider/AuthProvider.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
