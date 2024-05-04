import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewProductForm from './components/NewProductForm.jsx';
import EditProductForm from './components/EditProductForm.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/nuevo-producto" element={<NewProductForm />} />
        <Route exact path="/editar-producto/:id" element={<EditProductForm />} />
      </Routes>
    </Router>
  </React.StrictMode>
);