import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Listings from './routes/listings';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/listings' element={<Listings />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
