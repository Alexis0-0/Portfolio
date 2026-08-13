// ============================================================================
// PORTFOLIO CONTENT — single source of truth
// Edit this file to update all site content. No component code needs to change.
// ============================================================================

export const personal = {
  name: "John Alexis Dela Cruz",
  initials: "JAD",
  navLabel: "JOHN ALEXIS",
  role: "IT Support | Web Developer",
  tagline: "Cum Laude • Honor Graduate Eligible",
  location: "Tarlac, Philippines",
  status: "Available for Opportunities",
  intro:
    "A Bachelor of Science in Information Technology graduate passionate about IT support, computer systems, hardware troubleshooting, networking, and helping users solve technical problems efficiently.",
  careerGoal:
    "Seeking an entry-level IT Support, Technical Support, Help Desk, or related IT position where I can apply my technical knowledge, troubleshooting skills, and passion for helping users solve technology-related problems.",
  resumePath: `${import.meta.env.BASE_URL}resume.pdf`,
  profileImage: `${import.meta.env.BASE_URL}images/profile.jpg`,
  email: "johnalexisdelacruz.it@gmail.com",
};

export const socialLinks = {
  github: "https://github.com/Alexis0-0/",
  linkedin: "https://www.linkedin.com/in/john-alexis-91909b421?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  facebook: "https://www.facebook.com/profile.php?id=61592544442472",
  // Opens Gmail's web compose window with the recipient pre-filled, rather
  // than relying on a system mailto: handler (which may not be configured).
  email: `https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}`,
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
  honor: "Cum Laude",
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

export const projectCategories = ["All", "Web Development", "IT Support", "Networking", "Academic"];

export const projects = [
  {
    id: "proj-tau-ecommerce",
    title: "Design and Development of a TAU Ecommerce Web-Based Application for IGP (Capstone Project)",
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
    tags: ["PHP", "CSS", "JavaScript"],
    categories: ["Web Development", "Academic"],
    image: `${import.meta.env.BASE_URL}images/project-1.jpg`,
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
  {
    id: "intern-printer-maintenance",
    title: "Printer Maintenance",
    description:
      "Performed printer installation, maintenance, and troubleshooting to keep office and event printers running smoothly during the internship.",
    features: [],
    tags: [],
    categories: ["IT Support"],
    image: `${import.meta.env.BASE_URL}images/intern-printer-maintenance.jpg`,
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: "intern-desktop-assembly",
    title: "Desktop (System Unit) Assembly and Setup",
    description:
      "Assembled and set up desktop computer units, including hardware installation and initial system configuration.",
    features: [],
    tags: [],
    categories: ["IT Support"],
    image: `${import.meta.env.BASE_URL}images/intern-desktop-assembly.jpg`,
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: "intern-hardware-troubleshooting",
    title: "Hardware Troubleshooting",
    description: "Diagnosed and resolved computer hardware issues to restore functionality for end users.",
    features: [],
    tags: [],
    categories: ["IT Support"],
    image: `${import.meta.env.BASE_URL}images/intern-hardware-troubleshooting.jpg`,
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: "intern-router-ap-configuration",
    title: "Router and Access Point Configuration",
    description: "Configured routers and access points to maintain reliable network connectivity across the university.",
    features: [],
    tags: [],
    categories: ["IT Support", "Networking"],
    image: `${import.meta.env.BASE_URL}images/intern-router-ap-configuration.jpg`,
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: "intern-cctv-troubleshooting",
    title: "CCTV Troubleshooting & Maintenance",
    description: "Troubleshot and maintained CCTV systems to ensure continuous monitoring coverage.",
    features: [],
    tags: [],
    categories: ["IT Support"],
    image: `${import.meta.env.BASE_URL}images/intern-cctv-troubleshooting.jpg`,
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: "intern-os-installation-upgrade",
    title: "Operating System Installation & Upgrade",
    description: "Installed and upgraded operating systems on desktop and laptop units for end users.",
    features: [],
    tags: [],
    categories: ["IT Support"],
    image: `${import.meta.env.BASE_URL}images/intern-os-installation-upgrade.jpg`,
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: "intern-lan-cable-crimping",
    title: "LAN Cable Crimping & Structured Cabling",
    description: "Crimped LAN cables and performed structured cabling to support reliable network infrastructure.",
    features: [],
    tags: [],
    categories: ["Networking"],
    image: `${import.meta.env.BASE_URL}images/intern-lan-cable-crimping.jpg`,
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: "intern-office-internet-restoration",
    title: "Office Internet Connectivity Restoration",
    description: "Diagnosed and restored internet connectivity issues affecting office network access.",
    features: [],
    tags: [],
    categories: ["Networking", "IT Support"],
    image: `${import.meta.env.BASE_URL}images/intern-office-internet-restoration.jpg`,
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: "intern-fiber-optic-installation",
    title: "Fiber Optic Installation",
    description: "Assisted with fiber optic installation to extend and improve network infrastructure.",
    features: [],
    tags: [],
    categories: ["Networking"],
    image: `${import.meta.env.BASE_URL}images/intern-fiber-optic-installation.jpg`,
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: "intern-university-event-support",
    title: "University Event Technical Support",
    description: "Provided on-the-ground technical support for university-hosted events.",
    features: [],
    tags: [],
    categories: ["IT Support"],
    image: `${import.meta.env.BASE_URL}images/intern-university-event-support.jpg`,
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: "intern-led-wall-setup",
    title: "LED Wall Event Setup & Management",
    description: "Set up and managed LED wall displays for university events.",
    features: [],
    tags: [],
    categories: ["IT Support"],
    image: `${import.meta.env.BASE_URL}images/intern-led-wall-setup.jpg`,
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: "intern-av-equipment-setup",
    title: "AV Equipment Setup",
    description: "Set up and operated AV equipment for events and university functions.",
    features: [],
    tags: [],
    categories: ["IT Support"],
    image: `${import.meta.env.BASE_URL}images/intern-av-equipment-setup.jpg`,
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
];

// Add certification objects here as they become available.
// Example shape: { id, title, issuer, date, credentialUrl }
export const certifications = [
  {
    id: "cert-ansc299",
    title: "Technologies and Practices to Improve Feed and Nutrient Utilization by Pigs",
    issuer: "ANSC 299 Graduate Webinar Series — Institute of Animal Science, UPLB",
    date: "March 14, 2025",
    credentialUrl: `${import.meta.env.BASE_URL}certificates/ansc-299-webinar-session-2.pdf`,
  },
  {
    id: "cert-asean-festival-2024",
    title: "ASEAN Festival 2024 Culminating Activity",
    issuer: "Office of External Linkages and International Affairs, Tarlac Agricultural University (TAU)",
    date: "August 29, 2024",
    credentialUrl: `${import.meta.env.BASE_URL}certificates/certificate_of_attendance_asean_festival_2024.pdf`,
  },
];

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

// Contact form: this Web3Forms access key is safe to keep in client-side code —
// Web3Forms confirms it as a public key, similar to a Formspree form ID.
// It can still be overridden via VITE_WEB3FORMS_ACCESS_KEY if needed (e.g. to
// swap in a different form without editing this file).
export const contactConfig = {
  formspreeEndpoint: import.meta.env.VITE_FORMSPREE_ENDPOINT || "",
  web3formsAccessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "f5edd564-7a3f-41a5-ae7a-f11852e86fad",
};
