// ============================================================================
// PORTFOLIO CONTENT — single source of truth
// Edit this file to update all site content. No component code needs to change.
// ============================================================================

export const personal = {
  name: "John Alexis Dela Cruz",
  initials: "JOHN ALEXIS",
  role: "IT Support Professional",
  tagline: "Technical Support • Hardware • Networking",
  location: "Tarlac, Philippines",
  status: "Available for Opportunities",
  intro:
    "A Bachelor of Science in Information Technology graduate passionate about IT support, computer systems, hardware troubleshooting, networking, and helping users solve technical problems efficiently.",
  careerGoal:
    "Seeking an entry-level IT Support, Technical Support, Help Desk, or related IT position where I can apply my technical knowledge, troubleshooting skills, and passion for helping users solve technology-related problems.",
  resumePath: "/resume.pdf",
  profileImage: "/images/profile.jpg",
  email: "johnalexisdelacruz.it@gmail.com",
};

export const socialLinks = {
  github: "https://github.com/Alexis0-0",
  linkedin: "#LINKEDIN",
  facebook: "https://www.facebook.com/JohnAlexisSoberanoDelaCruz/",
  email: `mailto:${johnalexisdelacruz.it@gmail.com}`,
};

export const quickFacts = [
  { label: "Education", value: "BS Information Technology" },
  { label: "Experience", value: "IT Support Internship" },
  { label: "Focus", value: "Technical Support" },
  { label: "Location", value: "Tarlac, Philippines" },
  { label: "Status", value: "Open to Opportunities" },
];

export const experience = [
  {
    id: "exp-1",
    role: "Tech Support Intern",
    org: "Tarlac Agricultural University — Management Information Systems",
    period: "January 2026 – May 2026",
    responsibilities: [
      "ICT equipment maintenance",
      "Computer hardware troubleshooting",
      "Printer installation and maintenance",
      "Software installation",
      "Microsoft Office installation",
      "Network troubleshooting",
      "Router and access point configuration",
      "LAN cable installation",
      "Structured cabling",
      "CCTV troubleshooting",
      "Fiber optic installation support",
      "Technical support for university events",
      "LED wall setup and technical support",
      "Internet connectivity troubleshooting",
    ],
  },
];

export const education = {
  degree: "Bachelor of Science in Information Technology",
  school: "Tarlac Agricultural University",
  statusLabel: "Graduate",
  // Set to a string (e.g. "Cum Laude") only if confirmed. Leave null otherwise.
  honor: null,
};

export const skillCategories = [
  {
    id: "it-support",
    title: "IT Support",
    skills: ["IT Help Desk Support", "Technical Support", "Remote Support", "Troubleshooting"],
  },
  {
    id: "hardware",
    title: "Hardware",
    skills: [
      "Computer Hardware Troubleshooting",
      "Printer Installation",
      "Printer Maintenance",
      "Peripheral Installation",
      "Computer Setup",
    ],
  },
  {
    id: "networking",
    title: "Networking",
    skills: [
      "Basic Network Troubleshooting",
      "Router Configuration",
      "Access Point Configuration",
      "LAN Cable Crimping",
      "Structured Cabling",
    ],
  },
  {
    id: "systems",
    title: "Systems",
    skills: ["Windows 10", "Windows 11", "Windows Server 2022", "Operating System Installation", "Software Installation"],
  },
  {
    id: "other",
    title: "Other Technical Skills",
    skills: [
      "CCTV Installation & Monitoring",
      "File Backup & Recovery",
      "Microsoft Office",
      "OBS Studio",
      "VirtualBox",
      "WordPress",
    ],
  },
];

export const services = [
  {
    id: "svc-it-support",
    title: "IT Support",
    description: "Computer troubleshooting and technical assistance.",
  },
  {
    id: "svc-hardware",
    title: "Hardware Support",
    description: "PC setup, hardware troubleshooting, printers and peripherals.",
  },
  {
    id: "svc-network",
    title: "Network Support",
    description: "Basic network troubleshooting, routers, access points and cabling.",
  },
  {
    id: "svc-software",
    title: "Software Support",
    description: "Operating system and application installation/configuration.",
  },
  {
    id: "svc-setup",
    title: "Technical Setup",
    description: "CCTV, LED walls, AV equipment and event technical setup.",
  },
];

export const projectCategories = ["All", "Web Development", "IT Support", "Networking", "Academic", "Other"];

export const projects = [
  {
    id: "proj-tau-ecommerce",
    title: "TAU E-Commerce Web-Based Application",
    description:
      "A web-based e-commerce application designed to streamline the purchasing of university income-generated products.",
    features: [
      "Product browsing",
      "Shopping cart",
      "Purchase management",
      "Purchase status",
      "Size suggestions",
      "Admin interface",
      "Cashier interface",
      "Reports",
      "Notifications",
      "Payment integration",
      "Cash-on-pickup",
      "MySQL database",
      "Authentication",
      "Access control",
      "Security considerations",
    ],
    tags: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Web Application"],
    categories: ["Web Development", "Academic"],
    image: "/images/project-1.jpg",
    liveUrl: "#PROJECT-LINK",
    githubUrl: "#GITHUB-LINK",
    featured: true,
  },
];

// Add certification objects here as they become available.
// Example shape: { id, title, issuer, date, credentialUrl }
export const certifications = [];

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

// Contact form: set one endpoint via environment variables (see .env.example).
// Falls back to a mailto: link automatically if none is configured.
export const contactConfig = {
  formspreeEndpoint: import.meta.env.VITE_FORMSPREE_ENDPOINT || "",
  web3formsAccessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "",
};
