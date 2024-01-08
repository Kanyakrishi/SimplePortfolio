// Common Styles 
import styled from "styled-components";
import travelDiariesImage from "./Traveldiaries.png"
import aml from "./aml.png";
import airbnb from "./airbnb.png";
import cc from "./cc.png";
import hgr from "./hgr.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 50px 50px;
`;

export const Title = styled.div`
  font-size: 34px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 16px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 14px;
  }
`;


export const Bio = {
  name: "Kanya Krishi",
  roles: ["Software Engineer"],
  description:
    "Driven by a deep passion for technology and a relentless pursuit of innovation, my career has been a journey through various roles, including backend development, full-stack engineering, and technical leadership. Embracing each position, I've honed a diverse skill set, from hands-on coding to strategic team guidance. These roles have not only expanded my technical expertise but also underscored the value of collaboration. My ambition is to leverage this blend of technical acumen and teamwork to make a substantial impact as a software engineer.",
  github: "https://github.com/KanyaKrishi",
  resume:
    "https://drive.google.com/drive/folders/1U7YtNHzrGklYpi4_whtUFRVum4JmNXS3?usp=sharing",
  linkedin: "https://www.linkedin.com/in/kanya-krishi14/",
  mail: "mailto:kanyakrishi@gmail.com",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
      },
      {
        name: "Vue",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg",
      },
      {
        name: "HTML",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
      },
      {
        name: "JavaScript",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "Bootstrap",
        image: "https://static.cdnlogo.com/logos/b/50/bootstrap.svg",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Java",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
      },
      {
        name: "Python",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
      },
      {
        name: "C#",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
      },
      {
        name: "Node Js",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
      },
      {
        name: "Spring Boot",
        image:
          "data:image/jpeg;base64,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",
      },
      {
        name: "Flask",
        image: "https://static.cdnlogo.com/logos/f/50/flask.svg",
      },
      {
        name: "MySQL",
        image: "https://static.cdnlogo.com/logos/m/10/mysql.svg",
      },
      {
        name: "Postgresql",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg",
      },
      {
        name: "MongoDB",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "Graph Ql",
        image: "https://static.cdnlogo.com/logos/g/23/graphql.svg",
      },
    ],
  },
  {
    title: "DevOps",
    skills: [
      {
        name: "Docker",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "AWS",
        image: "https://static.cdnlogo.com/logos/a/19/aws.svg",
      },
      {
        name: "Kafka",
        image: "https://static.cdnlogo.com/logos/k/35/kafka.svg",
      },
      {
        name: "Kubernetes",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
      },
      {
        name: "GitHub",
        image: "https://static.cdnlogo.com/logos/g/31/github.svg",
      },
      {
        name: "Jenkins",
        image: "https://static.cdnlogo.com/logos/j/95/jenkins.svg",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOkTExWNmWSQ9GeZ1XjljcrKQbNSZ0dCalE_p_bIU34Q&s",
    role: "Software Engineer Intern",
    company: "Nasdaq",
    date: "Jun 2023 - Aug 2023",
    desc: [
      "Independently built a Vue.js based full-stack tool for grouping 100+ firms and integrated Elasticsearch for data retrieval.",
      "Empowered investors to benchmark peers and competitors efficiently enhancing investment intelligence by 30%.",
      "Developed backend with C# & PostgreSQL scripts to handle complex queries for a finance-intensive application.",
    ],
    skills: ["C#", "Vue.js", "PostgreSQL"],
    link: "https://www.linkedin.com/pulse/nasdaq-internship-kanya-krishi/",
    doc: "",
  },

  {
    id: 1,
    img: "https://www.nokia.com/sites/default/files/styles/scale_1440_no_crop/public/2023-02/nokia-refreshed-logo-2_1.png.webp",
    role: "Senior Software Developer",
    company: "Nokia",
    date: "Jul 2019 - July 2022",
    desc: [
      "Spearheaded end-to-end development of 5G mMIMO to enhance network scalability and sales by 40%.",
      "Enhanced 5G network slicing by revamping cloud architecture with Java, Spring Boot, and Kafka, leveraged Docker and Kubernetes for scalable, cloud-native solutions, aligning with distributed systems and large-scale data handling needs.",
      "Boosted multi-vendor module performance and accuracy by optimizing key components with Python and NoSQL databases, while also offering technical mentorship to collaborative teams.",
      "Collaborated on a Python based advanced polygon creation algorithm by enhancing detection of high-impact network cells thereby contributing to efficient network performance and real-time data processing.",
      "Expertise in writing technical documentation and drafting technical specification for 5G / 4G features.",
      "Implemented a weather optimization module for improving network coverage as a part of 2-person innovation team.",
      "Automated test cases to validate feature functionality against technical requirements, adopted test driven development practices to ensure code reliability. Proficient in implementing CI/CD pipelines using Jenkins.",
      "Excelled in a leadership role as Scrum Master for an Agile team of 7, overseeing project developments, enhancing team collaboration, and ensuring effective stakeholder communication.",
    ],
    skills: ["Python", "Java", "SpringBoot", "Docker", "Kubernetes", "NoSQL"],
  },
  {
    id: 2,
    img: "https://www.nokia.com/sites/default/files/styles/scale_1440_no_crop/public/2023-02/nokia-refreshed-logo-2_1.png.webp",
    role: "Software Engineer Intern",
    skills: ["Flask", "MongoDB","HTML", "CSS", "Jenkins", "Agile"],
    company: "Nokia",
    date: "Jan 2019 - Jun 2019",
    desc: [
      "Built full-stack web application using Flask & MongoDB to automate module testing and to analyze performance.", "Played a key role in an Agile development team, practicing continuous integration and deployment (CI/CD), and contributing to end-to-end (E2E) feature demonstrations for stakeholders."],
    doc: "https://media.licdn.com/dms/image/D4D22AQGzSpgFaR4hsQ/feedshare-shrink_800/0/1684079632872?e=1687996800&v=beta&t=i0xWn_k32Oj9SxKfc6rARSbOghXD9Ge6WyEb2p2vvrc",
  },

  {
    id: 4,
    img: "data:image/jpeg;base64,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",
    role: "Student  Intern",
    company: "PDA Trade Fairs",
    date: "Jan 2018 - Feb 2018",
    skills: ["PHP", "MySQL", "JavaScript", "Data Analysis"],
    desc: [
      "Independently designed a scalable full-stack DataSoftware that restructured communication flow and reduced manual work by 50% through improved data entry processes and efficient data analysis.", "Developed the system using PHP, MySQL, JavaScript, focusing on responsive UI and efficient backend interaction."
    ],
    doc: "https://firebasestorage.googleapis.com/v0/b/buckoid-917cf.appspot.com/o/WhatsApp%20Image%202023-05-05%20at%2012.07.39%20AM.jpeg?alt=media&token=9f0e1648-568b-422d-bd0b-1f125f722245",
  },
];


export const projects = [
  {
    id: 12,
    title:
      "Anti-Money Laundering Analysis using Large Language Models and ML Algorithms",
    date: "Nov 2023",
    description:
      "Incorporated GPT-3.5 Turbo, PaLM & Retrieval Augmented Generation to identify transaction patterns and anomalies. Analyzed challenges and transformative potentials of LLMs in relation to the IBM Anti-Money Laundering dataset. Compared performance with other ML algorithms.",
    github: "https://github.com/Kanyakrishi/LLMs",
    category: "machine learning",
    tags: ["Python", "OpenAI", "LLM", "Machine Learning Models"],
    image: aml,
    webapp: "",
  },
  {
    id: 9,
    title: "CareerCompass",
    date: "Jun 2023",
    description:
      "Developed a cross-platform mobile application to simplify job searches. Integrated RapidAPI Job Search using axios to fetch job data and effectively manage React Native components. Converted Dribbble designs into pixel-perfect React Native code, maintaining the designer's vision & user experience.",
    image: cc,
    tags: ["React Native", "Expo Router", "MobX"],
    category: "mobile app",
    github: "https://github.com/Kanyakrishi/CareerCompass",
    webapp: "",
  },
  {
    id: 10,
    title: "Travel Diaries using GoogleMaps API, React",
    date: "May 2023",
    description:
      "Developed and launched Travel Diaries, an app to diligently record states visited. Modeled Apple Photos' innovative feature, displaying memories and 3 photos on zoom in & out of specific destinations.",
    webapp: "https://travel-diaries-kanya.netlify.app/",
    github: "https://github.com/Kanyakrishi/TravelDiaries",
    category: "web app",
    tags: ["React", "Google API", "TailwindCSS"],
    image: travelDiariesImage,
  },
  {
    id: 13,
    title: "Airbnb Clone",
    date: "Mar 2023",
    description:
      "Modeled Airbnb website to learn more about React and TailwindCSS",
    webapp: "https://kanya-airbnb.netlify.app",
    category: "web app",
    github: "https://github.com/Kanyakrishi/AirbnbClone2",
    tags: ["Next.js", "TailwindCSS"],
    image: airbnb,
  },
  {
    id: 11,
    title: "Hand Gesture Recognition using ML Algorithms",
    date: "May 2019",
    description:
      "Built a real-time system using TensorFlow and PyTorch for interpreting hand gestures to control PDF functions like zooming and scrolling, leveraging advanced machine learning algorithms to improve user interaction and control. Published the paper in the International Journal of Recent Technology & Engineering (IJRTE).",
    github: "https://github.com/iamdaaniyaal/HCI-FinalYearProject",
    category: "machine learning",
    tags: ["Python", "TensorFlow", "PyTorch"],
    image: hgr,
    webapp: "",
  },
];


export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
