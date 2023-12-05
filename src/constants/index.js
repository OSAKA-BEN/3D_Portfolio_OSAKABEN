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
    carrent,
    jobit,
    tripguide,
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
      iconBg: "#E6DEDD",
      date: "January 2019 - August 2020",
      points: [
        "Business management for the manufacturing and supply of main panels. Financial and contractual management / purchasing and negotiations / Monitoring of production and manufacturing control / Implementation of operational excellence in a wiring workshop.",
      ],
    },
    {
      title: "Project Manager",
      company_name: "Barillec Marine",
      icon: barillec,
      iconBg: "#383E56",
      date: "September 2020 - December 2022",
      points: [
        "Project management related to purchasable electrical features (Study, equipment supply, onboard work).",
        "Design office (Complete system study: fire detection, CCTV) / Supervision of site preparation and logistics / Implementation of Lean tools and methods / Monitoring of progress and schedule management.",
        "Programming in VBA, development and application of a management tool.",
      ],
    },
    {
      title: "Project Manager",
      company_name: "O'Clock",
      icon: oclock,
      iconBg: "#E6DEDD",
      date: "January 2023 - July 2023",
      points: [
        "Project management related to purchasable electrical features (Study, equipment supply, onboard work).",
        "Design office (Complete system study: fire detection, CCTV) / Supervision of site preparation and logistics / Implementation of Lean tools and methods / Monitoring of progress and schedule management.",
        "Programming in VBA, development and application of a management tool.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { technologiesFront, technologiesBack, tools, experiences, testimonials, projects };