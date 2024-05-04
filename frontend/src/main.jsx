import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateForm from './components/CreateForm.jsx';
import EditProduct from './components/EditProduct.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/nuevo-producto" element={<CreateForm />} />
        <Route exact path="/editar-producto/:id" element={<EditProduct />} />
      </Routes>
    </Router>
  </React.StrictMode>
);