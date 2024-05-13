import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, FormControl, Image, InputGroup, Row } from 'react-bootstrap';
import loginImg from '../../../assets/images/register-login.png';
import shape1 from '../../../assets/images/shape-1.png';
import './Login.css';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
    const [error, setError] = useState('');
    const { signIn, setLoading, providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                navigate('/');
            })
            .catch(error => setError(error.message))
    }

    const handleSignInSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // Basic email validation
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }
        signIn(email, password)
            .then((result) => {
                const user = result.user;
                form.reset();
                setError('');
                if (user.emailVerified) {
                    navigate('/');
                }
                else {
                    toast.error('Your email is not verified. Please verify your email address.')
                }
            }).catch((err) => {
                if (err.code === 'auth/invalid-credential') {
                    setError('Incorrect password. Please try again.');
                } else {
                    setError(err.message);
                }
            })
            .finally(() => {
                setLoading(false);
            })
    }


    return (
        <Container className='login-container p-4 border rounded mt-3'>
            <Row>
                <Col lg={6} sm={12}>
                    <div className='login-images p-3 mt-2 text-center border rounded-2 position-relative z-1'>
                        <div className='shape-1 position-absolute'>
                            <Image src={shape1} />
                        </div>
                        <div className='login-img'>
                            <Image src={loginImg} />
                        </div>
                    </div>
                </Col>
                <Col lg={6} sm={12}>
                    <div className='login-form mx-auto w-75'>
                        <h3 className="login-title fs-1 fw-bold mt-5">Login <span className='text-success'>Now</span></h3>
                        <Form onSubmit={handleSignInSubmit}>
                            <div className="form-field">
                                <InputGroup>
                                    <FormControl className='p-3 fs-5' type="email" placeholder="Email" name='email' required />
                                </InputGroup>
                            </div>
                            <div className="form-field">
                                <InputGroup>
                                    <FormControl className='p-3 fs-5' type="password" placeholder="Password" name='password' required />
                                </InputGroup>
                            </div>
                            <Form.Text className="text-danger">
                                {error}
                            </Form.Text>
                            <div className="form-field">

                                <Button variant="success" className="w-100 py-2 btn-hover-dark fs-5 fw-medium" type='submit'>Login</Button>
                                <Button onClick={handleGoogleSignIn} variant='outline-success' className="btn-outline w-100 mt-3 py-2 fs-5 fw-medium ">Login with Google</Button>
                                <Button variant='outline-dark' className="btn-outline w-100 mt-2 py-2 fs-5 fw-medium ">Login with GitHub</Button>

                            </div>
                        </Form>

                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
