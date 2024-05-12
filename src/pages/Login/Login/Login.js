import React from 'react';
import { Button, Col, Container, Form, FormControl, Image, InputGroup, Row } from 'react-bootstrap';
import loginImg from '../../../assets/images/register-login.png';
import shape1 from '../../../assets/images/shape-1.png';
import './Login.css';

const Login = () => {
    return (
        <Container className='login-container p-4 border rounded mt-3'>
            <Row>
                <Col lg={6} sm={12}>
                    <div className='login-images p-3 mt-2 text-center border rounded-2 position-relative z-1'>
                        <div className='shape-1 position-absolute'>
                            <Image src={shape1} fluid />
                        </div>
                        <div className='login-img'>
                            <Image src={loginImg} fluid />
                        </div>
                    </div>
                </Col>
                <Col lg={6} sm={12}>
                    <div className='login-form mx-auto w-75'>
                        <h3 className="login-title fs-1 fw-bold mt-5">Login <span className='text-success'>Now</span></h3>
                        <Form>
                            <div className="form-field">
                                <InputGroup>
                                    <FormControl className='p-3 fs-5' type="email" placeholder="Username or Email" required />
                                </InputGroup>
                            </div>
                            <div className="form-field">
                                <InputGroup>
                                    <FormControl className='p-3 fs-5' type="password" placeholder="Password" required />
                                </InputGroup>
                            </div>
                            <div className="form-field">
                                <Button variant="success" className="w-100 py-2 btn-hover-dark fs-5 fw-medium">Login</Button>
                                <Button variant='outline-success' className="btn-outline w-100 mt-3 py-2 fs-5 fw-medium ">Login with Google</Button>
                                <Button variant='outline-dark' className="btn-outline w-100 mt-2 py-2 fs-5 fw-medium ">Login with GitHub</Button>
                                <Form.Text className="text-danger"></Form.Text>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;