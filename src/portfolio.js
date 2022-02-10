const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://Navaneet.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Navaneet Harish Chitrapur',
  role: 'Aspiring Full Stack Web Developer',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: '../public/resume/fw13_080_Navaneet_H_Chitrapur.docx (1).pdf',
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
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'PluralSight',
    description:
      'A learning website which includes major programming languages',
    stack: ['HTML', 'JavaScript', 'BootStrap', 'CSS'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
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
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'navni.hari@gmail.com',
}

export { header, about, projects, skills, contact }
