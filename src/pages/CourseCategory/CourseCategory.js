import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../Courses/CourseCard/CourseCard';
import { Col, Container, Row } from 'react-bootstrap';
import SideBar from '../Courses/SideBar/SideBar';

const CourseCategory = () => {
    const categoryCourses = useLoaderData();
    console.log(categoryCourses);
    return (
        <Container>
            <Row>
                <Col lg={3}>
                    <SideBar></SideBar>
                </Col>
                <Col lg={9}>
                    <Row className='mt-1'>
                        <h2 className='mb-2'>Courses ({categoryCourses.length}):</h2>
                        {
                            categoryCourses.map(course =>
                                <Col lg={4} md={6} sm={12}>
                                    <CourseCard key={course.id} course={course}></CourseCard>
                                </Col>)
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default CourseCategory;