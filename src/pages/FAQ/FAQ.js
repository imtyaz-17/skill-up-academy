import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import DownloadApp from '../Shared/DownloadApp/DownloadApp';
import FooterWidget from '../Shared/FooterWidget/FooterWidget';
import './FAQ.css';
import useTitle from '../../hooks/useTitle';

const FAQ = () => {
    useTitle('FAQs');
    const questions = [
        {
            id: 1,
            question: "What do Skill Up Academy courses include?",
            answer: `
            Each Skill Up Academy course is created, owned, and managed by the instructor(s). The foundation of each course consists of lectures, which may include videos, slides, and text. Additionally, instructors can include resources and various types of practice activities to enhance the learning experience for students.`,
        },
        {
            id: 2,
            question: "Do I have to start my Skill Up Academy course at a certain time? And how long do I have to complete it?",
            answer: `
            There are no deadlines to begin or complete a Skill Up Academy course. Once enrolled, you have lifetime access to the course materials.`,
        },
        {
            id: 3,
            question: "Is Skill Up Academy an accredited institution? Do I receive anything after I complete a course?",
            answer: `
            While Skill Up Academy is not an accredited institution, we offer skills-based courses taught by real-world experts in their field. Upon completion of an approved, paid course, you will receive a certificate of completion to document your accomplishment.`,
        },
        {
            id: 4,
            question: "How can I pay for a Skill Up Academy course?",
            answer: `
            Skill Up Academy supports several different payment methods, depending on your account country and location.`,
        },
        {
            id: 5,
            question: "Can Skill Up Academy provide a certificate after completing a course?",
            answer: `
            Yes, Skill Up Academy provides a certificate upon completing a course.`,
        },
        {
            id: 6,
            question: "Are Skill Up Academy courses suitable for beginners?",
            answer: `
            Yes, Skill Up Academy offers courses suitable for beginners, intermediate learners, and advanced professionals. Each course has its own level of difficulty, and you can choose the one that best fits your skill level.`,
        },
        {
            id: 7,
            question: "Can I access Skill Up Academy courses on mobile devices?",
            answer: `
            Yes, Skill Up Academy courses are accessible on various devices, including desktops, laptops, tablets, and smartphones. You can learn anytime, anywhere at your convenience.`,
        },
    ];

    return (
        <>
            <Container>
                <h2 className='text-center m-3'>
                    <span className='text-success'>FREQUENTLY</span> ASKED QUESTIONS
                </h2>
                <Accordion defaultActiveKey="0" flush>
                    {questions.map((item, index) => (
                        <Accordion.Item eventKey={index.toString()} key={item.id} className='faq-dark'>
                            <Accordion.Header>{item.question}</Accordion.Header>
                            <Accordion.Body>
                                {item.answer}
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </Container>
            <DownloadApp />
            <FooterWidget />
        </>
    );
};

export default FAQ;
