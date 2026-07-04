// programming language logo
import js_logo from "./img_assets/languages_img/js.png";
import ts_logo from "./img_assets/languages_img/typescript.png";
import py_logo from "./img_assets/languages_img/python.png";
import c_logo from "./img_assets/languages_img/letter-c.png";
import c_plus_logo from "./img_assets/languages_img/c_plus.png";
// frontend technology logo
import html_logo from "./img_assets/frontend_img/html-5.png";
import css_logo from "./img_assets/frontend_img/CSS.png";
import tailwindcss_logo from "./img_assets/frontend_img/tailwind-css.webp";
import bootstrap_logo from "./img_assets/frontend_img/bootstrap.png";
import react_logo from "./img_assets/frontend_img/react.png";
import framer_logo from "./img_assets/frontend_img/framer.webp";
import gsap_logo from "./img_assets/frontend_img/gsap.webp";
import firebase_logo from "./img_assets/frontend_img/firebase.webp";
import next_logo from "./img_assets/frontend_img/next-js.webp";
import clerk_logo from "./img_assets/frontend_img/clerk.webp";
// backend technology logo
import node_logo from "./img_assets/backend_img/node-js.png";
import express_logo from "./img_assets/backend_img/express-js.webp";
import rest_api_logo from "./img_assets/backend_img/api.png";
import encription_logo from "./img_assets/backend_img/encripted.png";
// database technology logo
import mongodb_logo from "./img_assets/database_img/mongodb.webp";
import mysql_logo from "./img_assets/database_img/mysql.png";
import postgresql_logo from "./img_assets/database_img/postgre.png";
import prisma_logo from "./img_assets/database_img/prisma.webp";
import redis_logo from "./img_assets/database_img/redis.webp";
// system technology logo
import git_logo from "./img_assets/system_img/git.webp";
import jwt_logo from "./img_assets/system_img/JWT.webp";
import linux_logo from "./img_assets/system_img/linux.webp";
import vercel_logo from "./img_assets/system_img/vercel.webp";
import docker_logo from "./img_assets/system_img/docker.webp";

type technology = {
  id: number;
  name: string;
  link?: string;
};

type IprojectType = {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  feauters?: string[];
  link?: string;
  github?: string;
};

export const languages: technology[] = [
  { id: 1, name: "JavaScript", link: js_logo },
  { id: 2, name: "TypeScript", link: ts_logo },
  { id: 3, name: "Python (Basic)", link: py_logo },
  { id: 4, name: "C", link: c_logo },
  { id: 5, name: "C++", link: c_plus_logo },
];

export const frontend: technology[] = [
  { id: 1, name: "Html", link: html_logo },
  { id: 2, name: "CSS", link: css_logo },
  { id: 3, name: "Tailwind CSS", link: tailwindcss_logo },
  { id: 4, name: "Bootstrap", link: bootstrap_logo },
  { id: 5, name: "React", link: react_logo },
  { id: 6, name: "Framer motion", link: framer_logo },
  { id: 7, name: "GSAP", link: gsap_logo },
  { id: 8, name: "Lenis" },
  { id: 9, name: "Three js" },
  { id: 10, name: "Firebase", link: firebase_logo },
  { id: 11, name: "Next js", link: next_logo },
  { id: 12, name: "Clerk", link: clerk_logo },
];

export const backend: technology[] = [
  { id: 1, name: "Node js", link: node_logo },
  { id: 2, name: "Express js", link: express_logo },
  { id: 3, name: "REST APIs", link: rest_api_logo },
  { id: 4, name: "Ecription", link: encription_logo },
];

export const database: technology[] = [
  { id: 1, name: "Mongodb", link: mongodb_logo },
  { id: 2, name: "MySQL", link: mysql_logo },
  { id: 3, name: "PostgreSQL", link: postgresql_logo },
  { id: 4, name: "Prisma", link: prisma_logo },
  { id: 5, name: "Redis (Basic)", link: redis_logo },
];

export const systems: technology[] = [
  { id: 1, name: "C / C++ (IoT)" },
  { id: 2, name: "JWT Authentication", link: jwt_logo },
  { id: 3, name: "Zod Validation" },
  { id: 4, name: "Git & GitHub", link: git_logo },
  { id: 5, name: "Linux", link: linux_logo },
  { id: 5, name: "Vercel", link: vercel_logo },
  { id: 6, name: "Render" },
  { id: 7, name: "Docker", link: docker_logo },
];

export const projects: IprojectType[] = [
  {
    id: 1,
    title: "Friday Chat AI — Full-Stack AI SaaS Platform",
    description:
      "A modern AI-powered chat application built with a full-stack TypeScript architecture. It features secure Clerk authentication, persistent conversation history, real-time AI responses using Groq's Llama 3.3 model, web search, deep-thinking mode, and a responsive, production-inspired interface designed for speed and scalability.",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Clerk",
      "React Router",
      "Docker",
    ],
    feauters: [
      "AI Chat with Groq Llama 3.3",
      "Secure Clerk Authentication",
      "Conversation History",
      "Deep Thinking Mode",
      "Real-Time Web Search",
      "Responsive UI",
      "REST API",
      "Rate Limiting",
      "MongoDB Persistence",
    ],
    link: "https://carma-car-client.vercel.app/",
    github: "https://github.com/Ri-Reyan/CarmaCar_Client",
  },
  {
    id: 3,
    title: "Forever — Full-Stack MERN E-Commerce Platform",
    description:
      "A scalable MERN e-commerce platform featuring user and admin authentication, product management, secure backend APIs, image uploads, and a fast, responsive shopping experience designed with React and Tailwind CSS.",
    techStack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "Axios",
    ],
    link: "https://e-commerce-forever-client.vercel.app/",
    github: "https://github.com/Ri-Reyan/e-commerce-forever-client",
  },
];
