import React from 'react';

function Resume({ data, onUploadClick }) {
    const handleDownload = (e) => {
        if (data.resume.url === '#') {
            e.preventDefault();
            onUploadClick();
        }
    };

    return (
        <section id="resume" className="resume">
            <h2>Resume / CV</h2>
            <p>
                Download my resume to see my full experience, education, and skills. 
                Last updated: <span className="resume-date">{data.resume.year}</span>.
            </p>
            <a 
                href={data.resume.url} 
                onClick={handleDownload}
                className="btn-download"
            >
                ↓ Download PDF
            </a>
            <button onClick={onUploadClick} className="btn-edit">Upload New</button>
        </section>
    );
}

export default Resume;
