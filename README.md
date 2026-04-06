# My Portfolio Website

A modern, responsive portfolio website built with React, React Router, and Tailwind CSS.

## Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI** - Built with Tailwind CSS for beautiful styling
- **Multiple Pages** - Home, About, Projects, Skills, Experience, and Contact pages
- **Smooth Navigation** - React Router for client-side routing
- **Contact Form** - Functional contact form for visitors to reach out
- **Icons** - Lucide React icons for beautiful UI elements

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx    # Main navigation bar
│   └── Footer.jsx        # Footer component with links
├── pages/
│   ├── Home.jsx          # Landing page
│   ├── About.jsx         # About you
│   ├── Projects.jsx      # Your projects/portfolio
│   ├── Skills.jsx        # Your technical skills
│   ├── Experience.jsx    # Work experience & education
│   └── Contact.jsx       # Contact form & information
├── App.jsx               # Main app with routing
├── index.css             # Global styles with Tailwind
└── main.jsx              # Entry point
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization Guide

### 1. Update Personal Information

**Home Page** (`src/pages/Home.jsx`)
- Change "YN" initials to your own
- Update the tagline and description

**About Page** (`src/pages/About.jsx`)
- Replace placeholder image: `https://via.placeholder.com/400x300`
- Update your bio and journey sections

**Navigation & Footer** (`src/components/Navigation.jsx` & `Footer.jsx`)
- Update your name/logo
- Change social media links
- Update contact information

### 2. Add Your Projects

Edit `src/pages/Projects.jsx`:
```jsx
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    github: 'https://github.com/yourusername/project',
    live: 'https://your-project.com',
    image: 'path/to/image.jpg'
  },
  // Add more projects...
];
```

### 3. Update Your Skills

Edit `src/pages/Skills.jsx`:
- Modify skill categories and add/remove skills
- Adjust proficiency levels in the progress bars

### 4. Update Your Experience

Edit `src/pages/Experience.jsx`:
- Add your work experience entries
- Update company names, positions, and descriptions
- Add education information

### 5. Configure Contact Form

Edit `src/pages/Contact.jsx`:
- Update your email, phone, and location
- Connect to an email service (e.g., EmailJS, Formspree)
- Update social media links

### 6. Customize Colors

Edit `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',    // Change primary color
      secondary: '#1E40AF',  // Change secondary color
    }
  },
}
```

### 7. Replace Placeholder Images

All images are using placeholder URLs. Replace them with your own:
- Profile photo in About page
- Project screenshots in Projects page

## Technology Stack

- **React 18+** - UI library
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server
- **Lucide React** - Icon library

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint (if configured)

## Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Or connect your GitHub repo for automatic deployments

### Deploy to GitHub Pages

Update `vite.config.js`:
```js
export default {
  base: '/your-repo-name/',
  // ... rest of config
}
```

Then build and deploy using GitHub Actions or similar.

## Tips for Success

1. **Keep it Simple** - Focus on highlighting your best work
2. **Update Regularly** - Keep your portfolio current
3. **Optimize Images** - Use compressed images for faster loading
4. **Mobile First** - Test on mobile devices frequently
5. **SEO** - Add meta tags and descriptions for better visibility
6. **Analytics** - Consider adding Google Analytics

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, feel free to reach out or check the documentation for the libraries used.

---

Happy showcasing! 🚀
