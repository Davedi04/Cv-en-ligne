import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'; // Assurez-vous que votre fichier CSS est bien lié

const Header = () => {
  const location = useLocation();
  const getClassName = (path) => location.pathname === path ? 'nav-link active' : 'nav-link';
  
  return (
    <header className='container'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="main-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            John Doe
          </Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className={getClassName("/")} to="/">Accueil</Link>
              </li>
              <li className="nav-item">
                <Link className={getClassName("/services")} to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className={getClassName("/realisations")} to="/realisations">Réalisations</Link>
              </li>
              <li className="nav-item">
                <Link className={getClassName("/blog")} to="/blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className={getClassName("/contacts")} to="/contacts">Me contacter</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

