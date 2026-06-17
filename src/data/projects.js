import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

export const projectFilters = ["All", "Cybersecurity", "QA/Testing", "Web", "Mobile Prototype"];

export const projects = [
  {
    title: "FlagWarden — Telegram CTF Cybersecurity Learning Bot",
    featured: true,
    categories: ["Cybersecurity", "QA/Testing"],
    description:
      "A Telegram-based CTF cybersecurity learning bot for safe and ethical practice, featuring daily/random challenges, quizzes, progressive hints, answer validation, scoring, streak tracking, safety guardrails, and stateful user progress.",
    highlights: [
      "Built interactive command-based and button-based Telegram flows for CTF learning.",
      "Implemented SQLite persistence, duplicate-solve prevention, hint-based score reduction, rate limiting, and progress tracking.",
      "Developed a FastAPI webhook backend with health/metrics endpoints and automated tests for challenge logic, scoring, safety refusal, database behavior, and bot adapters.",
    ],
    tags: [
      "Python",
      "FastAPI",
      "Telegram Bot API",
      "SQLite",
      "Pytest",
      "QA Testing",
      "Cybersecurity",
      "CTF",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/DevCoder-7/FlagWarden", type: "github" },
      { label: "Demo Coming Soon", href: "#", type: "demo", disabled: true },
    ],
  },
  {
    title: "Personal Portfolio Website",
    categories: ["Web", "QA/Testing"],
    description:
      "A responsive portfolio website redesigned to showcase my cybersecurity, QA testing, web security, CTF, and software development background.",
    highlights: [
      "Rebuilt from static HTML/CSS/JavaScript into a component-based React portfolio.",
      "Structured content in reusable data files for easier future updates.",
      "Prepared for static deployment through Vite and GitHub Pages.",
    ],
    tags: ["React.js", "Tailwind CSS", "Responsive Design", "GitHub Pages"],
    links: [{ label: "Details", href: "#home", type: "details" }],
  },
  {
    title: "Waste2Wealth",
    categories: ["Mobile Prototype"],
    image: project1,
    imageAlt: "Waste2Wealth mobile app prototype preview",
    description:
      "A mobile app prototype that encourages users to exchange recyclable waste for economic value, combining UI/UX design, environmental problem solving, and mobile app prototyping.",
    highlights: [
      "Designed user flows for waste exchange and reward-oriented interactions.",
      "Explored product thinking for an environmental problem-solving use case.",
    ],
    tags: ["UI/UX", "Kodular", "Mobile Prototype", "Product Thinking"],
    links: [
      {
        label: "Details",
        href: "https://drive.google.com/drive/folders/1iXaxZHa_wKSQ-1M_t1bMIDY8KV7aKbDR",
        type: "external",
      },
    ],
  },
  {
    title: "Task Track Smasa",
    categories: ["Mobile Prototype"],
    image: project2,
    imageAlt: "Task Track Smasa mobile app prototype preview",
    description:
      "A mobile app prototype for viewing school schedules and assignments, designed to improve student task tracking and academic organization.",
    highlights: [
      "Mapped schedule and assignment workflows into a simple mobile experience.",
      "Focused on organization, usability, and student task visibility.",
    ],
    tags: ["UI/UX", "Kodular", "Mobile Prototype", "Workflow Design"],
    links: [
      {
        label: "Details",
        href: "https://drive.google.com/drive/folders/1qPREmqiKXkhwyqlYliE_hM9PLGhJlaVp",
        type: "external",
      },
    ],
  },
  {
    title: "Senja",
    categories: ["Mobile Prototype"],
    image: project3,
    imageAlt: "Senja workplace well-being mobile app prototype preview",
    description:
      "A workplace well-being app prototype focused on employee services, administration, K3, community, and training features.",
    highlights: [
      "Designed service flows for workplace well-being and employee support.",
      "Connected UI decisions with business process and internal service needs.",
    ],
    tags: ["UI/UX", "Kodular", "Mobile Prototype", "Business Process"],
    links: [
      {
        label: "Details",
        href: "https://drive.google.com/drive/folders/14UodO_g_eFepdPfnulAWxpjviaId9jdf",
        type: "external",
      },
    ],
  },
];
