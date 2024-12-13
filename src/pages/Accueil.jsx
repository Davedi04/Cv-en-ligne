import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Styles.css';

const Home = () => {
  return (
    <div className="container">
      {/* Section du Diaporama avec Image en Fond */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="text-center my-5 hero-content">
            <h1>Bonjour, je suis John Doe</h1>
            <h2>Développeur web full stack</h2>
            <Link className="btn btn-primary" to="/a-propos">En savoir plus</Link>
          </div>
        </div>
      </section>
      <section id='About' className='container py-5 about-section'>    
      <div className='row'>
        <div className="col-md-6">
          <h2>À propos
            <hr className='blue-line2'/>
          </h2>
          <p>Passionné par l'informatique et les nouvelles technologies, j'ai suivi
            une formation d'<strong>intégrateur-développeur web </strong> au CEF. Au cours de cette formation,
            j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>developpement web</strong>.
            Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour 
            consolider ma formation de <strong>développeur web full stack</strong>. 
            J'accorde une attention particulière à la qualité du code que j'écris et je respecte
            les bonnes pratiques du web. 
          </p>
        </div>
        <div className="col-md-6">
          <img 
            src='./img/img-photo-1.jpg' 
            alt="John Doe" 
            className="img-fluid2" 
            style={{ maxWidth: '100%' }} 
          />
          <h2>Mes compétences</h2>
          <div>
            <h5>HTML5</h5>
            <ProgressBar now={90} label='90%' className='progress-html' />
          </div>
          <div>
            <h5>CSS3</h5>
            <ProgressBar now={80} label='80%' className='progress-css' />
          </div>
          <div>
            <h5>JavaScript</h5>
            <ProgressBar now={70} label='70%' className='progress-js' />
          </div>
          <div>
            <h5>PHP</h5>
            <ProgressBar now={60} label='60%' className='progress-php' />
          </div>
          <div>
            <h5>React</h5>
            <ProgressBar now={50} label='50%' className='progress-react' />
          </div>
        </div>
      </div>
      </section>
    </div>    
  );
};

export default Home;