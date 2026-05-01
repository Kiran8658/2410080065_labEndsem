import React from 'react';

function Skills({ data, onEditClick }) {
    const skillGroups = [
        { title: 'Frontend', items: data.skills.frontend },
        { title: 'Backend', items: data.skills.backend },
        { title: 'Design & Tools', items: data.skills.tools }
    ];

    return (
        <section id="skills" className="skills">
            <h2>Tech Stack</h2>
            <div className="skills-container">
                {skillGroups.map((group, idx) => (
                    <div key={idx} className="skill-group">
                        <h4>{group.title}</h4>
                        <p>{group.items.join(', ')}</p>
                    </div>
                ))}
            </div>
            <br />
            <button onClick={onEditClick} className="btn-edit">+ Add / Edit Skills</button>
        </section>
    );
}

export default Skills;
