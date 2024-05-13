import React from 'react';
import { Image, Card } from 'react-bootstrap';
import { FaStar, FaUserGraduate } from 'react-icons/fa';
import { GiDuration } from 'react-icons/gi';
import './CourseCard.css'
import { Link } from 'react-router-dom';
const CourseCard = ({ course }) => {
    const { id, name, img, description, instructor, enrolled, duration, ratings } = course;

    return (
        <Link to={`/course/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card className="mb-3 shadow course-card" style={{ height: '58vh' }}>
                <Card.Body className="p-2">
                    <Card.Img variant="top" src={img} style={{ height: '20vh', marginBottom: '1rem' }} />
                    <Card.Title className="text-success">{name}</Card.Title>
                    <Card.Text style={{ height: '5vh' }}>
                        {`${description.slice(0, 80)}...`}
                        <div className="d-flex align-items-center mt-3">
                            <Image roundedCircle className="mb-0 me-3" src={instructor?.instImg} style={{ height: '8vh' }} />
                            <div>
                                <span className="mb-0 fw-medium">{instructor?.instname}</span>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                    <div className="text-center">
                        <FaUserGraduate className="me-1 text-primary fw-medium" /><span >{enrolled}</span>
                    </div>
                    <div className="text-center">
                        <FaStar className="me-1 text-warning" /><span >{ratings}</span>
                    </div>
                    <div className="text-center">
                        <GiDuration className="me-1 text-primary" /><span >{duration}</span>
                    </div>
                </Card.Footer>
            </Card>
        </Link>
    );
};

export default CourseCard;
