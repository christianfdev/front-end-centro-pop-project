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
import { ListingAssisteds } from './pages/ListingAssisteds';
import { RegisterEvolution } from './pages/RegisterEvolution';
import { FindEvolution } from './pages/FindEvolution';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="home" element={<Home />}/>
      <Route path="register" element={<Register />}/>
      <Route path="assisteds" element={<ListingAssisteds />}/>
      <Route path="new-evolution" element={<RegisterEvolution />}/>
      <Route path="evolution" element={<FindEvolution />}/>

    </Routes>
    
  </BrowserRouter>
    
);

