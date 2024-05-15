import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FooterCopyright.css'
import { FaHeart } from "react-icons/fa";
import { Flex } from '@chakra-ui/react';
const FooterCopyright = () => {
    return (
        // <div style={{ backgroundColor: '#212832' }}>
        //     <Container className="d-flex text-white justify-content-between align-items-center">
        //         {/* Footer  Start */}
        //         <div>
        //             <Link to='/terms' className='text-decoration-none text-white me-2 footer-lnk'>Terms of Service</Link>
        //             <Link to='/terms' className='text-decoration-none text-white me-2 footer-lnk'>Privacy Policy</Link>
        //             <Link to='/terms' className='text-decoration-none text-white me-2 footer-lnk'>Sitemap</Link>
        //             <Link to='/terms' className='text-decoration-none text-white footer-lnk'>Security</Link>
        //         </div>
        //         <Flex align='center' className='pt-3'>
        //             <p>&copy; 2024 <span className='text-success fw-medium'> Skill Up Academy </span> Made with <FaHeart className='text-danger' /> by <Link to='' className='text-decoration-none text-success fw-medium'>imty@z</Link></p>
        //         </Flex>

        //         {/* Footer Copyright End */}
        //     </Container>
        // </div>
        <div style={{ backgroundColor: '#212832' }}>
            <Container className='p-2'>
                <Flex justify='space-between' align='center'>
                    {/* Footer Links */}
                    <div>
                        <Link to='/terms' className='text-decoration-none text-white me-2 footer-lnk'>Terms of Service</Link>
                        <Link to='/terms' className='text-decoration-none text-white me-2 footer-lnk'>Privacy Policy</Link>
                        <Link to='/terms' className='text-decoration-none text-white me-2 footer-lnk'>Sitemap</Link>
                        <Link to='/terms' className='text-decoration-none text-white footer-lnk'>Security</Link>
                    </div>

                    {/* Copyright Information */}
                    <Flex align='center' color='white' gap='1'>
                        &copy; 2024 <span className='text-success fw-medium'>Skill Up Academy</span>
                        Made with <FaHeart className='text-danger' /> by <Link to='' className='text-decoration-none text-success fw-medium'>imty@z</Link>
                    </Flex>
                </Flex>
            </Container>
        </div>
    );
};

export default FooterCopyright;