import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { Image } from 'react-bootstrap';
import logo from '../../../assests/images/logo.png'
const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="fw-bold nav-bar">
            <Container className='border border-success rounded-3 py-1 mt-1'>
                <Navbar.Brand href="#home">
                    <Image width={50}
                        height={50} src={logo} fluid /> Skill Up - Academy</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='toggle-bar' />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='me-auto'>
                        <Nav.Link href="#features" >Home</Nav.Link>
                        <Nav.Link href="#pricing" >Courses</Nav.Link>
                        <Nav.Link href="#pricing">FAQ</Nav.Link>
                        <Nav.Link href="#pricing">Blog</Nav.Link>
                    </Nav>
                    <Nav className="d-flex flex-row justify-content-evenly gap-2">
                        <Nav.Link href="#deets" className='nav-btn border rounded px-3 bg-white'>Sign In</Nav.Link>
                        <Nav.Link href="#memes" className='nav-btn border rounded px-3 bg-white'>
                            Sign Up
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;