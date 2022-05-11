import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { 
  BrowserRouter, 
  Routes, 
  Route, 
} from 'react-router-dom';
import { Login }  from './pages/Login';
import { Home }  from './pages/Home';
import { Register } from './pages/Register';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="home" element={<Home />}/>
      <Route path="register" element={<Register />}/>
    </Routes>
    
  </BrowserRouter>
    
);

