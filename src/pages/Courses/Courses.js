import React from 'react';
import { CardGroup, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import SideBar from '../Shared/SideBar/SideBar';
import CourseCard from './CourseCard/CourseCard';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <Container>
            <Row>
                <Col lg={3}>
                    <SideBar></SideBar>
                </Col>
                <Col lg={9}>
                    <Row className='mt-3'>
                        {courses.map(course => (
                            <Col key={course.id} lg={4} md={6} sm={12}>
                                <CourseCard course={course}></CourseCard>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;