import React, { useState } from 'react';
import Modal from './Modal';

function EditContactModal({ isOpen, data, onClose, onSave }) {
    const [contact, setContact] = useState(data.contact);

    const handleSave = () => {
        onSave(contact);
        handleClose();
    };

    const handleClose = () => {
        setContact(data.contact);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose} title="Edit Contact">
            <div className="modal-form">
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={contact.email}
                        onChange={(e) => setContact({ ...contact, email: e.target.value })}
                        placeholder="you@email.com"
                    />
                </div>
                <div className="form-group">
                    <label>LinkedIn URL</label>
                    <input
                        type="url"
                        value={contact.linkedin}
                        onChange={(e) => setContact({ ...contact, linkedin: e.target.value })}
                        placeholder="https://linkedin.com/in/..."
                    />
                </div>
                <div className="form-group">
                    <label>GitHub URL</label>
                    <input
                        type="url"
                        value={contact.github}
                        onChange={(e) => setContact({ ...contact, github: e.target.value })}
                        placeholder="https://github.com/..."
                    />
                </div>
                <div className="form-group">
                    <label>Twitter/X URL</label>
                    <input
                        type="url"
                        value={contact.twitter}
                        onChange={(e) => setContact({ ...contact, twitter: e.target.value })}
                        placeholder="https://twitter.com/..."
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

export default EditContactModal;
