import React from 'react';
import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="fw-bold nav-bar sticky-lg-top">
            <Container className='border border-success rounded-3 py-1 mt-1'>
                <Navbar.Brand as={NavLink} to='/'>
                    <Image src={logo} width={50} height={50} /> Skill Up - Academy
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='toggle-bar' />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='me-auto'>
                        <NavLink className='nav-link' to='/'>Home</NavLink>
                        <NavLink className='nav-link' to='/courses'>Courses</NavLink>
                        <NavLink className='nav-link' to='/faq'>FAQ</NavLink>
                        <NavLink className='nav-link' to='/blog'>Blog</NavLink>
                    </Nav>
                    <Nav className="d-flex flex-row justify-content-evenly gap-2">
                        <NavLink to='/login' className='nav-link nav-btn border rounded px-3 py-2 bg-white'>Sign In</NavLink>
                        <NavLink to='/register' className='nav-link nav-btn border rounded px-3 py-2 bg-white'>Sign Up</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
