import React, { useState } from 'react';
import Modal from './Modal';

function UploadResumeModal({ isOpen, data, onClose, onSave }) {
    const [resume, setResume] = useState({
        url: data.resume.url,
        year: data.resume.year
    });

    const handleSave = () => {
        const newResume = { ...data.resume };
        if (resume.url.trim()) newResume.url = resume.url;
        if (resume.year.trim()) newResume.year = resume.year;
        onSave(newResume);
        handleClose();
    };

    const handleClose = () => {
        setResume({
            url: data.resume.url,
            year: data.resume.year
        });
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose} title="Upload Resume">
            <div className="modal-form">
                <div className="form-group">
                    <label>PDF URL (Google Drive, Dropbox...)</label>
                    <input
                        type="url"
                        value={resume.url}
                        onChange={(e) => setResume({ ...resume, url: e.target.value })}
                        placeholder="https://drive.google.com/..."
                    />
                </div>
                <div className="form-group">
                    <label>Last Updated Year</label>
                    <input
                        type="text"
                        value={resume.year}
                        onChange={(e) => setResume({ ...resume, year: e.target.value })}
                        placeholder="2025"
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

export default UploadResumeModal;
