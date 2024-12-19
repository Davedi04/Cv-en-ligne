import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='container-fluid py-5'>
      <div className='row'>
        <div className='col-md-3'>
          <h4>John Doe</h4>
          <a>40 Rue Laure Diebold<br/>
            69009 Lyon, France<br/>
            Téléphone : 06 20 30 40 50</a>
          <div>
            <a href="https://github.com/johndoe" target='_blank' rel="noopener noreferrer" className='text-muted me-4'>  
              <i className='fab fa-github fa-2x'></i>
            </a>
            <a href="https://twitter.com/ton-utilisateur" target='_blank' rel="noopener noreferrer" className='text-muted me-4'>  
              <i className='fab fa-twitter fa-2x'></i>
            </a>
            <a href="https://www.linkedin.com/in/ton-utilisateur" target='_blank' rel="noopener noreferrer" className='text-muted me-4'>  
              <i className='fab fa-linkedin fa-2x'></i>
            </a>
          </div>
        </div>
        <div className='col-md-3'>
          <div className='footer-links'>
            <h4>Liens utiles</h4>
            <ul>
              <li><a href="/"><span className="blue">&gt;</span> Accueil</a></li>
              <li><a href="/"><span className="blue">&gt;</span> A propos</a></li>
              <li><a href="/Services"><span className="blue">&gt;</span> Services</a></li>
              <li><a href="/Contacts"><span className="blue">&gt;</span> Me contacter</a></li>
              <li><a href="/MentionsLegales"><span className="blue">&gt;</span> Mentions légales</a></li>
            </ul>
          </div>
        </div>
        <div className='col-md-3'>
          <div className='footer-links'>
            <h4>Mes dernières réalisations</h4>
            <ul>
              <li><a href="#Fresh food"><span className="blue">&gt;</span> Fresh food</a></li>
              <li><a href="#Restaurant Akira"><span className="blue">&gt;</span> Restaurant Akira</a></li>
              <li><a href="#Espace bien-être"><span className="blue">&gt;</span> Espace bien-être</a></li>
            </ul>
          </div>
        </div>
        <div className='col-md-3'>
          <div className='footer-links'>
            <h4>Mes derniers articles</h4>
            <ul>
              <li><a href="#Coder son site"><span className="blue">&gt;</span>Coder son site en HTML/CSS</a></li>
              <li><a href="#Vendre ses produits"><span className="blue">&gt;</span>Vendre ses produits sur le web</a></li>
              <li><a href="#Se positionner"><span className="blue">&gt;</span>Se positionner sur Google</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-custom text-white text-center py-3">
        <p>© Designed by John Doe</p>
      </div>
    </footer>
  );
};

export default Footer;
