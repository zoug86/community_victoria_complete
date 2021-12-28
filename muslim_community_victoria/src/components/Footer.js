import React from 'react'

import '../styles/Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-text">
                <p>© 2021 Olive Branch Revival Foundation, All rights reserved</p>
                <p>Services Society</p>
                <p>Address: 881 Short St V8X 0B7 Victoria, British Columbia - Canada</p>
                <p>Phone: +1 (866) 248-3868</p>
                <p>Email: coordinator@OBRF.ca</p>
            </div>

            <div className="btns">
                <button className="footer-btn"><a className='donate-btn' href="https://www.canadahelps.org/en/" target="_blank" rel="noreferrer">Donate </a></button>
                <button className="footer-btn">Volunteer</button>
            </div>

        </footer>
    )
}

export default Footer
