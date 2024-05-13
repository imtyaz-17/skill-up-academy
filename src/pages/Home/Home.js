import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import sliderImg1 from '../../assets/images/slider1.jpg'
import sliderImg2 from '../../assets/images/slider2.jpg'
import './Home.css'
import { Button, Container } from 'react-bootstrap';
const Home = () => {
    return (
        <div style={{ backgroundColor: '#eefbf3' }}>
            <Carousel fade>
                <Carousel.Item>
                    <img src={sliderImg1} className="d-block w-100" style={{ height: '85vh' }} alt='' />
                    <Carousel.Caption className='text-black text-start w-25  flex-column'>
                        <h5 className='text-success'>Start your favorite course</h5>
                        <h1 className='fw-bold my-3 '>Now learning from anywhere, and build your <span className='text-success  '>bright career.</span></h1>
                        <span className='my-2'>It has survived not only five centuries but also the leap into electronic typesetting.</span>
                        <Button variant="success" className="btn-hover-dark w-50 p-2 my-2">Start A Course</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={sliderImg2} className="d-block w-100" style={{ height: '85vh' }} alt='' />
                    <Carousel.Caption className='text-black text-start w-25 flex-column'>
                        <h5 className='text-success'>Start your favorite course</h5>
                        <h1 className='fw-bold my-3 '>Now learning from anywhere, and build your <span className='text-success  '>bright career.</span></h1>
                        <span className='my-2'>It has survived not only five centuries but also the leap into electronic typesetting.</span>
                        <Button variant="success" className="btn-hover-dark w-50 p-2 my-2">Start A Course</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={sliderImg1} className="d-block w-100" style={{ height: '85vh' }} alt='' />
                    <Carousel.Caption className='text-black text-start w-25 flex-column'>
                        <h5 className='text-success'>Start your favorite course</h5>
                        <h1 className='fw-bold my-3 '>Now learning from anywhere, and build your <span className='text-success  '>bright career.</span></h1>
                        <span className='my-2'>It has survived not only five centuries but also the leap into electronic typesetting.</span>
                        <Button variant="success" className="btn-hover-dark w-50 p-2 my-2">Start A Course</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Container>
                <h2 className="">Popular <span>Courses</span></h2>
            </Container>
        </div >
    );
};

export default Home;