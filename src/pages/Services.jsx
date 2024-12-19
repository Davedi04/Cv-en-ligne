import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FaLaptop, FaCode, FaSearchDollar } from 'react-icons/fa'; 
import './Styles.css';

const Services = () => {
    return (
        <div className="container-fluid my-5">
            <div className='my-5'>
                <img src='/img/banner.jpg' alt='Image de fond' className='img-fluid full-width-image'></img>
            </div>
            <div>
                <h1 className="text-center mb-5">MON OFFRE DE SERVICES</h1>
                <p className="text-center mb-5">Voici les prestations sur lesquelles je peux intervenir.</p>
                <hr className='blue-line5'/>
                <Row className="justify-content-center">
                    <Col md={4} className="mb-4">
                        <Card className='card2 shadow-lg' style={{ borderRadius: '30px' }}>
                            <Card.Body className="card-body text-center">
                                <FaLaptop size={70} color='#0d6efd' className="mb-3" />
                                <Card.Title>UX DESIGN</Card.Title>
                                <Card.Text>
                                    L'<strong>UX Design</strong> est une méthode 
                                    de conception centrée sur l'utilisateur. 
                                    Son but est d'offrir une expérience de navigation 
                                    optimale à l'internaute.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} className="mb-4">
                        <Card className='card2 shadow-lg' style={{ borderRadius: '30px' }}>
                            <Card.Body className="card-body text-center">
                                <FaCode size={70} color='#0d6efd' className="mb-3" />
                                <Card.Title>DÉVELOPPEMENT WEB</Card.Title>
                                <Card.Text>
                                    Le <strong>développement de sites web </strong>  
                                    repose sur l'utilisation des langages <u>HTML</u>, <u>CSS</u>, 
                                    JavaScript et <u>PHP</u>.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} className="mb-4">
                        <Card className='card2 shadow-lg' style={{ borderRadius: '30px' }}>
                            <Card.Body className="card-body text-center">
                                <FaSearchDollar size={70} color='#0d6efd' className="mb-3" />
                                <Card.Title>RÉFÉRENCEMENT</Card.Title>
                                <Card.Text>
                                    Le <strong>référencement naturel d'un site</strong>,
                                    aussi appelé <u>SEO</u>, consiste à mettre des techniques 
                                    en oeuvre pour améliorer sa position dans 
                                    les résultats des moteurs de recherche.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Services;
