import React, { useEffect, useState } from 'react';
import './SideBar.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const SideBar = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(resp => resp.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='side-bar mt-3 border rounded p-3'>
            <h5>Course Categories:</h5>
            {
                courses.map(course =>
                    < Button key={course.id} variant="outline-success" className='mt-2 d-block w-100 '><Link className='text-decoration-none text-dark side-btn' to={`/course/${course.id}`}>{course.name}</Link></Button>)
            }
        </div >
    );
};

export default SideBar;