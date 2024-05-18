import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import './Checkout.css';
import CourseDetails from '../Courses/CourseDetails/CourseDetails';

const Checkout = () => {
    const [isRadioSelected, setIsRadioSelected] = useState(false);
    const [show, setShow] = useState(false);
    const courseDetail = useLoaderData();
    // const { name, price } = useContext(CourseContext);
    useEffect(() => {
        setShow(true);
    }, []);
    const handleClose = () => {
        setShow(false);
        window.history.back();
    }

    const handleRadioChange = () => {
        setIsRadioSelected(!isRadioSelected);
    };

    const handlePlaceOrder = () => {
        if (isRadioSelected) {
            window.history.back();
            handleClose();
            // navigate('/');          
            toast.success('Course successfully purchased! Start learning now...');
        }
    };

    return (
        <div>
            <Modal show={show} onHide={handleClose} size="md" aria-labelledby="contained-modal-title-vcenter" centered >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className="text-success">
                        Checkout
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="checkout-list mx-3">
                    <ul>
                        <li>Course Name: <span>{courseDetail?.name}</span></li>
                        <li>Price: <span>${courseDetail?.price}</span></li>
                        <li>Tax: <span>$0.00</span></li>
                        <li>Total Amount: <span>${courseDetail?.price}</span></li>
                    </ul>
                    <p className='fw-medium'>Payment Option:</p>
                    <Form.Check
                        type="radio"
                        id="onlinePayment"
                        label="Online Payment"
                        onChange={handleRadioChange}
                    />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <Button variant="primary" disabled={!isRadioSelected} onClick={handlePlaceOrder}>Place Order</Button>
                </Modal.Footer>
            </Modal>
            <CourseDetails></CourseDetails>
        </div>

    );
};

export default Checkout;
