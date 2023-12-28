import {
    javascript,
    reactjs,
    tailwind,
    nodejs,
    typescript,
    redux,
    redis,
    postgresql,
    sequelize,
    git,
    figma,
    snef,
    barillec,
    oclock,
    appchantier,
    chezg,
    bonheurenb,
    oworld,
    risingsun,
    youtube,
    excel,
    chartjs,
    framermotion,
    css,
    vba,
    vite,
    siteapp,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const technologiesFront = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Typescript",
      icon: typescript,
    },
    {
      name: "Redux",
      icon: redux,
    },
  ];

  const technologiesBack = [
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "PostgreSQL",
      icon: postgresql,
    },
    {
      name: "Sequelize",
      icon: sequelize,
    },
    {
      name: "Redis",
      icon: redis,
    },
  ];

  const tools = [
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Business Manager",
      company_name: "Groupe SNEF",
      icon: snef,
      company_url: "https://www.snef.fr/",
      iconBg: "#E6DEDD",
      date: "September 2014 - December 2016",
      points: [
        "Business management for the study and installation services of pneumatic valve control.",
        "Design and industrialization of the installation / Financial and contractual management / Purchasing / Site supervision and management.",
        "Training for Egyptian clients as part of the Transfert of Technology / Supply Chain management in the context of the Transfer of Technology to the Egyptian shipyard.",
      ],
    },
    {
      title: "Construction Manager",
      company_name: "Groupe SNEF",
      icon: snef,
      company_url: "https://www.snef.fr/",
      iconBg: "#E6DEDD",
      date: "January 2017 - February 2018",
      points: [
        "Planning, organizing, and leading a team of 70 people for electrical assembly services (purchasable functions covering the areas of studies, procurement, assembly, and testing).",
        "Supervision of attachment and hull lining assembly works, equipment installation, cable pulling, termination, control, and testing.",
        "Acceptance of premises with the Moroccan naval client and PIRIOU. Bureau Veritas validation.",
      ],
    },
    {
      title: "Business Manager",
      company_name: "Groupe SNEF",
      icon: snef,
      company_url: "https://www.snef.fr/",
      iconBg: "#E6DEDD",
      date: "January 2019 - August 2020",
      points: [
        "Business management for the manufacturing and supply of main panels. Financial and contractual management / purchasing and negotiations / Monitoring of production and manufacturing control / Implementation of operational excellence in a wiring workshop.",
      ],
    },
    {
      title: "Video Maker",
      company_name: "Youtube",
      icon: youtube,
      company_url: "https://youtu.be/aBgMCxI-r_c",
      iconBg: "#E6DEDD",
      date: "Take a look at my past experience",
      points: [
        "I took the photos and videos during the construction site and edited the video.",
        "It was a great experience to learn how to use Adobe Premiere Pro.",
      ],
    },
    {
      title: "Project Manager",
      company_name: "Barillec Marine",
      icon: barillec,
      company_url: "https://www.barillec-marine.com/",
      iconBg: "#383E56",
      date: "September 2020 - December 2022",
      points: [
        "Project management related to purchasable electrical features (Study, equipment supply, onboard work).",
        "Design office (Complete system study: fire detection, CCTV) / Supervision of site preparation and logistics / Implementation of Lean tools and methods / Monitoring of progress and schedule management.",
        "Programming in VBA, development and application of a management tool.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "O'Clock",
      icon: oclock,
      company_url: "https://oclock.io/",
      iconBg: "#E6DEDD",
      date: "January 2023 - July 2023",
      points: [
        "A program allowing training in essential technologies in the field, with a focus on JavaScript, a language highly appreciated for its flexibility and the great richness of its ecosystem.",
        "HTML, CSS, JavaScript, React, Node.js, Express, PostgreSQL, Sequelize, Git.",
        "Challenges every day to be completed independently, peer programming session and an project to be done as a team at the end of the training and to be presented in front of a jury.",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Site Application",
      description:
        "This application developed under VBA makes it possible to process all site data and provide a site management tool. It allows to prepare work, update progress and measure efficiency for the financial monitoring.",
      tags: [
        {
          name: "Excel",
          icon: excel,
        },
        {
          name: "VBA",
          icon: vba,
        },
      ],
      image: appchantier,
      url_site: siteapp,
    },
    {
      name: "Chez G",
      description:
        "A showcase site developed to train me on React. It allows you to present the restaurant, the menu, the services and the contact details.",
      tags: [
        {
          name: "React",
          icon: reactjs,
        },
        {
          name: "Css",
          icon: css,
        },
      ],
      image: chezg,
      source_code_link: "https://github.com/OSAKA-BEN/chezg",
      url_site: "https://chezg.vercel.app/",
    },
    {
      name: "O'World",
      description:
        "This application offers an immersive experience to explore and discover varied information about the planets and different countries of the world",
      tags: [
        {
          name: "React",
          icon: reactjs,
        },
        {
          name: "Vite",
          icon: vite,
        },
        {
          name: "TailwindCSS",
          icon: tailwind,
        },
        {
          name: "ChartJS",
          icon: chartjs,
        },
        {
          name: "Framer Motion",
          icon: framermotion,
        },
        {
          name: "Redux",
          icon: redux,
        },
        {
          name: "Redis",
          icon: redis,
        },
      ],
      image: oworld,
      source_code_link: "https://github.com/O-clock-Starship/projet-05-o-world-front",
      url_site: "https://oworld.space/",
    },
    {
      name: "Bonheurs en B",
      description:
        "Showcase site created to present a client's lodgings and present the activities of the region.",
      tags: [
        {
          name: "React",
          icon: reactjs,
        },
        {
          name: "Vite",
          icon: vite,
        },
        {
          name: "TailwindCSS",
          icon: tailwind,
        },
      ],
      image: bonheurenb,
      source_code_link: "https://github.com/OSAKA-BEN/Bonheur-en-b",
      url_site: "https://bonheur-en-b.vercel.app/",
    },
    {
      name: "In Progress...",
      description:
        "An e-learning platform for learning Japanese online with real monitoring of the user's progress.",
      tags: [
        {
          name: "Figma",
          icon: figma,
        },
      ],
      image: risingsun,
      source_code_link: "",
      url_site: "",
    },
  ];
  
  export { technologiesFront, technologiesBack, tools, experiences, projects };