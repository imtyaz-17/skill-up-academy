import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, FormControl, Image, InputGroup, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../../../assets/images/register-login.png';
import shape1 from '../../../assets/images/shape-1.png';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        photoURL: '',
        email: '',
        password: '',
        confirm: '',
        accepted: false
    });
    const [errors, setErrors] = useState({});
    const [error, setError] = useState('');
    const { createUser, updateUserProfile, verifyEmail, loginWithPopUp } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    useTitle('Register');
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        setErrors(prevState => ({
            ...prevState,
            [name]: ''
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validation
        let errors = {};
        if (!formData.name.trim()) {
            errors.name = 'Full Name is required';
        }
        if (!formData.photoURL.trim()) {
            errors.photoURL = 'Photo URL is required';
        }
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        if (!formData.password.trim()) {
            errors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            errors.password = 'Password should be 6 characters or more';
        }
        if (!formData.confirm.trim()) {
            errors.confirm = 'Confirm Password is required';
        } else if (formData.password !== formData.confirm) {
            errors.confirm = 'Passwords must match';
        }
        if (!formData.accepted) {
            errors.accepted = 'Please accept the terms and conditions';
        }

        if (Object.keys(errors).length === 0) {
            createUser(formData.email, formData.password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                    navigate('/login');
                    toast.success('Please verify your email address.');
                    handleUpdateUserProfile(formData.name, formData.photoURL);
                    handleEmailVerification();
                })
                .catch(error => {
                    setError(error.message);
                });
        } else {
            setErrors(errors);
        }
    };

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        };
        updateUserProfile(profile)
            .catch(error => setError(error.message));
    };

    const handleEmailVerification = () => {
        verifyEmail()
            .catch(error => setError(error.message));
    };
    const handleGoogleSignIn = () => {
        loginWithPopUp(googleProvider)
            .then(result => {
                const user = result.user;
                navigate('/');

            })
            .catch(error => setError(error.message))
    }
    const handleGitHubSignIn = () => {
        loginWithPopUp(gitHubProvider)
            .then(result => {
                const user = result.user;
                console.log('git', user);
                navigate('/');
            })
            .catch(error => setError(error.message))
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
                        <h3 className="login-title fs-1 fw-bold">Registration <span className='text-success'>Now</span></h3>
                        <Form onSubmit={handleSubmit}>
                            <div className="mt-4">
                                <InputGroup>
                                    <FormControl className='py-1 px-3 fs-5' type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
                                </InputGroup>
                                {errors.name && <Form.Text className="text-danger">{errors.name}</Form.Text>}
                            </div>
                            <div className="mt-3">
                                <InputGroup>
                                    <FormControl className='py-1 px-3 fs-5' name="photoURL" type="text" placeholder="Photo URL" value={formData.photoURL} onChange={handleChange} />
                                </InputGroup>
                                {errors.photoURL && <Form.Text className="text-danger">{errors.photoURL}</Form.Text>}
                            </div>
                            <div className="mt-3">
                                <InputGroup>
                                    <FormControl className='py-1 px-3 fs-5' name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                                </InputGroup>
                                {errors.email && <Form.Text className="text-danger">{errors.email}</Form.Text>}
                            </div>
                            <div className="mt-3">
                                <InputGroup>
                                    <FormControl className='py-1 px-3 fs-5' name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                                </InputGroup>
                                {errors.password && <Form.Text className="text-danger">{errors.password}</Form.Text>}
                            </div>
                            <div className="mt-3">
                                <InputGroup>
                                    <FormControl className='py-1 px-3 fs-5' name="confirm" type="password" placeholder="Confirm Password" value={formData.confirm} onChange={handleChange} />
                                </InputGroup>
                                {errors.confirm && <Form.Text className="text-danger">{errors.confirm}</Form.Text>}
                            </div>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check
                                    type="checkbox" onClick={(e) => setFormData(prevState => ({ ...prevState, accepted: e.target.checked }))}
                                    className='mt-2'
                                    label={<>Accept <Link to="/terms">Terms and conditions</Link></>} />
                                {errors.accepted && <Form.Text className="text-danger">{errors.accepted}</Form.Text>}
                            </Form.Group>
                            <div className="form-field">
                                <Button variant="success" type='submit' className="w-100 py-1 btn-hover-dark fs-5 fw-medium">Create an account</Button>
                                <span className='fs-5 fw-medium'>or,</span>
                                <div className="mt-1 text-sm form-field">
                                    Already have an account ?
                                    <Link to="/login" className="ms-2 text-primary">Click to login
                                    </Link>
                                </div>
                                <Button onClick={handleGoogleSignIn} variant='outline-success' className="btn-outline w-100 mt-3 py-1 fs-5 fw-medium ">Sign up with Google</Button>
                                <Button onClick={handleGitHubSignIn} variant='outline-dark' className="btn-outline w-100 mt-2 py-1 fs-5 fw-medium ">Sign up with GitHub</Button>
                                <Form.Text className="text-danger">
                                    {error}
                                </Form.Text>
                            </div>

                        </Form>
                    </div>
                </Col>
            </Row >
        </Container >
    );
};

export default Register;
