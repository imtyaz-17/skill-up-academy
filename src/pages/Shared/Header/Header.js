import React, { useContext } from 'react';
import { Container, Image, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaUserLarge } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Header.css';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error())
    }
    return (
        <Navbar collapseOnSelect expand="lg" className="fw-bold nav-bar">
            <Container className='border border-success rounded-3 py-1 mt-1'>
                <Navbar.Brand as={NavLink} to='/' className='d-flex justify-content-center align-items-center'>
                    <Image src={logo} width={50} height={50} /> <span>Skill Up - Academy</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='toggle-bar' />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='me-auto'>
                        <NavLink className='nav-link' to='/'>Home</NavLink>
                        <NavLink className='nav-link' to='/courses'>Courses</NavLink>
                        <NavLink className='nav-link' to='/faq'>FAQ</NavLink>
                        <NavLink className='nav-link' to='/blog'>Blog</NavLink>
                    </Nav>
                    {
                        user?.uid ?
                            <Nav className="d-flex flex-row justify-content-evenly">
                                {/* <NavLink className='nav-link'>{user.displayName}</NavLink> */}
                                {/* <NavLink to='/profile' className='nav-link' data-bs-toggle="tooltip" data-bs-placement="top" title={user.displayName}>
                                    {
                                        user?.photoURL ?
                                            <Image style={{ height: '30px' }} roundedCircle src={user?.photoURL}></Image>
                                            : <FaUserLarge />
                                    }
                                </NavLink> */}
                                <OverlayTrigger
                                    placement="bottom"
                                    overlay={<Tooltip id="button-tooltip-2">{user.displayName}</Tooltip>}
                                >
                                    <NavLink to='/profile' className='nav-link'>
                                        {
                                            user?.photoURL ?
                                                <Image style={{ height: '30px' }} roundedCircle src={user?.photoURL}></Image>
                                                : <FaUserLarge />
                                        }
                                    </NavLink>
                                </OverlayTrigger>
                                <NavLink onClick={handleLogOut} className='nav-link nav-btn border rounded px-3 py-2 bg-white'>Log out</NavLink>
                            </Nav>
                            :
                            <Nav className="d-flex flex-row justify-content-evenly gap-2">
                                <NavLink to='/login' className='nav-link nav-btn border rounded px-3 py-2 bg-white'>Sign In</NavLink>
                                <NavLink to='/register' className='nav-link nav-btn border rounded px-3 py-2 bg-white'>Sign Up</NavLink>
                            </Nav>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
