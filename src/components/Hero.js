import React from 'react';

function Hero({ data, onEditClick }) {
    return (
        <section id="hero" className="hero">
            <h1 className="hero-name">
                {data.name.split(' ').map((word, idx) => (
                    <React.Fragment key={idx}>
                        {word}
                        {idx < data.name.split(' ').length - 1 && <br />}
                    </React.Fragment>
                ))}
            </h1>
            <p className="hero-tagline">{data.tagline}</p>
            <div className="roles-row">
                <span>Frontend Dev</span>
                <span>Full Stack</span>
                <span>UI / UX Design</span>
            </div>
            <div className="hero-buttons">
                <a href="#projects" className="btn-primary">Dive In</a>
                <a href="#contact" className="btn-secondary">Get In Touch</a>
            </div>
        </section>
    );
}

export default Hero;
