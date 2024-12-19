import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Styles.css';

const Blog = () => {
  const articles = [
    { 
      image: '/img/coder-1.jpg',
      title: 'Coder son site en HTML / CSS',
      description: 'Quelques exemples de texte rapides pour le contenu de la carte 1.',
      link: '/article1',
      publie: 'Publier le 22 août 2022'
    },
    {
      image: '/img/croissance-2.jpg',
      title: 'Vendre ses produits sur le web',
      description: 'Quelques exemples de texte rapides pour le contenu de la carte 2.',
      link: '/article2',
      publie: 'Publier le 20 août 2022'
    },
    {
      image: '/img/google-3.jpg',
      title: 'Se positionner sur Google',
      description: 'Quelques exemples de texte rapides pour le contenu de la carte 3.',
      link: '/article3',
      publie: 'Publier le 1 août 2022'
    },
    { 
      image: '/img/screens-4.jpg',   
      title: 'Coder en responsive design',
      description: 'Quelques exemples de texte rapides pour le contenu de la carte 4.',
      link: '/article4',
      publie: 'Publier le 31 jillet 2022'
    },
    {
      image: '/img/seo-5.jpg',  
      title: 'Technique de référencement',
      description: 'Quelques exemples de texte rapides pour le contenu de la carte 5.',
      link: '/article5',
      publie: 'Publier le 30 juillet 2022'
    },
    {
      image: '/img/technos-6.png',
      title: 'Apprendre à coder',
      description: 'Quelques exemples de texte rapides pour le contenu de la carte 6.',
      link: '/article6',
      publie: 'Publier le 12 juillet 2022'
    },
  ];

  return (
    <div className="container-fluid my-5">
      <div className='text-center my-5'>
        <img src='/img/banner.jpg' alt='Image de fond' className='img-fluid full-width-image'></img>
      </div>
      <div>
        <h1 className="text-center mb-4">Blog</h1>
        <p className='text-center'>Retrouver ici quelques articles sur le développement web.</p>
        <hr className='blue-line'/>  
      </div>      
      <div className="row">
        {articles.map((article, index) => (
        <div key={index} className="col-md-4 mb-4">
          <Card className='rounded-1'>
            <img src={article.image} alt={article.title} className='card-img-top' />
            <Card.Body>
              <Card.Title className='fw-bold'>{article.title}</Card.Title>
              <Card.Text>{article.description}</Card.Text>
              <Link to={article.link}>
                <Button variant="primary">Lire l'article</Button>
              </Link>
            </Card.Body>
            <Card.Footer>{article.publie}</Card.Footer>
          </Card>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
