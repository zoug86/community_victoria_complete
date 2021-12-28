import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, BrowserRouter as Router, } from 'react-router-dom'
import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import '../styles/Sidebar.css'
import { Nav } from 'react-bootstrap'

const Sidebar = () => {
    const sidebarRef = useRef(null);
    const handleClick = () => {
        sidebarRef.current.classList.toggle('active');
    }

    return (
        <Router >
            <Nav className="sidebar" ref={sidebarRef}>
                <div className='nav-toggler' onClick={handleClick}><FontAwesomeIcon icon={faBars} /></div>
                <Link to="#" className='icon-link facebook'><FontAwesomeIcon icon={faFacebook} /></Link>
                <Link to="#" className='icon-link twitter'><FontAwesomeIcon icon={faTwitter} /></Link>
                <Link to="#" className='icon-link instagram'><FontAwesomeIcon icon={faInstagram} /></Link>
                <Link to="#" className='icon-link linkedin'><FontAwesomeIcon icon={faLinkedin} /></Link>
                <Link to="#" className='icon-link whatsapp'><FontAwesomeIcon icon={faWhatsapp} /></Link>
            </Nav>
        </Router>
    )
}

export default Sidebar
