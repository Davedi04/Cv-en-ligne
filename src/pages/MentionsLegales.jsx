import React from "react";
import { Card, Accordion } from 'react-bootstrap';
import { IoLocationSharp } from 'react-icons/io5'; 
import { TbWorldWww } from "react-icons/tb";
import { IoMdPhonePortrait, IoMdMail } from 'react-icons/io';
import './Styles.css';

const MentionsLegales = () => {
    return (
        <div className="container-fluid my-5">
            <h1 className="text-center text-uppercase mb-4">Mentions légales</h1>
            <hr className="blue-line5" />

            <Card className="shadow">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <span className="accordion-title">Éditeur du site</span>
                        </Accordion.Header>
                        <Accordion.Body>
                            <h3>John Doe</h3>
                            <p>
                                <IoLocationSharp /> 40 Rue Laure Diebold<br />
                                69009 Lyon, France<br />
                                <IoMdPhonePortrait /> 
                                <a href="tel:+33620304050" className="text-decoration-none ms-2">
                                    06 20 30 40 50
                                </a>
                                <br />
                                <IoMdMail /> 
                                <a href="mailto:john.doe@gmail.com" className="text-decoration-none ms-2">
                                    john.doe@gmail.com
                                </a>
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <span className="accordion-title">Hébergeur</span>
                        </Accordion.Header>
                        <Accordion.Body>
                            <h3>Always Data</h3>
                            <p>91 rue du Faubourg Saint Honoré<br />
                            75008 Paris</p>
                            <TbWorldWww /><span className="accordion-www">www.alwaysdata.com</span>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            <span className="accordion-title">Crédits</span>
                        </Accordion.Header>
                        <Accordion.Body>
                            <h3>Crédits</h3>
                            <p>
                                Site développé par <strong>John Doe</strong>, étudiant de CEF.<br />
                                Les images libres de droit sont issues du site 
                                <a 
                                    href="https://pixabay.com/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-decoration-none ms-1 text-primary"
                                >
                                    Pixabay
                                </a>.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card>
        </div>
    );
};

export default MentionsLegales;
