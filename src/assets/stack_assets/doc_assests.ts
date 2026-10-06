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

export interface IprojectType {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  feauters: string[]; 
  github: string;
  link?: string,
  github: string,
}

type ICertificate = {
  id?: number;
  title: string;
  link: string;
  org?: string;
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
  { id: 4, name: "Encryption", link: encription_logo },
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
    title: "TeamSync — Multi-Tenant Kanban SaaS",
    description:
      "TeamSync is a full-stack collaboration platform for organizing work across workspaces, projects, sprints, and tasks. It combines a responsive web experience with a structured API, relational persistence, secure authentication, real-time task updates, invitations, billing, and AI-assisted project workflows.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Pusher",
      "Stripe",
    ],
    feauters: [
      "Create workspaces and manage members",
      "Organize work into projects and sprints",
      "Track tasks on a Kanban board",
      "Move tasks between statuses with drag and drop",
      "See task creation, updates, status changes, and deletions in real time",
      "Generate AI project summaries and discuss project risks and next steps",
      "Invite collaborators by email",
      "Manage authentication, verification, and password recovery",
      "Connect billing and checkout workflows",
      "Provide separate user and administrative capabilities",
    ],
    link: "https://teamsync-client-psi.vercel.app",
    github: "https://github.com/Ri-Reyan/teamsync",
  },
  {
    id: 2,
    title: "GearUp — Modern Gear Rental Marketplace",
    description:
      "A feature-rich full-stack gear rental marketplace that connects outdoor gear providers with customers. Built with Next.js 16, Express.js, Prisma ORM, and PostgreSQL. It features dynamic date-based rental bookings, multi-role authentication, Stripe payments, and interactive review management.",
    techStack: [
      "Next.js 16 (App Router)",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Express.js",
      "Prisma ORM",
      "PostgreSQL",
      "Stripe API",
      "JWT (Cookies)",
      "Axios",
    ],
    feauters: [
      "Multi-Role System (Customer, Gear Provider, and Platform Admin dashboards)",
      "Interactive Gear Discovery with category filtering, detailed views, and review submission",
      "Date-based booking workflow for rental scheduling and availability calculation",
      "Stripe payment integration with payment intent creation and automated confirmation",
      "Provider Inventory Portal to list, update, and manage rental orders and gear stock",
      "Admin Control Panel for complete oversight of users, gear listings, and system-wide orders",
      "Cookie-based JWT Authentication with separate access/refresh token lifetime cycles",
    ],
    link: "https://github.com/Ri-Reyan/GearUp_Client",
    github: "https://github.com/Ri-Reyan/GearUp_Client",
  },
  {
    id: 3,
    title: "Caelum — Full-Stack E-Commerce Platform",
    description:
      "A production-ready, watch-focused e-commerce storefront built with Next.js App Router, Express.js, Prisma, and PostgreSQL. Features robust HttpOnly JWT authentication, Stripe payment processing, real-time pre-order tracking, and a dynamic admin management dashboard.",
    techStack: [
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "Prisma ORM",
      "PostgreSQL",
      "Stripe API",
      "Zod",
      "Argon2",
      "Axios",
    ],
    feauters: [
      "Modular Full-Stack Architecture using Next.js 13+ App Router and RESTful Express API",
      "Dual-Token JWT Authentication with secure HttpOnly Cookies and Argon2 password hashing",
      "Role-Based Access Control (RBAC) supporting separate Customer and Admin Dashboards",
      "Dynamic Pre-Order Management with real-time order status tracking and estimated delivery dates",
      "Secure payment processing integration via Stripe API",
      "Type-safe API validation using Zod schemas and centralized error handling middleware",
      "Optimized production setup with Vercel Rewrite Proxying to bypass cross-site cookie restrictions",
    ],
    link: "https://caelum-client-five.vercel.app",
    github: "https://github.com/Ri-Reyan/Caelum_client",
  },
];


export const certificate: ICertificate[] = [
  {
    title: "JavaScript (Basic)",
    link: "https://www.hackerrank.com/certificates/ebb3b9675e34",
    org: "HackerRank Certification",
  },
  {
    title: "SQL (Basic)",
    link: "https://www.hackerrank.com/certificates/9da22005a4aa",
    org: "HackerRank Certification",
  },
];
