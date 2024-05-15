import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';
import { RxDividerVertical } from 'react-icons/rx';
import { FaChalkboardTeacher, FaLanguage, FaRegClock, FaStar } from 'react-icons/fa';
import SideBar from '../SideBar/SideBar';
import { MdVideoLibrary } from 'react-icons/md';
import { SiLevelsdotfyi } from "react-icons/si";
import FooterWidget from '../../Shared/FooterWidget/FooterWidget';
import FooterCopyright from '../../Shared/FooterWidget/FooterCopyright/FooterCopyright';
import DownloadApp from '../../Shared/DownloadApp/DownloadApp';
const CourseDetails = () => {
    const course = useLoaderData();
    const { name, img, description, curriculum, certificate, instructor, level, lectures, language, enrolled, price, duration, ratings } = course;

    const StarRating = ({ ratings }) => {
        const numStars = parseInt(ratings);

        const starsArray = Array.from({ length: 5 }, (_, index) => (
            <FaStar key={index} className={index < numStars ? "text-warning d-inline-block" : "text-secondary d-inline-block"} />
        ));
        return <>{starsArray}</>;
    };

    return (
        <>
            <Container className='mb-3'>
                <Row>
                    <Col lg={3}>
                        <SideBar />
                    </Col>
                    <Col lg={9}>
                        <Card className="mt-3">
                            <Card.Img variant="top" src={img} style={{ height: '50vh' }} />
                            <Card.Body>
                                <Row>
                                    <Col lg={8}>
                                        <Card.Title className="fs-1 fw-bold shadow">{name}</Card.Title>
                                        <div className="d-flex justify-content-between  align-items-center mt-3">
                                            <Image roundedCircle className="mb-0 " src={instructor?.instImg} style={{ height: '10vh' }} />
                                            <h3>{instructor?.instname}</h3>
                                            <RxDividerVertical className="fs-1 text-success" />
                                            <div className='justify-content-between'>
                                                <h6 className="text-primary">{enrolled} Enrolled Students</h6>
                                                <h6>
                                                    <StarRating ratings={ratings} />
                                                    {' '}
                                                    ({ratings})
                                                </h6>
                                            </div>
                                        </div>
                                        <ContentSection title="Description:" content={description} />
                                    </Col>
                                    <Col lg={4}>
                                        <div className="side-bar p-3 border rounded">
                                            <div className="text-center mb-3 ">
                                                <span className="fs-3 fw-bold border rounded-circle bg-white p-2" style={{
                                                    color: '#309255'
                                                }}>${price}</span>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <div>
                                                    <ul className="border-top list-unstyled d-flex flex-column">
                                                        <li className='border-bottom py-2 d-flex justify-content-between align-items-center'>
                                                            <div>
                                                                <FaChalkboardTeacher className='text-success d-inline-block' />
                                                                <span className='fw-medium'> Instructor</span>
                                                            </div>
                                                            <span>{instructor?.instname}</span>
                                                        </li>
                                                        <li className='border-bottom py-2 d-flex justify-content-between align-items-center'>
                                                            <div>
                                                                <FaRegClock className='text-success d-inline-block' />
                                                                <span className='fw-medium'> Duration</span>
                                                            </div>
                                                            <span>{duration}</span>
                                                        </li>
                                                        <li className='border-bottom py-2 d-flex justify-content-between align-items-center'>
                                                            <div>
                                                                <MdVideoLibrary className='text-success d-inline-block' />
                                                                <span className='fw-medium'> Lectures</span>
                                                            </div>
                                                            <span>{lectures}</span>
                                                        </li>
                                                        <li className='border-bottom py-2 d-flex justify-content-between align-items-center'>
                                                            <div>
                                                                <SiLevelsdotfyi className='text-success d-inline-block' />
                                                                <span className='fw-medium'> Level</span>
                                                            </div>
                                                            <span>{level}</span>
                                                        </li>
                                                        <li className='border-bottom py-2 d-flex justify-content-between align-items-center'>
                                                            <div>
                                                                <FaLanguage className='text-success d-inline-block' />
                                                                <span className='fw-medium'> Language</span>
                                                            </div>
                                                            <span>{language}</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='text-center'>
                                                    <Button variant="success" className="btn-hover-dark">Get Premium Access</Button>
                                                </div>
                                            </div>

                                        </div>
                                    </Col>
                                </Row>
                                <Card.Text>
                                    <ContentSection title="Curriculum:" content={<CurriculumList curriculum={curriculum} />} />
                                    <ContentSection title="Certification:" content={certificate} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container >
            <DownloadApp></DownloadApp>
            <FooterCopyright></FooterCopyright>
        </>
    );
};

const ContentSection = ({ title, content }) => (
    <>
        <h3 className="mt-2">{title}</h3>
        {content}
    </>
);

const CurriculumList = ({ curriculum }) => (
    <ul style={{ listStyleType: 'square' }}>
        {curriculum.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
    </ul>
);

export default CourseDetails;
