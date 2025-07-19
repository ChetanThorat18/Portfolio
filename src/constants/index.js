import {
  frontend,
  backend,
  aiml,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  docker,
  postgresql,
  go,
  python,
  cpp,
  aws3,
  mongodb,
  avcoe,
  awsbadge,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Cloud Enthusiast',
    icon: aws3,
  },
  {
    title: 'AI/ML Explorer',
    icon: aiml,
  },
];

const technologies = [
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Go',
    icon: go,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'C++',
    icon: cpp,
  },
  {
    name: 'PostgreSQL',
    icon: postgresql,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Docker',
    icon: docker,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'AWS',
    icon: aws3,
  },
];

const experiences = [
  {
    title: 'Full Stack Developer Intern',
    company_name: 'Sumago Infotech Pvt Ltd',
    icon: backend,
    iconBg: '#f0f0f0',
    date: 'Jan 2025 - Mar 2025',
    points: [
      'Built and deployed a Property Listing and Booking Website',
      'Implemented authentication, CRUD operations, and booking workflows',
      'Designed scalable NoSQL database schema using MongoDB',
      'Led a team of 6 developers as project coordinator',
    ],
  },
  {
    title: 'Bachelor of Engineering - Computer Science',
    company_name: 'Amrutvahini College of Engineering',
    icon: avcoe,
    iconBg: '#f0f0f0',
    date: '2021 - 2025',
    points: ['CGPA: 8.64', 'Final Year Project: Blockchain-based KYC Verification Platform'],
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    company_name: 'Amazon Web Services',
    icon: awsbadge,
    iconBg: '#f0f0f0',
    date: 'Issued: 2024',
    points: ['Score: 912/1000', 'Validated knowledge in cloud fundamentals'],
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Meet.AI',
    description:
      'A SaaS AI agent video call platform with real-time interaction, transcript generation, and AI summaries using OpenAI, Stream, and Drizzle ORM.',
    tags: [
      { name: 'next.js', color: 'blue-text-gradient' },
      { name: 'tRPC', color: 'green-text-gradient' },
      { name: 'postgresql', color: 'pink-text-gradient' },
    ],
    image: 'https://source.unsplash.com/featured/?ai,video',
    repo: 'https://github.com/ChetanThorat18/Meet-AI',
    demo: '',
  },
  {
    id: 'project-2',
    name: 'Resume Sorting using NLP',
    description:
      'A resume parser that uses NLP to classify and rank resumes based on job descriptions using spaCy, NLTK, and machine learning.',
    tags: [
      { name: 'python', color: 'blue-text-gradient' },
      { name: 'nlp', color: 'green-text-gradient' },
      { name: 'machine-learning', color: 'pink-text-gradient' },
    ],
    image: 'https://source.unsplash.com/featured/?resume,nlp',
    repo: 'https://github.com/ChetanThorat18/Resume-Parser-Using-AI',
    demo: '',
  },
  {
    id: 'project-3',
    name: 'StayFinder',
    description:
      'Property listing and booking web app built with MERN stack including full CRUD functionality and user authentication.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'node.js', color: 'green-text-gradient' },
      { name: 'mongodb', color: 'pink-text-gradient' },
    ],
    image: 'https://source.unsplash.com/featured/?realestate,booking',
    repo: 'https://github.com/ChetanThorat18/StayFinder',
    demo: '',
  },
];

export { services, technologies, experiences, projects };