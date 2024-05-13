import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard/CourseCard';
import SideBar from './SideBar/SideBar';
import FooterCopyright from '../Shared/FooterWidget/FooterCopyright/FooterCopyright';
const Courses = () => {
    const courses = useLoaderData();
    return (
        <>
            <Container>
                <Row>
                    <Col lg={3}>
                        <SideBar></SideBar>
                    </Col>
                    <Col lg={9}>
                        <Row className='mt-3'>
                            {courses.map(course => (
                                <Col lg={4} md={6} sm={12}>
                                    <CourseCard key={course.id} course={course}></CourseCard>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
            <FooterCopyright></FooterCopyright>
        </>
    );
};

export default Courses;
