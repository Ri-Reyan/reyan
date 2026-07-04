// ==========================================
// TAILWIND CSS RESPONSIVE FONT SIZE & TEXT COPY
// ==========================================

// 1. NAVBAR SECTION
const navbarTypography = {
  logo: "text-lg md:text-xl font-bold tracking-wider text-[#FFFFFF]",
  links:
    "text-sm lg:text-[15px] font-medium uppercase tracking-wider text-[#7B7B7B] hover:text-[#FFFFFF] transition-colors",
  ctaButton:
    "text-sm font-medium uppercase tracking-wider bg-[#F8F8F8] text-[#222222] px-5 py-2.5 rounded-full hover:bg-transparent hover:text-[#FFFFFF] border border-[#F8F8F8] transition-all",
};

// 2. HERO SECTION
const heroContent = {
  greeting:
    "text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight text-[#FFFFFF]",
  // Example: "Hey There, I'm Binjan"

  designation: "text-lg md:text-xl lg:text-2xl font-medium text-[#7B7B7B] mt-2",
  // Example: "Full-Stack MERN Developer"

  miniHook: "text-sm md:text-base text-[#7B7B7B] leading-relaxed max-w-xl mt-4",
  // Copy: "I design beautifully simple things, and I love what I do. Specializing in building secure, scalable, and production-ready web applications."

  emailFloating:
    "text-sm md:text-base text-[#7B7B7B] tracking-wide hover:text-[#FFFFFF]",
  experienceTag: "text-3xl md:text-4xl font-bold text-[#FFFFFF]", // For numbers like "10"
  experienceText:
    "text-[10px] md:text-xs uppercase tracking-widest text-[#7B7B7B]", // For text "YEARS EXPERIENCE"
};

// 3. GLOBAL SECTION HEADINGS
const sectionTypography = {
  title:
    "text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight text-[#FFFFFF] mb-8",
  // Examples: "01. Behind the Code", "02. Technical Arsenal", "03. Education & Milestones", "04. Let's Build Something Together"
};

// 4. ABOUT ME SECTION
const aboutContent = {
  paragraph: "text-sm md:text-base text-[#7B7B7B] leading-relaxed mb-4",
  // Copy 1: "My journey into the world of programming started with a deep curiosity about how things work under the hood on the internet. As an 11th-grade arts student, I broke the stereotype by diving headfirst into web development. Through intense, structured learning at Programming Hero, I discovered my passion for building full-stack applications."
  // Copy 2: "I genuinely enjoy crafting seamless user experiences on the frontend while architecting secure, robust, and optimized systems on the backend. There’s a unique thrill in optimizing data queries, handling secure authentication, and watching a complex application come to life."
  // Copy 3 (Hobbies): "When I’m away from the glowing screen and not debugging code, you’ll probably find me exploring the latest tech gadgets, customizing my Linux desktop environment, or playing sports with friends."
};

// 5. SKILLS SECTION
const skillsTypography = {
  categoryTitle: "text-lg md:text-xl font-semibold text-[#FFFFFF] mb-4",
  // Categories: "Frontend", "Backend & DB", "Tools & Security"

  skillName: "text-sm md:text-base font-medium text-[#FFFFFF]",
};

// 6. PROJECTS SECTION (CARD & MODAL)
const projectTypography = {
  cardTitle:
    "text-lg md:text-xl font-semibold text-[#FFFFFF] group-hover:text-[#7B7B7B] transition-colors",
  cardDescription: "text-sm text-[#7B7B7B] leading-relaxed line-clamp-2",
  techBadge:
    "text-xs font-medium text-[#FFFFFF] bg-[#2A2A2A] border border-[#7B7B7B]/20 px-2.5 py-1 rounded-md",

  // Detailed Modal / Page inside
  modalTitle: "text-2xl md:text-3xl font-bold text-[#FFFFFF]",
  modalSubTitle: "text-base md:text-lg font-semibold text-[#FFFFFF] mt-6 mb-2",
  // Use for: "Core Features", "Challenges Faced", "Future Improvements"

  modalBody: "text-sm md:text-base text-[#7B7B7B] leading-relaxed",
};

// 7. EDUCATION TIMELINE
const educationTypography = {
  instituteTitle: "text-base md:text-lg font-semibold text-[#FFFFFF]",
  timelineDate: "text-xs md:text-sm text-[#7B7B7B] font-medium mb-1",
  timelineDescription: "text-sm text-[#7B7B7B] leading-relaxed",
};

// 8. BUTTONS & UTILITIES
const buttonTypography = {
  primaryCTA:
    "text-sm font-medium uppercase tracking-wider bg-[#FFFFFF] text-[#222222] px-6 py-3 rounded-full hover:bg-transparent hover:text-[#FFFFFF] border border-[#FFFFFF] transition-all duration-300",
  // Use for: "Download Resume", "Send Message"

  secondaryCTA:
    "text-sm font-medium uppercase tracking-wider text-[#FFFFFF] hover:text-[#7B7B7B] flex items-center gap-2 transition-all",
  // Use for: "View Details ↗", "Live Link", "GitHub Repo"
};
