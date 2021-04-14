import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Oliver Ekwalla | Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Oliver Ekwalla.',
  subtitle: 'I am a Self-Taught, Frontend Developer Based in London.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'San Francisco.jpg',
  paragraphOne: 'I am a final-year student Chemistry student at the University of Nottingham. Whilst at University, I have self-taught HTML, CSS, JavaScript & Python. ',
  paragraphTwo: 'Throughout my time at university, I have gained extensive experience in working collaboratively, problem-solving, and public speaking through extra-curricular roles and my degree. ',
  paragraphThree: ' I enjoy building software, contributing to the open source community, and continuously learning.',
  resume: 'https://drive.google.com/file/d/1cBx7VYoxWk5k-_TyRbfmY08kcpZK9QS9/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Screenshot (2).png',
    title: 'ChemDataExtractor - Machine Learning',
    info: 'For my final year masters project, I worked in Python on a machine learning project to extract chemical information from scientific literature. ',
    info2: '',
    url: 'https://github.com/olivrrrrr/ChemDataExtractor',
    repo: 'https://github.com/olivrrrrr/ChemDataExtractor', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'oliverekwalla@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/olivrrrrcodes',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://uk.linkedin.com/in/oliver-ekwalla-148227173',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/olivrrrrr',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
