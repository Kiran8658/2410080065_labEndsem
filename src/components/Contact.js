import React from 'react';

function Contact({ data, onEditClick }) {
    return (
        <section id="contact" className="contact">
            <h2>Let's Connect</h2>
            <p>Have a project or role in mind?<br />Let's build something great together.</p>
            <div className="contact-links">
                <a href={`mailto:${data.contact.email}`} className="contact-link">
                    ✉️ Email Me
                </a>
                <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                    in LinkedIn
                </a>
                <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className="contact-link">
                    ⌥ GitHub
                </a>
                <a href={data.contact.twitter} target="_blank" rel="noopener noreferrer" className="contact-link">
                    𝕏 Twitter
                </a>
            </div>
            <button onClick={onEditClick} className="btn-edit">Edit Contact Links</button>
        </section>
    );
}

export default Contact;
