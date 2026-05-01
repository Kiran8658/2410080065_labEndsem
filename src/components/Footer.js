import React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            Kumbhar Kiran — Crafted with code & caffeine — <span>{currentYear}</span>
        </footer>
    );
}

export default Footer;
