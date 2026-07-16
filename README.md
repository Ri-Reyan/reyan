# Portfolio Website

A modern, animated personal portfolio built with React, TypeScript, Vite, and Tailwind CSS. The site showcases a developer's introduction, skills, projects, certificates, and contact information through a polished single-page experience.

## Overview

This project is designed to act as a personal brand landing page with:

- A hero section with strong visual presentation
- Smooth scrolling and animated transitions
- A custom cursor experience and ambient background effects
- Structured sections for about, projects, skills, certificates, and contact
- Responsive navigation for a polished desktop and mobile experience

## Features

- React 19 + TypeScript for a scalable component-based architecture
- Vite for fast development and optimized builds
- Tailwind CSS for utility-first styling
- Motion and GSAP-based UI animation support
- Lenis-powered smooth scrolling
- Custom UI components such as cursor, loader, and starry background
- Section-based page layout with dedicated components for content

## Tech Stack

- Frontend: React, TypeScript, Vite
- Styling: Tailwind CSS
- Animation: Motion, GSAP, Lenis
- Icons: lucide-react
- Routing: react-router-dom
- Linting: ESLint

## Project Structure

```text
src/
  App.tsx
  main.tsx
  pages/
    Home.tsx
  sections/
    Hero.tsx
    About.tsx
    Skills.tsx
    Projects.tsx
    Certificate.tsx
    Contact.tsx
  components/
    nav/
    ui/
  assets/
    stack_assets/
  context/
    NavContext.tsx
```

## Prerequisites

Make sure you have the following installed:

- Node.js 18 or newer
- npm or pnpm

## Installation

Clone the repository and install dependencies:

```bash
git clone <your-repository-url>
cd portfolio
npm install
```

## Development

Start the local development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal (usually http://localhost:5173).

## Production Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Available Scripts

- npm run dev: starts the Vite development server
- npm run build: compiles TypeScript and builds the production bundle
- npm run preview: serves the built app locally
- npm run lint: runs ESLint checks

## Customization Guide

### Update personal content

The main content for the portfolio lives in the section components under src/sections/.

- Edit the hero message in src/sections/Hero.tsx
- Update the about text in src/sections/About.tsx
- Replace project cards in src/sections/Projects.tsx
- Update certificates in src/sections/Certificate.tsx
- Modify contact details in src/sections/Contact.tsx

### Theme and visuals

Visual styling is handled through Tailwind classes and UI components in src/components/ui/.

You can adjust:

- Colors and spacing in component class names
- Background effects in the starry space UI component
- Cursor and loader behavior in the UI folder

### Navigation

The page sections are wired in src/pages/Home.tsx and the navbar is managed by src/components/nav/.

## Deployment

This project can be deployed to platforms such as:

- Vercel
- Netlify
- GitHub Pages

For Vercel or Netlify, the build command is:

```bash
npm run build
```

and the output directory is:

```text
dist
```

## Notes

This repository currently does not include a license file. If you plan to publish it publicly, consider adding an appropriate license.
