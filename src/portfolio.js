const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://Navaneet.github.io/portfolio',
  title: 'NC.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Navaneet Chitrapur',
  role: 'Aspiring Full Stack Web Developer',
  description:
    'Observant and detail-oriented aspiring full-stack developer with a specialization in MERN stack. Self- motivated  and  curious,  with  a  keen  interest  in  building user-centric products. Looking forward to utilizing my skills in a challenging work environment..',
  resume: 'https://drive.google.com/file/d/1brrGEh-9RbfUzTJYJv2hQdbI2PVUw4Z0/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/navaneet-h-c-6602b71b4/',
    github: 'https://github.com/Navaneet1999',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Pull&Bear',
    description:
      'A website used for buying Cloaths and accessories',
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/Navaneet1999/Pull-Bear',
    livePreview: 'https://drive.google.com/file/d/1xwSaPBa7UYF91NLBQ_C8dO8UuczrQQHB/view?usp=sharing',
    imageBag: 'https://static.pullandbear.net/2/static2/itxwebstandard/images/worldwide/background.jpg?20220213023001',
  },
  {
    name: 'PluralSight',
    description:
      'A learning website which includes major programming languages',
    stack: ['HTML', 'JavaScript', 'BootStrap', 'CSS'],
    sourceCode: 'https://github.com/nawaz2508/Pluralsight',
    livePreview: 'https://pluralsiteclone.netlify.app/',
    imageBag: 'https://www.pluralsight.com/content/dam/pluralsight2/homepage/Cloud-labs-image2x.png',
  },
  // {
  //   name: 'Project 3',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'BootStrap',
  'Postman',
  'Git',
  'MongoDB',
  'Node.js',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'navni.hari@gmail.com',
  phone: '9482125826',
  linkdn: 'Navaneet h c',
  github: 'Navaneet1999',
}

export { header, about, projects, skills, contact}
