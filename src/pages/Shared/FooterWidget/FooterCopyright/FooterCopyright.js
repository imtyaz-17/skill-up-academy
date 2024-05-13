import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FooterCopyright.css'
import { FaHeart } from "react-icons/fa";
const FooterCopyright = () => {
    return (
        <div style={{ backgroundColor: '#212832' }}>
            <Container className="d-flex text-white justify-content-between align-items-center">
                {/* Footer  Start */}
                <div className=''>
                    <Link to='/terms' className='text-decoration-none text-white me-2 footer-lnk'>Terms of Service</Link>
                    <Link to='/terms' className='text-decoration-none text-white me-2 footer-lnk'>Privacy Policy</Link>
                    <Link to='/terms' className='text-decoration-none text-white me-2 footer-lnk'>Sitemap</Link>
                    <Link to='/terms' className='text-decoration-none text-white footer-lnk'>Security</Link>
                </div>
                <div className='pt-3'>
                    <p>&copy; 2024 <span className='text-success fw-medium'> Skill Up Academy </span> Made with <FaHeart className='text-danger' /> by <Link href="#" className='text-decoration-none text-success fw-medium'>imty@z</Link></p>
                </div>
                {/* Footer Copyright End */}
            </Container>
        </div>
    );
};

export default FooterCopyright;