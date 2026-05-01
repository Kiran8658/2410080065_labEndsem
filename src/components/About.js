import React from 'react';

function About({ data, onEditClick }) {
    return (
        <section id="about" className="about">
            <h2>About</h2>
            {data.about.map((paragraph, idx) => (
                <p key={idx} className={`about-p${idx + 1}`}>
                    {paragraph}
                </p>
            ))}
            <button onClick={onEditClick} className="btn-edit">Edit About Me</button>

            <h3>Stats</h3>
            <div className="stats-container">
                <div className="stat-card">
                    <div className="stat-number">{data.stats.projects}</div>
                    <div className="stat-label">Projects Built</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">{data.stats.tech}</div>
                    <div className="stat-label">Technologies</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">{data.stats.exp}</div>
                    <div className="stat-label">Years Learning</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">∞</div>
                    <div className="stat-label">Cups of Coffee</div>
                </div>
            </div>
        </section>
    );
}

export default About;
