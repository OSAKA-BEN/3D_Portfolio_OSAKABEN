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
    chezg,
    bonheurenb,
    oworld,
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
  
  
  const projects = [
    {
      name: "Site Application",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "Excel",
        },
        {
          name: "VBA",
        },
      ],
      image: figma,
    },
    {
      name: "Chez G",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
        },
        {
          name: "restapi",
        },
        {
          name: "scss",
        },
      ],
      image: chezg,
      source_code_link: "https://github.com/OSAKA-BEN/Restaurant-jerome",
    },
    {
      name: "O'World",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "React",
        },
        {
          name: "supabase",
        },
        {
          name: "css",
        },
      ],
      image: oworld,
      source_code_link: "https://github.com/O-clock-Starship/projet-05-o-world-front",
    },
    {
      name: "Bonheurs en B",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "React",
        },
        {
          name: "Vite",
        },
        {
          name: "TailwindCSS",
        },
      ],
      image: bonheurenb,
      source_code_link: "https://github.com/OSAKA-BEN/Bonheur-en-b",
    },
    {
      name: "In Progress...",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "Figma",
        },
      ],
      image: figma,
      source_code_link: "",
    },
  ];
  
  export { technologiesFront, technologiesBack, tools, experiences, projects };