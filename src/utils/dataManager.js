export const defaultData = {
    name: 'Kumbhar Kiran',
    tagline: 'Developer & Designer',
    about: [
        "I'm a passionate developer and designer with a love for building things that live on the internet. I focus on writing clean, efficient code and creating seamless user experiences.",
        "Currently pursuing my degree and actively seeking opportunities where I can contribute, learn, and grow within a team of talented engineers and designers.",
        "When I'm not coding, you'll find me exploring new design trends, contributing to open source, or experimenting with side projects."
    ],
    stats: { projects: '5+', tech: '5+', exp: 'Fresher' },
    skills: {
        frontend: ['HTML', 'JavaScript', 'React', 'Tailwind', 'TypeScript'],
        backend: ['Node.js', 'Express', 'Python', 'MongoDB', 'PostgreSQL', 'REST APIs'],
        tools: ['Figma', 'Git', 'GitHub', 'VS Code', 'Framer', 'Adobe XD']
    },
    projects: [
        { 
            title: 'E-Commerce Platform', 
            desc: 'Full-stack shopping platform with cart, auth, and Stripe payment integration.', 
            tech: ['React', 'Node.js', 'MongoDB', 'Stripe'], 
            live: '#', 
            github: '#', 
            emoji: '🛒' 
        },
        { 
            title: 'Real-time Chat App', 
            desc: 'Chat rooms with real-time messaging via WebSockets and a clean minimal UI.', 
            tech: ['Socket.io', 'React', 'Express'], 
            live: '#', 
            github: '#', 
            emoji: '💬' 
        },
        { 
            title: 'Analytics Dashboard', 
            desc: 'Interactive data dashboard with live charts, filters, and dark mode.', 
            tech: ['React', 'Recharts', 'Figma'], 
            live: '#', 
            github: '#', 
            emoji: '📊' 
        }
    ],
    resume: { url: '#', year: '2025' },
    contact: { 
        email: 'you@email.com', 
        linkedin: 'https://linkedin.com', 
        github: 'https://github.com', 
        twitter: 'https://twitter.com' 
    }
};

export const saveData = (data) => {
    localStorage.setItem('portfolioData', JSON.stringify(data));
};

export const loadData = () => {
    try {
        const data = JSON.parse(localStorage.getItem('portfolioData'));
        if (data && typeof data === 'object') {
            // Migrate old data to new defaults
            return { ...defaultData, ...data, name: 'Kumbhar Kiran' };
        }
    } catch (e) {
        console.error('Error loading data:', e);
    }
    return defaultData;
};
