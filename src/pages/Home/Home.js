import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link, useLoaderData } from 'react-router-dom';
import sliderImg1 from '../../assets/images/slider1.jpg';
import sliderImg2 from '../../assets/images/slider2.jpg';
import './Home.css';

import PopularCourses from './PopularCourses/PopularCourses';

import { FaArrowRightLong, FaWpforms } from "react-icons/fa6";
import { ImSearch } from "react-icons/im";
import { PiCertificate } from "react-icons/pi";
import DownloadApp from '../Shared/DownloadApp/DownloadApp';
import FooterWidget from '../Shared/FooterWidget/FooterWidget';
import useTitle from '../../hooks/useTitle';
const Home = () => {
    const courses = useLoaderData();
    console.log("courses", courses);
    useTitle('Home');
    return (
        <>
            <div style={{ backgroundColor: '#eefbf3' }} className='home-bg'>
                <Carousel fade>
                    <Carousel.Item>
                        <div className="carousel-item-overlay"></div>
                        <img src={sliderImg1} className="d-block w-100" style={{ height: '85vh' }} alt='' />
                        <Carousel.Caption className='text-black text-start w-25  flex-column carousel-dark'>
                            <h5 className='text-success'>Start your favorite course</h5>
                            <h1 className='fw-bold my-3 '>Learn from anywhere and upgrade your skills with  <span className='text-success'>Skill Up Academy.</span></h1>
                            <span className='my-2'>Our legacy withstands not only five centuries, but also the leap into electronic typesetting.</span>
                            <Link to="/courses">
                                <Button variant="success" className="btn-hover-dark w-50 p-2 my-3">Start A Course</Button>
                            </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-item-overlay"></div>
                        <img src={sliderImg2} className="d-block w-100" style={{ height: '85vh' }} alt='' />
                        <Carousel.Caption className='text-black text-start w-25 flex-column carousel-dark'>
                            <h5 className='text-success'>Start your favorite course</h5>
                            <h1 className='fw-bold my-3 '>Learn from anywhere and upgrade your skills with  <span className='text-success '>Skill Up Academy.</span></h1>
                            <span className='my-2'>Our legacy withstands not only five centuries, but also the leap into electronic typesetting.</span>
                            <Button variant="success" className="btn-hover-dark w-50 p-2 my-3">Start A Course</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-item-overlay"></div>
                        <img src={sliderImg1} className="d-block w-100" style={{ height: '85vh' }} alt='' />
                        <Carousel.Caption className='text-black text-start w-25 flex-column carousel-dark'>
                            <h5 className='text-success'>Start your favorite course</h5>
                            <h1 className='fw-bold my-3 '>Learn from anywhere and upgrade your skills with  <span className='text-success '>Skill Up Academy.</span></h1>
                            <span className='my-2'>Our legacy withstands not only five centuries, but also the leap into electronic typesetting.</span>
                            <Button variant="success" className="btn-hover-dark w-50 p-2 my-3">Start A Course</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <PopularCourses courses={courses}></PopularCourses>
            </div >
            <Container>

                {/* Section Title */}
                <div className="section-title text-center">
                    <h5 className="text-success ">Over 500+ Course</h5>
                    <h2 >How It <span className="text-success"> Works?</span></h2>
                </div>
                {/* Section Title End */}

                {/* How it Work */}
                <Row className='pt-3 d-flex justify-content-center align-items-center'>
                    {/* Single Work 1*/}
                    <Col lg={3} className="single-work px-4">
                        {/* <img className="shape-1" src="assets/images/shape/shape-15.png" alt="Shape" /> */}
                        <div className="work-icon">
                            <ImSearch />
                        </div>
                        <div className="py-2">
                            <h3 className="fs-2 fw-semibold">Find Course</h3>
                            <p className="text-secondary">It has survived not only centuries also leap into electronic.</p>
                        </div>
                    </Col>

                    {/* Arrow 1 */}
                    <Col lg={1} className="mt-3 ms-1">
                        <FaArrowRightLong className='text-success fs-1 fw-bold ' />
                    </Col>
                    {/* Single Work 2*/}
                    <Col lg={3} className="single-work px-4">
                        {/* <img className="shape-1" src="assets/images/shape/shape-15.png" alt="Shape" /> */}
                        <div className="work-icon">
                            <FaWpforms />
                        </div>
                        <div className="py-2">
                            <h3 className="fs-2 fw-semibold">Book A Seat</h3>
                            <p className="text-secondary">It has survived not only centuries also leap into electronic.</p>
                        </div>
                    </Col>
                    {/* Arrow 2 */}
                    <Col lg={1} className="mt-3 ms-1">
                        <FaArrowRightLong className='text-success fs-1 fw-bold ' />
                    </Col>
                    {/* Single Work 3 */}
                    <Col lg={3} className="single-work px-4">
                        {/* <img className="shape-1" src="assets/images/shape/shape-15.png" alt="Shape" /> */}
                        <div className="work-icon">
                            <PiCertificate />
                        </div>
                        <div className="py-2">
                            <h3 className="fs-2 fw-semibold">Get Certificate</h3>
                            <p className="text-secondary">It has survived not only centuries also leap into electronic.</p>
                        </div>
                    </Col>
                    {/* Single Work 3 End */}
                </Row>
            </Container>
            <DownloadApp></DownloadApp>
            <FooterWidget></FooterWidget>
        </>
    );
};

export default Home;