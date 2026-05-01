import React, { useState, useEffect } from 'react';
import { loadData, saveData } from './utils/dataManager';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EditInfoModal from './components/modals/EditInfoModal';
import EditAboutModal from './components/modals/EditAboutModal';
import EditSkillsModal from './components/modals/EditSkillsModal';
import AddProjectModal from './components/modals/AddProjectModal';
import UploadResumeModal from './components/modals/UploadResumeModal';
import EditContactModal from './components/modals/EditContactModal';

function App() {
    const [data, setData] = useState(loadData());
    const [modals, setModals] = useState({
        editName: false,
        editAbout: false,
        editSkills: false,
        addProject: false,
        uploadResume: false,
        editContact: false
    });

    useEffect(() => {
        saveData(data);
    }, [data]);

    const openModal = (modalName) => {
        setModals(prev => ({ ...prev, [modalName]: true }));
    };

    const closeModal = (modalName) => {
        setModals(prev => ({ ...prev, [modalName]: false }));
    };

    return (
        <div className="app">
            <Navigation data={data} />
            
            <Hero data={data} onEditClick={() => openModal('editName')} />
            <About data={data} onEditClick={() => openModal('editAbout')} />
            <Skills data={data} onEditClick={() => openModal('editSkills')} />
            <Projects data={data} onAddClick={() => openModal('addProject')} onDeleteProject={(index) => {
                const newData = { ...data };
                newData.projects.splice(index, 1);
                setData(newData);
            }} />
            <Resume data={data} onUploadClick={() => openModal('uploadResume')} />
            <Contact data={data} onEditClick={() => openModal('editContact')} />
            
            <button 
                className="edit-info-btn"
                onClick={() => openModal('editName')}
            >
                ✎ Edit Info
            </button>

            <EditInfoModal
                isOpen={modals.editName}
                data={data}
                onClose={() => closeModal('editName')}
                onSave={(name, tagline) => {
                    setData({ ...data, name, tagline });
                    closeModal('editName');
                }}
            />

            <EditAboutModal
                isOpen={modals.editAbout}
                data={data}
                onClose={() => closeModal('editAbout')}
                onSave={(about, stats) => {
                    setData({ ...data, about, stats });
                    closeModal('editAbout');
                }}
            />

            <EditSkillsModal
                isOpen={modals.editSkills}
                data={data}
                onClose={() => closeModal('editSkills')}
                onSave={(skills) => {
                    setData({ ...data, skills });
                    closeModal('editSkills');
                }}
            />

            <AddProjectModal
                isOpen={modals.addProject}
                onClose={() => closeModal('addProject')}
                onSave={(project) => {
                    setData({
                        ...data,
                        projects: [...data.projects, project]
                    });
                    closeModal('addProject');
                }}
            />

            <UploadResumeModal
                isOpen={modals.uploadResume}
                data={data}
                onClose={() => closeModal('uploadResume')}
                onSave={(resume) => {
                    setData({ ...data, resume });
                    closeModal('uploadResume');
                }}
            />

            <EditContactModal
                isOpen={modals.editContact}
                data={data}
                onClose={() => closeModal('editContact')}
                onSave={(contact) => {
                    setData({ ...data, contact });
                    closeModal('editContact');
                }}
            />

            <Footer />
        </div>
    );
}

export default App;
