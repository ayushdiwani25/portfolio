// Single source of truth for all content. Edit here, not in components.
const BASE = import.meta.env.BASE_URL;

export const SITE = {
  name: 'Aayush Divani',
  firstName: 'Aayush',
  role: 'Front-end developer · React.js specialist',
  email: 'ayushdiwani25@gmail.com',
  phone: '+91 78619 34655',
  phoneHref: 'tel:+917861934655',
  location: 'Ahmedabad, Gujarat, India',
  github: 'https://github.com/ayushdiwani25',
  linkedin: 'https://www.linkedin.com/in/aayush-patel-520204368',
  instagram: 'https://www.instagram.com/ayush_diwani_25/',
  resume: `${BASE}Aayush_Resume.pdf`,
  photo: `${BASE}profile.webp`,
  photoSmall: `${BASE}profile-sm.webp`,
  available: true,
};

export const NAV_LINKS = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export const SOCIALS = [
  { label: 'LinkedIn', href: SITE.linkedin, icon: 'linkedin' },
  { label: 'GitHub', href: SITE.github, icon: 'github' },
  { label: 'Instagram', href: SITE.instagram, icon: 'instagram' },
];

export const TICKER = ['React.js', 'Responsive UI', 'Clean systems', 'Real-world products', 'Accessible by default'];

export const STATS = [
  { value: '4', label: 'Live projects' },
  { value: '2', label: 'Internships' },
  { value: '7.84', label: 'CGPA · B.E.' },
  { value: '2+', label: 'Years coding' },
];

export const ABOUT = [
  'I\u2019m a front-end developer and final-year B.E. Computer Engineering student at Ahmedabad Institute of Technology, with hands-on internship experience building responsive, production-grade single-page applications.',
  'I work in component-based architecture, Redux Toolkit state management, REST API integration and Firebase authentication and data. I like owning a feature end to end \u2014 from UI design to deployment \u2014 and have shipped four live products doing exactly that.',
];

export const EDUCATION = [
  { degree: 'B.E. in Computer Engineering', place: 'Ahmedabad Institute of Technology (GTU), Ahmedabad', period: '2022 \u2013 2026', score: 'CGPA 7.84' },
  { degree: 'Higher Secondary (Std. 12, GSEB)', place: 'School of Science, Rajkot', period: 'Std. 12', score: '80.32 percentile' },
  { degree: 'Secondary (Std. 10, CBSE)', place: 'Shree Laxminarayan Vidya Pratishthan, kachchh', period: 'Std. 10', score: '80.60%' },
];

export const LANGUAGES = ['English', 'Hindi', 'Gujarati'];

export const PROJECTS = [
  {
    number: '01',
    title: 'FoodRush',
    type: 'Online food ordering platform',
    description:
      'A responsive single-page experience for browsing menus, managing a live cart, and checking out with a persistent session.',
    points: [
      'Modular, reusable component hierarchy for fast client-side rendering',
      'Redux Toolkit for global state, Firebase Firestore as the backend',
      'Firebase Authentication with persisted sessions',
      'Deployed on Vercel and tested across devices',
    ],
    stack: ['React.js', 'Redux Toolkit', 'TypeScript', 'Firebase', 'Framer Motion'],
    link: 'https://food-ordering-two-omega.vercel.app',
    code: SITE.github,
    label: 'foodrush / menu',
    visual: 'FR',
    headline: ['GOOD FOOD,', 'GOOD MOOD.'],
    tone: '#f06449',
  },
  {
    number: '02',
    title: 'WorkSphere',
    type: 'Real-time workflow management',
    description:
      'A collaborative workspace for organizing task pipelines, monitoring live team analytics, and managing role-based access across growing teams.',
    points: [
      'Task pipelines with real-time sync',
      'Live team analytics',
      'Role-based access control (RBAC)',
    ],
    stack: ['React.js', 'Firebase', 'Firestore', 'RBAC', 'Live analytics'],
    link: 'https://workflow-management-cc363.web.app/',
    label: 'worksphere / board',
    visual: 'WS',
    headline: ['MOVE WORK,', 'FORWARD.'],
    tone: '#e8b64c',
  },
  {
    number: '03',
    title: 'WolfSite',
    type: 'Modern brand and landing page',
    description:
      'A cinematic interactive landing page that blends 3D motion, motion graphics and storytelling into a bold creative-studio experience, with scroll-based animation.',
    points: [
      '3D scenes with Three.js',
      'Scroll-driven animation with GSAP',
      'Fully responsive layout',
    ],
    stack: ['React.js', 'Vite', 'Three.js', 'GSAP', 'Responsive UI'],
    link: 'https://wolfsite-eosin.vercel.app/',
    label: 'wolfsite / brand',
    visual: 'WS',
    headline: ['BUILD', 'ONLINE.'],
    tone: '#7fb59f',
  },
  {
    number: '04',
    title: 'ClientSites',
    type: 'Business web templates suite',
    description:
      'A responsive multi-site showcase of industry-specific, high-converting web templates with route-split architecture and fluid micro-interactions.',
    points: [
      'Route-split architecture, one template per industry',
      'Accessible design tokens',
      'Micro-interactions with Framer Motion and GSAP',
    ],
    stack: ['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
    link: 'https://client-site-demos-dyal.vercel.app/',
    label: 'clientsites / templates',
    visual: 'CS',
    headline: ['BUILD', 'BETTER.'],
    tone: '#9db3e6',
  },
];

export const EXPERIENCE = [
  {
    period: '7th Semester',
    role: 'React.js Developer Intern',
    company: 'InfoLabz IT Services Pvt. Ltd.',
    points: [
      'Applied React component architecture, props and state management to build functional UI modules.',
      'Integrated live REST APIs using JavaScript and Axios to fetch and render dynamic data.',
      'Structured fetched API data into clean, organized, user-friendly application views.',
    ],
  },
  {
    period: 'Jan 2026 \u2014 Apr 2026',
    role: 'Front-end Developer Intern',
    company: 'Maxgen Technologies Pvt. Ltd.',
    points: [
      'Built responsive, production-ready web pages using semantic HTML5, CSS3 and modular JavaScript under professional mentorship.',
      'Developed custom UI components and optimized interface styling with Tailwind CSS for consistent layouts.',
      'Debugged rendering issues and asynchronous data-state bugs to improve application stability.',
      'Managed Git and GitHub workflows, including branching and deployment tracking.',
    ],
  },
];

export const SKILLS = [
  { label: 'Languages', items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'] },
  { label: 'Frameworks', items: ['React.js', 'Redux Toolkit', 'React Router', 'Context API', 'Framer Motion', 'GSAP', 'Tailwind CSS'] },
  { label: 'Backend & data', items: ['Firebase Authentication', 'Firestore', 'REST API integration', 'Axios'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'Vite', 'Webpack', 'NPM', 'ESLint', 'Prettier', 'VS Code', 'Chrome DevTools'] },
];

export const PRACTICES = [
  'Component-based architecture',
  'State management',
  'Responsive design',
  'Cross-browser compatibility',
  'Form validation',
  'UI animation',
  'Accessibility basics',
  'Agile collaboration',
];
