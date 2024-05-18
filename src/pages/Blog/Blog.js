import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Blog.css'
import DownloadApp from '../Shared/DownloadApp/DownloadApp';
import FooterWidget from '../Shared/FooterWidget/FooterWidget';
const Blog = () => {
    const posts = [
        {
            id: 1,
            question: "What is CORS?",
            answer: `
            CORS stands for Cross-Origin Resource Sharing. It is a mechanism that allows web pages to request resources from a different domain than the one that served the original page. This is necessary for accessing APIs and resources hosted on separate domains and ensures that web applications can interact with external servers securely and efficiently.
            `,
        },
        {
            id: 2,
            question: "Why are you using Firebase? What other options do you have to implement authentication?",
            answer: `
            Firebase offers a wide range of services, including various methods of user authentication. You can choose from email and password authentication, social media login through providers like Google, Facebook, and Twitter, or implement custom authentication methods. 
    
            Other options for implementing authentication include:
            - Auth0: A flexible, drop-in solution to add authentication and authorization services.
            - Okta: A comprehensive identity management service.
            - Passport.js: A popular authentication middleware for Node.js.
            - Custom Backend Solutions: Implementing your own authentication logic using frameworks like Express.js, Django, or ASP.NET.
            `,
        },
        {
            id: 3,
            question: "How does the private route work in React?",
            answer: `
            In React, a private route component ensures that a user is authenticated before accessing certain routes. If the user is not logged in, they are redirected to the login page, and the return URL is passed in the location state. This way, after successful authentication, the user can be redirected back to the originally requested page. This ensures secure access to protected components within your application.
            `,
        },
        {
            id: 4,
            question: "What is Node.js? How does Node.js work?",
            answer: `
            Node.js is a JavaScript runtime environment built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript on the server-side, enabling the creation of scalable and efficient web applications. 
    
            Node.js operates on an event-driven, non-blocking I/O model, which makes it lightweight and efficient. It uses a single-threaded event loop to handle multiple concurrent connections. This architecture allows Node.js to manage numerous requests efficiently without the need for multiple threads, making it ideal for real-time applications like chat servers and APIs.
            `,
        },
    ];

    return (
        <>
            <Container>
                <h2 className='text-center m-3 text-success'>Blogs
                </h2>
                {posts.map((item) => (
                    <div key={item.id} className="blog-wrapper border rounded mt-2 shadow">
                        <Row className="align-items-center">
                            <Col lg={4}>
                                <h4 className="ps-3 py-2">{item.question}</h4>
                            </Col>
                            <Col lg={8}>
                                <div className="p-3">
                                    <p>{item.answer}</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                ))}
                <div className="text-center mt-3">
                    <Link to="/blog">
                        <Button variant="outline-success" className="p-3 fw-medium">More Post</Button>
                    </Link>
                </div>
            </Container>
            <DownloadApp />
            <FooterWidget />
        </>
    );
};

export default Blog;