import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import errorImg from '../../assets/images/error.png'
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <Container>
            <div className="error-wrapper">
                <Row className="align-items-center">
                    <Col lg={6}>
                        {/* Error Images*/}
                        <div className="mt-5">
                            <Image src={errorImg} alt="Error" />
                        </div>
                    </Col>
                    <Col lg={6}>
                        {/* Error Content*/}
                        <div className="me-2 text-center ">
                            <h3 >This Page is <span className='text-danger'>Not Found!!</span></h3>
                            <h2 className="">We are very sorry for the error.</h2>
                            <Link to='/'>
                                <Button variant="success" className="btn-hover-dark mt-2 ">Back To Home</Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container >
    );
};

export default ErrorPage;