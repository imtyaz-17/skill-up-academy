import React from 'react';
// import { Image } from 'react-bootstrap';

import { FaStar, FaUserGraduate } from 'react-icons/fa';
import { GiDuration } from 'react-icons/gi';
import './CourseCard.css'
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter, Flex, Avatar, Box, Heading, Text, IconButton, Button, SimpleGrid, Image, AspectRatio } from '@chakra-ui/react';
const CourseCard = ({ course }) => {
    const { id, name, img, description, instructor, enrolled, duration, ratings } = course;

    return (
        <Link to={`/course/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            {/* <Card className="mb-3 shadow course-card" style={{ height: '58vh' }}>
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
            </Card> */}
            <Card maxW='md' className="mb-3 shadow course-card">
                <Image
                    height='150'
                    objectFit='contain-fill'
                    src={img}
                    alt=''
                    rounded='md'
                />
                <CardBody>
                    <Heading size='md'> {name}</Heading>
                    <Text height={{ base: 'auto', md: '110px' }}>
                        {`${description.slice(0, 100)}...`}
                    </Text>
                    <Flex spacing='2'>
                        <Flex flex='1' gap='3' alignItems='center' flexWrap='wrap'>
                            <Avatar name='' src={instructor?.instImg} />
                            <Heading size='sm'>{instructor?.instname}</Heading>
                        </Flex>
                    </Flex>
                </CardBody>
                <CardFooter
                    paddingTop='0px'
                    justify='space-between'
                    flexWrap='wrap'
                    sx={{
                        '& > div': {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontWeight: '500',
                        },
                    }}
                >
                    <div>
                        <FaUserGraduate className=" text-primary" />{enrolled}
                    </div>
                    <div>
                        <FaStar className="text-warning" />{ratings}
                    </div>
                    <div>
                        <GiDuration className="text-primary" />{duration}
                    </div>
                </CardFooter>
            </Card>
        </Link>
    );
};

export default CourseCard;
