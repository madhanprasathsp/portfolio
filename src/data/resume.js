// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: 'Madhanprasath S',
  role: 'Software developer',
  location: 'Karur, Tamil Nadu',
  email: 'madhanprasath.sp@gmail.com',
  phone: '+91 90420 30160',
  // TODO: replace with real profile URLs (the resume only had link text)
  linkedin: 'https://www.linkedin.com/in/',
  github: 'https://github.com/',
  resume: '/Madhanprasath_S_Resume.pdf',
  intro:
    'I build web apps and machine-learning tools for people the software industry tends to skip: farmers diagnosing sick crops and students learning in rural schools with patchy internet.',
  about: [
    'I finished my B.E. in Computer Science and Engineering at Hindusthan Institute of Technology, Coimbatore, in 2026. Most of my work sits where full-stack development meets applied ML: React and Node on the front and back, TensorFlow when the problem needs a model.',
    "I'm looking for a role on a team that ships real products, where I can keep learning and grow as a software engineer.",
  ],
}

export const projects = [
  {
    title: 'NabhaEdu',
    subtitle: 'Digital learning platform for rural school students',
    year: '2025 – 2026',
    badge: 'Published in JSTAR, Vol. 7, Issue 1, 2026',
    points: [
      'Offline-first app built with React Native and Firebase for school students in Nabha, Punjab, with separate dashboards for students, teachers, parents and admins.',
      'Lessons, quizzes, attendance and live progress tracking. Students keep learning offline through AsyncStorage, and their progress syncs to Firebase Realtime Database when they reconnect.',
      'Available in English and Punjabi.',
    ],
    stack: ['React Native', 'Firebase', 'AsyncStorage', 'PWA'],
  },
  {
    title: 'Crop disease detection',
    subtitle: 'Leaf-image classifier with a farmer-facing web app',
    points: [
      'CNN built with TensorFlow and Keras that identifies crop diseases from leaf photos, with over 90% validation accuracy on the PlantVillage dataset.',
      'Flask REST API serves the model. Farmers upload a photo and get a diagnosis and suggested treatment straight away.',
      'Rotation, flip and zoom augmentation helps the model handle photos taken in different light and field conditions.',
    ],
    stack: ['TensorFlow', 'Keras', 'Flask', 'Python'],
  },
  {
    title: 'Crop & livestock management system',
    subtitle: 'Full-stack platform for day-to-day farm health',
    points: [
      'Farmers log crop symptoms and get disease recommendations, so routine cases no longer need an agronomist visit.',
      'Livestock tracker for health records, vaccination schedules and feeding patterns.',
      'Live dashboard combining crop and livestock status, built on Node.js and MongoDB.',
    ],
    stack: ['Node.js', 'Express', 'MongoDB', 'React'],
  },
]

export const experience = [
  {
    role: 'Full stack web development intern',
    company: 'CT Infotech India Pvt. Ltd.',
    place: 'Karur, Tamil Nadu',
    dates: '5 – 19 July 2024',
    points: [
      'Worked on the Manufacturing Data Lake product as part of an academic internship.',
      'Built and integrated web interfaces and backend services alongside the product team.',
      'Used HTML, CSS and JavaScript with the team\'s standard tools and workflow for data-driven manufacturing apps.',
    ],
  },
]

export const skills = [
  { group: 'Languages', items: ['Python', 'Java', 'JavaScript (ES6)', 'C', 'C++', 'Haskell'] },
  { group: 'Web', items: ['React.js', 'Node.js', 'Express.js', 'REST APIs', 'HTML5', 'CSS3'] },
  { group: 'Data & backend', items: ['MongoDB', 'Mongoose', 'SQL', 'Firebase', 'JWT auth'] },
  { group: 'ML & AI', items: ['TensorFlow', 'Keras', 'scikit-learn', 'NumPy', 'Pandas', 'Flask'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'GitLab', 'Docker', 'Postman', 'Linux'] },
  { group: 'Foundations', items: ['Data structures & algorithms', 'OOP', 'Operating systems', 'DBMS', 'Computer networks', 'Agile', 'CI/CD basics', 'AWS basics'] },
]

export const education = {
  degree: 'B.E. Computer Science and Engineering',
  school: 'Hindusthan Institute of Technology, Coimbatore',
  dates: '2022 – 2026',
  cgpa: '7.49',
}

export const certifications = [
  { name: 'Machine Learning', issuer: 'Infosys Springboard' },
  { name: 'Introduction to IoT', issuer: 'NPTEL' },
  { name: 'MongoDB Introduction', issuer: 'MongoDB University' },
]
