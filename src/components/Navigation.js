import React from 'react';

function Navigation({ data }) {
    return (
        <nav className="navbar">
            <a href="#hero" className="nav-logo">Kiran</a>
            <ul className="nav-menu">
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;
