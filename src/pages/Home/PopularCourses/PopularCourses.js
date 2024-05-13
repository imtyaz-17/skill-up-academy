import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CourseCard from '../../Courses/CourseCard/CourseCard';
const PopularCourses = ({ courses }) => {
    // Filter courses with ratings >= 4
    const popularCourses = courses.filter(course => course.ratings >= 4);
    return (
        <Container>
            <Row className="text-center">
                <h2 className="my-4"> <span className=" text-success">Popular
                </span> Courses</h2>
                {popularCourses.map(course => (
                    <Col lg={3} md={4} sm={12}>
                        <CourseCard key={course.id} course={course}></CourseCard>
                    </Col>
                ))}
                <Link to="/courses">
                    <Button variant="outline-success" className="p-3 my-3 fw-medium">Other Courses</Button>
                </Link>
            </Row>
        </Container>
    );
};

export default PopularCourses;