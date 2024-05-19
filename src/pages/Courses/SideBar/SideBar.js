import React, { useEffect, useState } from 'react';
import './SideBar.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const SideBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://skill-up-academy-server.vercel.app/course-categories')
            .then(resp => resp.json())
            .then(data => setCategories(data))
    }, [])
    console.log(categories);
    return (
        <div className='side-bar mt-3 border rounded p-2'>
            <h5>Course Categories:</h5>
            {

                categories.map(category =>
                    <Link className='text-decoration-none text-dark side-btn' to={`/category/${category.id}`}>
                        < Button key={category.id} variant="outline-success" className='mt-2 d-block w-100 '>{category.name}</Button></Link>)
            }
        </div >
    );
};

export default SideBar;