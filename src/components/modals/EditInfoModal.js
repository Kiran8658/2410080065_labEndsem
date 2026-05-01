import React, { useState } from 'react';
import Modal from './Modal';

function EditInfoModal({ isOpen, data, onClose, onSave }) {
    const [name, setName] = useState(data.name);
    const [tagline, setTagline] = useState(data.tagline);

    const handleSave = () => {
        onSave(name, tagline);
        setName(data.name);
        setTagline(data.tagline);
    };

    const handleClose = () => {
        setName(data.name);
        setTagline(data.tagline);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose} title="Edit Hero">
            <div className="modal-form">
                <div className="form-group">
                    <label>Full Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Gerapati Venkat Akhil"
                    />
                </div>
                <div className="form-group">
                    <label>Tagline</label>
                    <input
                        type="text"
                        value={tagline}
                        onChange={(e) => setTagline(e.target.value)}
                        placeholder="Developer & Designer"
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

export default EditInfoModal;
