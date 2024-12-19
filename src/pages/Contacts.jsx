import React, { useState, useEffect } from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import './Styles.css';


const Contacts = () => { 
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
            setError('Tous les champs sont obligatoires.');
            return;
        }

        setError('');
        setSuccess(true);
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        });
    };   
    
    useEffect(() => {
        document.body.classList.add('contact-page');
        return () => {
            document.body.classList.remove('contact-page');
        };
    }, []);

    return (    
        <div className='contact-form-container'>
        <div className='container py-5 about-section text-center' style={{ maxWidth: '1000px', margin:'20px auto'}}>
            <h1>ME CONTACTER</h1>
            <h6>Pour me contacter en vue d'un entretien ou d'une future collaboration,
                merci de remplir le formulaire de contact.
            </h6>
            <hr className='blue-line3'/>
            <div className='row'>
                <div className="col-md-6 text-start">
                    <h2>Formulaire de contact</h2>
                    <hr className='blue-line4'/>
                    <div>
                        <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label"></label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Votre nom"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label"></label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Votre adresse email"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label"></label>
                            <input
                                type="text"
                                className="form-control"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Votre numéro de téléphone"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="subject" className="form-label"></label>
                            <input
                                type="text"
                                className="form-control"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Sujet"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label"></label>
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Votre message"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Envoyer</button>
                        </form>
                    </div>
                </div>
                <div className="col-md-6 text-start">
                    <h2>Mes coordonnées</h2>
                    <hr className='blue-line4'/>
                    <h5><IoLocationSharp /> 40 Rue Laure Diebold, 69009 Lyon, France<br/><IoIosPhonePortrait /> 06 20 30 40 50</h5>
                    <div style={{ width: "100%", height: "400px", margin: "20px 0" }}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22263.968641014493!2d4.784551221224362!3d45.771268807046006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1734192260518!5m2!1sfr!2sfr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Contacts;