import React from "react";
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Styles.css';

const Realisations = () => {
    const article = [
        { 
            image: '/img/fresh-food-7.jpg',
            title: 'Fresh food',
            description: 'Réalisation de site avec une commande en ligne.',
            link: '/article1',
            publie: 'Site réalisé avec PHP et MySQL'
        },
        { 
            image: '/img/restaurant-japonais-8.jpg',
            title: 'Restaurant Akira', 
            description: 'Réalisation de site vitrine.',
            link: '/article2',
            publie: 'Site réalisé avec wordPress'
        },
        { 
            image: '/img/espace-bien-etre-9.jpg',
            title: 'Espace bien-être',
            description: 'Réalisation de site vitrine pour un praticien de bien-être.',
            link: '/article3',
            publie: 'Site réalisé en HTML / CSS'
        },  
    ];    
    return (
        <div className="container-fluid text-center my-5">
            <div className='my-5'>
                <img src='/img/banner.jpg' alt='Image de fond' className='img-fluid full-width-image'></img>
            </div>
            <div>
                <h1 className=" mb-4">PORTFOLIO</h1>
                <h5>Voici quelques-unes de mes réalisations .</h5>
                <hr className='blue-line5'/>  
            </div>
            <div className="row">
                {article.map((article, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <Card className='rounded-1'>
                            <img src={article.image} alt={article.title} className='card-img-top' />
                            <div className="text-center">
                                <Card.Body>
                                    <Card.Title className='fw-bold fs-1'>{article.title}</Card.Title>
                                    <Card.Text className="fs-6 fw-bold">{article.description}</Card.Text>
                                    <div className="d-flex justify-content-center">
                                        <Link to={article.link}>
                                            <Button variant="white border-primary text-primary fw-bold">Voir</Button>
                                        </Link>
                                    </div>
                                </Card.Body>                         
                                <Card.Footer>{article.publie}</Card.Footer>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Realisations;