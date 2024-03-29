import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { 
  BrowserRouter, 
  HashRouter,
  Routes, 
  Route, 
} from 'react-router-dom';
import { Login }  from './pages/Login';
import { Home }  from './pages/Home';
import { Register } from './pages/Register';
import { ListingAssisteds } from './pages/ListingAssisteds';
import { RegisterEvolution } from './pages/RegisterEvolution';
import { Evolutions } from './pages/Evolutions';
import { Assisted } from './pages/Assisted';
import { RegisterUser } from './pages/RegisterUser';
import { Demands } from './pages/Demands';
import { ListingUsers } from './pages/ListingUsers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(


  <HashRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="home" element={<Home />}/>
      <Route path="register" element={<Register />}/>
      <Route path="register/:id" element={<Register />}/>
      <Route path="assisteds" element={<ListingAssisteds />}/>
      <Route path="new-evolution/:id" element={<RegisterEvolution />}/>
      <Route path="new-evolution/:id/:evolutionId" element={<RegisterEvolution />}/>
      <Route path="evolution/:assistedId" element={<Evolutions />}/>
      <Route path="evolution/user/:userId" element={<Evolutions />}/>
      <Route path="assisted/:id" element={<Assisted/>}/>
      <Route path="user" element={<RegisterUser/>}/>
      <Route path="demands" element={<Demands />}/>
      <Route path='users' element={<ListingUsers/>}/>
    </Routes>
  </HashRouter>

    
);

