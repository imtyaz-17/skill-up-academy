import React, { useEffect, useState } from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('dark-mode', isDarkMode);
        document.body.classList.toggle('light-mode', !isDarkMode);
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };
    return (
        <div className={`theme-wrapper ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode}></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;