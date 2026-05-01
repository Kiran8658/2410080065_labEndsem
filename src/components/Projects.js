import React from 'react';

function Projects({ data, onAddClick, onDeleteProject }) {
    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="projects-container">
                {data.projects.map((project, idx) => (
                    <div key={idx} className="project-card">
                        <div className="project-emoji">{project.emoji}</div>
                        <h4>{project.title}</h4>
                        <p>{project.desc}</p>
                        <div className="project-tech">
                            <strong>Tech:</strong> {project.tech.join(', ')}
                        </div>
                        <div className="project-links">
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                                ↗️ Live Demo
                            </a>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                ⌥ GitHub
                            </a>
                            <button
                                onClick={() => onDeleteProject(idx)}
                                className="btn-delete"
                            >
                                ✕ Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <br />
            <button onClick={onAddClick} className="btn-edit">+ Add New Project</button>
        </section>
    );
}

export default Projects;
