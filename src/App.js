// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Services from './pages/Services';
import Réalisations from './pages/Realisations';
import Blog from './pages/Blog';
import Contacts from './pages/Contacts';
import MentionsLegales from './pages/MentionsLegales';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Header.css';


const App = () => {
  return (
    <Router>
      <div>
        <Header />
          <Routes>
            <Route path='/' element={<Accueil />} />
            <Route path='/Services' element={<Services />} />
            <Route path='/Realisations' element={<Réalisations />} />
            <Route path='/Blog' element={<Blog />} />
            <Route path='/Contacts' element={<Contacts />} />
            <Route path='/MentionsLegales' element={<MentionsLegales />} />
          </Routes>  
        <Footer />
      </div>
    </Router>
  );
};

export default App;
