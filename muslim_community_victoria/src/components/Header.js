import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { faEnvelope, faHeart, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import logo from '../resources/logo.jpg'

import '../styles/Header.css'

const Header = () => {
    return (
        <>
            <div className="top-bar">
                <span><FontAwesomeIcon className='icon' icon={faPhoneSquare} />
                    +1 (866) 248-3868</span>
                <span> <FontAwesomeIcon className='icon' icon={faEnvelope} />
                    coordinator@OBRF.ca </span>

                <a className="canada-helps" href="https://www.canadahelps.org/en/" target="_blank" rel="noreferrer"> <FontAwesomeIcon className='icon' icon={faHeart} />Canada Helps</a>
            </div>

            <Navbar bg="light" expand="lg" color='primary' fixed="top">
                <Container>
                    <Navbar.Brand href="#home" color='success'><img className='logo' src={logo} alt="logo" />
                        Olive Branch Revival Foundation
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About Us</Nav.Link>
                            <Nav.Link href="#link">Services</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
