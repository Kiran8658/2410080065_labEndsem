import React, { useState } from 'react';
import Modal from './Modal';

function EditSkillsModal({ isOpen, data, onClose, onSave }) {
    const [skills, setSkills] = useState(data.skills);

    const handleSave = () => {
        onSave(skills);
        setSkills(data.skills);
    };

    const handleClose = () => {
        setSkills(data.skills);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose} title="Edit Skills">
            <div className="modal-form">
                <div className="form-group">
                    <label>Frontend (comma separated)</label>
                    <input
                        type="text"
                        value={skills.frontend.join(', ')}
                        onChange={(e) => setSkills({
                            ...skills,
                            frontend: e.target.value.split(',').map(s => s.trim()).filter(Boolean)
                        })}
                        placeholder="HTML5, React, ..."
                    />
                </div>
                <div className="form-group">
                    <label>Backend (comma separated)</label>
                    <input
                        type="text"
                        value={skills.backend.join(', ')}
                        onChange={(e) => setSkills({
                            ...skills,
                            backend: e.target.value.split(',').map(s => s.trim()).filter(Boolean)
                        })}
                        placeholder="Node.js, Python, ..."
                    />
                </div>
                <div className="form-group">
                    <label>Tools & Design (comma separated)</label>
                    <input
                        type="text"
                        value={skills.tools.join(', ')}
                        onChange={(e) => setSkills({
                            ...skills,
                            tools: e.target.value.split(',').map(s => s.trim()).filter(Boolean)
                        })}
                        placeholder="Figma, Git, ..."
                    />
                </div>
                <div className="modal-buttons">
                    <button onClick={handleSave} className="btn-save">Save</button>
                    <button onClick={handleClose} className="btn-cancel">Cancel</button>
                </div>
            </div>
        </Modal>
    );
}

export default EditSkillsModal;
