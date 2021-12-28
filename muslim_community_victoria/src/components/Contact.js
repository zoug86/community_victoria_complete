import React, { useState } from 'react'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../styles/Contact.css'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name,
            email,
            subject,
            message
        };
        const response = await fetch('/contact', {  // '/api/contact' is the route we are sending the data to
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const body = await response.text();
        const { status } = JSON.parse(body);
        if (status === 'success') {
            alert('message sent successfully!');
        }
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    }

    return (
        <section id="section-4" className="section-4">
            <div className="bar-text">

                <h1 className='section-4-title'>Contact <FontAwesomeIcon className='icon' icon={faHeart} /></h1>
            </div>

            <div className="section-4-1">
                <div className="section-4-img">

                </div>

                <div className="section-4-form">
                    <div className="form-header">
                        <p className="form-header-text">Have something in mind? Contact Us!</p>
                    </div>
                    <form className="form" action="" onSubmit={handleSubmit}>
                        <input className="name input" type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} />
                        <input className="email input" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                        <input className="subject input" type="text" placeholder="Subject" value={subject} onChange={e => setSubject(e.target.value)} />
                        <textarea className="message" placeholder="Enter your message" rows="5" cols="33" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                        <button className="form-btn" type="submit">Send</button>
                    </form>


                </div>

            </div>

        </section>
    )
}

export default Contact
