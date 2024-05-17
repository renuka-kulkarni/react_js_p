import React, { useState } from 'react';
import axios from 'axios';

const Contact= () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send email
            const response = await axios.post('/send-email', formData);
            console.log(response.data);
            // Optionally, show a success message to the user
        } catch (error) {
            console.error('Error sending email:', error);
            // Optionally, show an error message to the user
        }
    };

    return (
        <div className="container mt-5">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Your email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" name="message" placeholder="Your message" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
            <p className="mt-3">Alternatively, you can email us directly at: <a href={`mailto:renukulkarni467@gmail.com?subject=Message from ${formData.name}&body=${formData.message}`}>renukulkarni467@gmail.com</a></p>
        </div>
    );
};

export default Contact;
