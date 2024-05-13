import React from 'react';
import shapeD from '../../../assets/images/shape-14.png'
import playStoreImg from '../../../assets/images/google-play.png'
import appStoreImg from '../../../assets/images/app-store.png'
import { Button, Col, Container, Row } from 'react-bootstrap';


const DownloadApp = () => {
    return (
        <div className="d-flex mt-5 py-3 download-section">
            <div className="app-shape-1"></div>
            <div className="app-shape-2"></div>

            <Container>
                <Row className="d-flex justify-content-between align-items-center">
                    <Col lg={5}>
                        <div className="section-title text-white">
                            <h5 className="">Ready to start?</h5>
                            <h2 className="">Download our mobile app. for easy to start your course.</h2>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <img className="shape-D animation-right" src={shapeD} alt="Shape" />
                    </Col>
                    <Col lg={5}>
                        <div className="ps-3 pt-5">
                            <ul className="d-flex list-unstyled">
                                <li className='me-3'>
                                    <Button href="#" className='download-btn'>
                                        <img src={playStoreImg} alt="Google Play" />
                                    </Button>
                                </li>
                                <li className=''>
                                    <Button href="#" className='download-btn'>
                                        <img src={appStoreImg} alt="App Store" />
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DownloadApp;