export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: number;
  description: string;
  technologies: string[];
  cover: string;
}

export const projects: Project[] = [
  {
    slug: "novaaacode-portfolio",
    title: "NOVAAACODE",
    subtitle: "Creative Developer Portfolio",
    category: "Design / Development / Motion",
    year: 2026,
    description: "A digital portfolio focused on combining interface design, engineering, and motion into one cohesive experience.",
    technologies: ["Next.js", "Framer Motion", "GSAP", "Tailwind CSS"],
    cover: "/textures/abstract_arch.png",
  },
  {
    slug: "ai-smart-cv-builder",
    title: "AI Smart CV Builder",
    subtitle: "A resume-building experience combining structured editing, AI-assisted writing and real-time document generation.",
    category: "AI / Web Product",
    year: 2026,
    description: "Intelligent document generation with real-time preview and AI assistance.",
    technologies: ["Next.js", "TypeScript", "Zustand", "OpenAI API", "Tailwind CSS"],
    cover: "/projects/cv_builder.png",
  },
  {
    slug: "appointment-manager",
    title: "Appointment Manager",
    subtitle: "A complete booking and administration platform.",
    category: "Booking / Admin / Full Stack",
    year: 2025,
    description: "Streamlined scheduling and client management for modern businesses.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    cover: "/projects/appointment_manager.png",
  },
  {
    slug: "buy-sell",
    title: "Buy & Sell",
    subtitle: "A modern e-commerce marketplace experience.",
    category: "E-Commerce / Full Stack",
    year: 2025,
    description: "A comprehensive digital storefront with real-time inventory and seamless checkout.",
    technologies: ["Next.js", "Stripe", "Supabase"],
    cover: "/projects/buy_sell.png",
  },
  {
    slug: "real-time-chat",
    title: "Real-Time Chat",
    subtitle: "A lightning-fast instant messaging platform.",
    category: "Messaging / Real-Time",
    year: 2024,
    description: "Synchronous communication with live presence and message states.",
    technologies: ["React", "Socket.io", "Express"],
    cover: "/projects/realtime_chat.png",
  },
  {
    slug: "smart-text-assistant",
    title: "Smart Text Assistant",
    subtitle: "An intelligent writing companion.",
    category: "AI / Web Product",
    year: 2024,
    description: "Context-aware text suggestions and automated grammar refinement.",
    technologies: ["React", "OpenAI", "Tailwind"],
    cover: "/projects/smart_text.png",
  }
];
