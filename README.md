# Portfolio Website - React

A modern, fully-functional portfolio website built with React featuring editable sections, project management, and localStorage persistence.

## Features

✨ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
📝 **Editable Sections** - Edit your hero name, tagline, about content, and more
🎨 **Dark Theme** - Modern dark UI with cyan accents
💾 **Data Persistence** - All changes saved to browser localStorage
🚀 **Project Management** - Add, delete, and manage your projects
📊 **Skill Showcase** - Organize skills by category (Frontend, Backend, Tools & Design)
📄 **Resume Support** - Upload and link your resume/CV
🔗 **Social Links** - Links to email, LinkedIn, GitHub, and Twitter

## Project Structure

```
src/
├── components/
│   ├── Navigation.js
│   ├── Hero.js
│   ├── About.js
│   ├── Skills.js
│   ├── Projects.js
│   ├── Resume.js
│   ├── Contact.js
│   ├── Footer.js
│   └── modals/
│       ├── Modal.js
│       ├── EditInfoModal.js
│       ├── EditAboutModal.js
│       ├── EditSkillsModal.js
│       ├── AddProjectModal.js
│       ├── UploadResumeModal.js
│       └── EditContactModal.js
├── utils/
│   └── dataManager.js
├── styles/
│   └── App.css
├── App.js
└── index.js
public/
└── index.html
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

## Available Scripts

### `npm start`
Runs the app in development mode.

### `npm build`
Builds the app for production to the `build` folder.

### `npm test`
Launches the test runner in interactive watch mode.

## How to Use

1. **Edit Hero Section** - Click the "✎ Edit Info" button to edit your name and tagline
2. **Edit About Section** - Click "Edit About Me" to modify about paragraphs and stats
3. **Add Skills** - Click "+ Add / Edit Skills" to manage your tech stack
4. **Add Projects** - Click "+ Add New Project" to showcase your work
5. **Upload Resume** - Click "Upload New" to link your resume PDF
6. **Edit Contact** - Click "Edit Contact Links" to update your social profiles

All changes are automatically saved to your browser's localStorage and persist across sessions.

## Customization

### Change Colors

Edit the color values in `src/styles/App.css`. The main color theme is:
- Primary: `#00d4ff` (Cyan)
- Dark Background: `#0f0f0f`
- Light Text: `#e0e0e0`

### Update Default Data

Modify `src/utils/dataManager.js` to change the default portfolio data including:
- Name and tagline
- About paragraphs
- Skills categories
- Sample projects
- Contact information

## Building for Production

```bash
npm run build
```

Creates a production-ready build in the `build` folder, optimized and minified.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- React 18
- CSS3 (with Flexbox and Grid)
- localStorage API
- ES6+ JavaScript

## License

This project is open source and available under the MIT License.

## Author

Built with ❤️ for web developers and designers.
