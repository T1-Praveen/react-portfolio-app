
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    hsc,
    school,
    college,
    carrent,
    jobit,
    tripguide,
    chat,
    shirt,
    threejs,
    bootcamp, 
    responsive,
    career
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    // {
    //   id: "work",
    //   title: "Work",
    // },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Full Stack Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Blog Writer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];

  const certifications = [
    {
      name: "The complete 2023 Web Development Bootcamp",
      description:
        "In 2023, I successfully completed the comprehensive Web Development Bootcamp, gaining proficiency in essential programming languages and frameworks. This intensive training has equipped me with the skills needed to create impactful web solutions and pursue opportunities in the ever-evolving field of technology.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },
        {
          name: "express",
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
      image: bootcamp,
      // source_code_link: "https://github.com/",
    },
    {
      name: "Responsive Web Design",
      description:
        "Responsive Web Design ensures websites adapt to various screen sizes, providing a seamless user experience. By employing flexible layouts and media queries, designers create sites that look great on desktops, tablets, and mobile devices.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: responsive,
      // source_code_link: "https://github.com/",
    },
    {
      name: "TCS iON Career Edge - Young Professional",
      description:
        "TCS iON Career Edge - Young Professional program is a transformative learning experience designed to empower young individuals with essential skills and industry-relevant knowledge. Through curated courses and practical training, participants gain a competitive edge in their careers, unlocking opportunities for personal and professional growth.",
      tags: [
        {
          name: "communication-skills",
          color: "blue-text-gradient",
        },
        {
          name: " soft-skills",
          color: "green-text-gradient",
        },
        {
          name: "presentation-skills",
          color: "pink-text-gradient",
        },
      ],
      image: career,
      // source_code_link: "https://github.com/",
    }
];

  const educations = [
    {
      title: "Bachelor of Computer Applications",
      college_name: "Sindhu College of IT & Science, Degloor",
      percentage: "CGPA: 8.94",
      icon: college,
      iconBg: "#383E56",
      date: "June 2019 - May 2022",
      points: [
        "Engaged in research projects, internships, or practical experiences relevant to your field of study, gaining hands-on experience and real-world skills.",
        "Collaborated with faculty members on research initiatives or academic projects, deepening your understanding of your discipline and building professional relationships.",
        "Received recognition for outstanding academic performance, demonstrating leadership, teamwork, and creativity in your academic journey.",
        "Secured First Class with Distinction, demonstrating academic excellence and leadership in your field of study.",
      ],
    },
    {
      title: "Higher Secondary School",
      college_name: "Degloor College, Degloor",
      percentage: "Percentage: 79.54%",
      icon: hsc,
      iconBg: "#8AB4F8",
      date: "June 2019 - May 2019",
      points: [
        "Achieved commendable academic results, demonstrating proficiency in key subjects and earning recognition for outstanding performance.",
        "Participated in extracurricular activities such as sports, clubs, or cultural events, showcasing leadership, teamwork, and creative talents.",
        "Engaged in volunteer work or community service projects, contributing to the betterment of the local community and developing a sense of social responsibility.",
        "Prepared for college or university admission by taking relevant standardized tests and participating in college preparatory courses or workshops.",
      ],
    },
    {
      title: "Secondary School",
      college_name: "K.A.J.A.School, Udgir",
      percentage: "Percentage: 87.80%",
      icon: school,
      iconBg: "#383E56",
      date: "June 2017 - May 2017",
      points: [
        "Achieved excellent academic results, consistently maintaining high grades in subjects such as Mathematics, Science, Languages, and Humanities.",
        "Actively participated in extracurricular activities such as sports teams, clubs, or student organizations, demonstrating leadership and teamwork skills.",
        "Received recognition or awards for outstanding academic performance, exemplary behavior, or contributions to the school community.",
      ],
    },
  ];

  const experiences = [
    {
      title: "Web Developer",
      // company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "3D T-Shirt",
      description:
        "The 3D T-shirt Description Project challenges participants to digitally sculpt intricate T-shirt designs using advanced 3D modeling techniques. With a focus on creativity and attention to detail, this project enables the creation of captivating virtual garments that push the boundaries of traditional fashion design.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: shirt,
      source_code_link: "https://github.com/T1-Praveen",
    },
    {
      name: "Chat Application",
      description:
        "Our chat application is a seamless communication platform designed to connect users in real-time conversations. With intuitive user interface and robust backend infrastructure, it facilitates effortless messaging, file sharing, and group discussionsOur chat application is a seamless communication platform designed to connect users in real-time conversations.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: chat,
      source_code_link: "https://github.com/T1-Praveen",
    },
    // {
    //   name: "Car Rent",
    //   description:
    //     "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "mongodb",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "tailwind",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: carrent,
    //   source_code_link: "https://github.com/",
    // },
    // {
    //   name: "Job IT",
    //   description:
    //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "restapi",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "scss",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: jobit,
    //   source_code_link: "https://github.com/",
    // },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects, certifications, educations };