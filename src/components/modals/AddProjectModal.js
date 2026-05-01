import React, { useState } from 'react';
import Modal from './Modal';

function AddProjectModal({ isOpen, onClose, onSave }) {
    const [project, setProject] = useState({
        title: '',
        desc: '',
        tech: '',
        live: '',
        github: '',
        emoji: '🚀'
    });

    const handleSave = () => {
        if (!project.title.trim()) {
            alert('Please enter a title.');
            return;
        }
        onSave({
            title: project.title,
            desc: project.desc,
            tech: project.tech.split(',').map(s => s.trim()).filter(Boolean),
            live: project.live,
            github: project.github,
            emoji: project.emoji
        });
        handleClose();
    };

    const handleClose = () => {
        setProject({
            title: '',
            desc: '',
            tech: '',
            live: '',
            github: '',
            emoji: '🚀'
        });
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose} title="Add Project">
            <div className="modal-form">
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        value={project.title}
                        onChange={(e) => setProject({ ...project, title: e.target.value })}
                        placeholder="My Awesome App"
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        value={project.desc}
                        onChange={(e) => setProject({ ...project, desc: e.target.value })}
                        placeholder="What does it do?"
                    />
                </div>
                <div className="form-group">
                    <label>Tech Stack (comma separated)</label>
                    <input
                        type="text"
                        value={project.tech}
                        onChange={(e) => setProject({ ...project, tech: e.target.value })}
                        placeholder="React, Node.js, MongoDB"
                    />
                </div>
                <div className="form-group">
                    <label>Live Demo URL</label>
                    <input
                        type="url"
                        value={project.live}
                        onChange={(e) => setProject({ ...project, live: e.target.value })}
                        placeholder="https://myapp.vercel.app"
                    />
                </div>
                <div className="form-group">
                    <label>GitHub URL</label>
                    <input
                        type="url"
                        value={project.github}
                        onChange={(e) => setProject({ ...project, github: e.target.value })}
                        placeholder="https://github.com/you/repo"
                    />
                </div>
                <div className="form-group">
                    <label>Emoji Icon</label>
                    <input
                        type="text"
                        value={project.emoji}
                        onChange={(e) => setProject({ ...project, emoji: e.target.value })}
                        placeholder="🚀"
                        maxLength="4"
                    />
                </div>
                <div className="modal-buttons">
                    <button onClick={handleSave} className="btn-save">Add Project</button>
                    <button onClick={handleClose} className="btn-cancel">Cancel</button>
                </div>
            </div>
        </Modal>
    );
}

export default AddProjectModal;
