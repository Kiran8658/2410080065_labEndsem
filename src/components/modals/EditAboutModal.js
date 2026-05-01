import React, { useState } from 'react';
import Modal from './Modal';

function EditAboutModal({ isOpen, data, onClose, onSave }) {
    const [about, setAbout] = useState(data.about);
    const [stats, setStats] = useState(data.stats);

    const handleSave = () => {
        onSave(about, stats);
        setAbout(data.about);
        setStats(data.stats);
    };

    const handleClose = () => {
        setAbout(data.about);
        setStats(data.stats);
        onClose();
    };

    const handleAboutChange = (idx, value) => {
        const newAbout = [...about];
        newAbout[idx] = value;
        setAbout(newAbout);
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose} title="Edit About">
            <div className="modal-form">
                <div className="form-group">
                    <label>Paragraph 1</label>
                    <textarea
                        value={about[0] || ''}
                        onChange={(e) => handleAboutChange(0, e.target.value)}
                        style={{ height: '70px' }}
                    />
                </div>
                <div className="form-group">
                    <label>Paragraph 2</label>
                    <textarea
                        value={about[1] || ''}
                        onChange={(e) => handleAboutChange(1, e.target.value)}
                        style={{ height: '70px' }}
                    />
                </div>
                <div className="form-group">
                    <label>Paragraph 3</label>
                    <textarea
                        value={about[2] || ''}
                        onChange={(e) => handleAboutChange(2, e.target.value)}
                        style={{ height: '70px' }}
                    />
                </div>
                <div className="form-group">
                    <label>Projects Built</label>
                    <input
                        type="text"
                        value={stats.projects}
                        onChange={(e) => setStats({ ...stats, projects: e.target.value })}
                        placeholder="10+"
                    />
                </div>
                <div className="form-group">
                    <label>Technologies</label>
                    <input
                        type="text"
                        value={stats.tech}
                        onChange={(e) => setStats({ ...stats, tech: e.target.value })}
                        placeholder="15+"
                    />
                </div>
                <div className="form-group">
                    <label>Years Learning</label>
                    <input
                        type="text"
                        value={stats.exp}
                        onChange={(e) => setStats({ ...stats, exp: e.target.value })}
                        placeholder="2+"
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

export default EditAboutModal;
