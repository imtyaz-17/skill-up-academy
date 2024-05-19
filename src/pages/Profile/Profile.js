import React, { useContext, useRef, useState } from 'react';
import { Button, Col, Container, Form, FormControl, Image, Row } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const Profile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    const [name, setName] = useState(user.displayName);
    const photoURLRef = useRef(user.photoURL);
    const [errors, setErrors] = useState({});
    useTitle('Profile');
    const handleSubmit = event => {
        event.preventDefault();
        if (!name) {
            setErrors({ name: 'Name is required' });
            return;
        }
        if (!photoURLRef.current.value) {
            setErrors({ name: 'photoURL is required' });
            return;
        }
        handleUpdateUserProfile(name, photoURLRef.current.value);
    };

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL,
        };
        updateUserProfile(profile)
            .then(() => {
                toast.success('Profile updated.');
            })
            .catch(error => setErrors({ update: error.message }));
    };

    return (
        <Container className="p-4 border rounded mt-3" style={{ backgroundColor: '#eefbf3' }}>
            <Row>
                <h2 className="fw-bold text-center text-success">Profile</h2>
                <Col lg={4} sm={12} className="d-flex justify-content-center align-items-center">
                    <Image src={user.photoURL} fluid className="shadow" />
                </Col>
                <Col lg={8} sm={12}>
                    <div className="mx-auto w-75">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mt-4">
                                <Form.Label className="fs-5 fw-medium">Full Name:</Form.Label>
                                <FormControl
                                    type="text"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    isInvalid={!!errors.name}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.name}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mt-2">
                                <Form.Label className="fs-5 fw-medium">Photo URL:</Form.Label>
                                <FormControl
                                    type="text"
                                    defaultValue={user.photoURL}
                                    ref={photoURLRef}
                                />
                            </Form.Group>
                            <Form.Group className="mt-2">
                                <Form.Label className="fs-5 fw-medium">Email:</Form.Label>
                                <FormControl
                                    type="email"
                                    defaultValue={user.email}
                                    readOnly
                                    className="bg-secondary text-white"
                                />
                            </Form.Group>
                            <Button
                                variant="success"
                                type="submit"
                                className="w-100 py-1 btn-hover-dark fs-5 fw-medium mt-3"
                            >
                                Save
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Profile;
