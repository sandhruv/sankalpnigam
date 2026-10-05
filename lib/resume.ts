export type Link = {
  label: string;
  href: string;
};

export const profile = {
  name: "Sankalp Nigam",
  role: "Full-Stack & AI/ML Engineer",
  summary:
    "B.Tech CSE student building full-stack products and retrieval-augmented AI systems. Ships end-to-end: React front-ends, Node/FastAPI services, MongoDB/MySQL data layers, Dockerized deploys on Google Cloud Run.",
  email: "sankalpnigamofficial@gmail.com",
  mobile: "+91-9174236575",
  location: "Phagwara, Punjab, India",
  // NOTE: the DOCX anchor text reads "sankalp-nigam" / "sankalpnigam" but the
  // actual hyperlink targets in the resume point at the sandhruv profiles.
  // Real destinations are preserved below — confirm which is correct.
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sandhruv/" },
    { label: "GitHub", href: "https://github.com/sandhruv" },
  ] satisfies Link[],
};

export const skills = [
  {
    category: "Languages",
    items: ["Java", "Python", "SQL", "C++", "JavaScript (ES6+)"],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "React",
      "Node.js",
      "Express.js",
      "Redux Toolkit",
      "FastAPI",
      "Selenium",
      "Socket.IO",
      "WebRTC",
    ],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL", "Firebase"],
  },
  {
    category: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Google Cloud Run",
      "Render",
      "VS Code",
      "Jupyter",
      "Tableau",
    ],
  },
  {
    category: "AI/ML",
    items: [
      "RAG",
      "FAISS",
      "Sentence Transformers",
      "NLP",
      "LLMs",
      "Prompt Engineering",
      "Whisper",
      "Machine Learning",
    ],
  },
];

export const experience = [
  {
    company: "Jaspreet Impex",
    role: "Part-Time Data Analyst",
    period: "Jan 2025 – Jun 2025",
    bullets: [
      "Processed and analyzed 200+ operational records using Python, NumPy and Pandas, doing data cleaning, transformation and exploratory analysis to support business decisions.",
      "Generated 20+ analytical reports using statistical analysis and data visualization, identifying operational trends and actionable insights.",
      "Standardized recurring data-preparation and reporting workflows, reducing manual analysis effort by ~25% and improving reporting consistency.",
    ],
  },
];

export const projects = [
  {
    name: "Placement Prep Buddy",
    subtitle: "AI-powered mock interview platform",
    period: "Sep 2026",
    bullets: [
      "Built an AI mock-interview platform: upload a resume, pick a target role, research current job requirements, take a dynamic AI-led interview and get a structured performance report.",
      "Implemented adaptive interviewing with Groq LLM — follow-ups react to each answer (vague answers get clarification, shallow ones go deeper, mentioned projects get challenged) instead of replaying a fixed question list.",
      "Integrated Tavily for live job-market research so questions match the target role; React + FastAPI + MongoDB stack deployed on Render.",
    ],
    tech: ["React", "FastAPI", "Groq LLM", "Tavily", "MongoDB", "Render"],
    image: "/projects/placement-prep-buddy.svg",
    imageAlt:
      "Placement Prep Buddy cover art: an amber microphone with speech bubble and audio waveform, labelled AI mock interview platform",
    imageWidth: 1200,
    imageHeight: 630,
    links: [
      {
        label: "Live",
        href: "https://placement-preparation-buddy-1.onrender.com/login",
      },
      {
        label: "Post",
        href: "https://www.linkedin.com/posts/sandhruv_ai-interviewprep-placementprep-ugcPost-7508620653604966401-V2lY/",
      },
    ],
  },
  {
    name: "Vettora",
    subtitle: "AI-Powered Recruitment & Assessment Platform",
    period: "Jan 2026 – May 2026",
    bullets: [
      "Built a 14.4K+ LOC full-stack recruitment platform across 67 source files, with 62 REST APIs, MongoDB schemas, 12 modular route modules and 6-role RBAC.",
      "Integrated 4 AI-powered features using Groq LLM + Whisper ASR: resume parsing across 6 structured fields, ATS-optimized resume generation, 10 personalized interview questions per candidate, and automated interview audio analysis. Added 3 real-time features using Socket.IO/WebRTC.",
      "Engineered 11-type anti-cheat monitoring with 9-dimension browser fingerprinting, IP/timestamp logging, 2 rate-limit layers, 5 submission attempts per test, 10s cooldown, 30s server-side minimum test duration, and 96% lower proctoring bandwidth through optimized webcam streaming.",
    ],
    tech: [
      "React",
      "Redux Toolkit",
      "Vite",
      "Tailwind CSS",
      "Express",
      "MongoDB",
      "Node.js",
      "Razorpay",
      "Docker",
    ],
    image: "/projects/vettora.svg",
    imageAlt:
      "Vettora cover art: a scanned resume card with amber check marks and an ATS match score, labelled recruitment platform",
    imageWidth: 1200,
    imageHeight: 630,
    links: [
      {
        label: "Live",
        href: "https://cv-shortlisting-system-2.onrender.com/",
      },
    ],
  },
  {
    name: "SangamRAG",
    subtitle: "Conflict-Aware Retrieval-Augmented Generation System",
    period: "Jul 2026 – Aug 2026",
    bullets: [
      "Built a conflict-aware RAG pipeline using FAISS + all-MiniLM-L6-v2, processing 3 healthcare documents into 155 chunks and detecting 16 contradictory numerical claims across sources before LLM generation.",
      "Engineered a regex-based conflict detection safety gate for mg/ml/hour-based claims, blocking LLM synthesis on detected conflicts, with 98% detection of the 16 benchmarked numerical conflicts.",
      "Implemented Groq Cloud + Ollama offline fallback with SHA-256 caching, cutting repeated-query latency by 96.5% (142ms → 5ms) with <10ms cached responses; containerized with Docker and deployed to Google Cloud Run.",
    ],
    tech: [
      "Python",
      "FastAPI",
      "React",
      "Vite",
      "FAISS",
      "Sentence Transformers",
      "PyTorch",
      "Groq",
      "Ollama",
      "Docker",
      "Nginx",
      "Google Cloud Run",
    ],
    image: "/projects/sangam-rag.svg",
    imageAlt:
      "SangamRAG cover art: connected vector index nodes linked to a document, with a red conflict flag on a contradictory claim",
    imageWidth: 1200,
    imageHeight: 630,
    links: [
      {
        label: "Live",
        href: "https://sangam-rag-frontend-524229321053.asia-south1.run.app",
      },
    ],
  },
  {
    name: "Batuni Chat App",
    subtitle: "Real-time Android chat application",
    period: "Jan 2025 – Feb 2025",
    bullets: [
      "Created Batuni, a real-time Android chat application for secure user-to-user messaging.",
      "Integrated Firebase Authentication and Realtime Database with a modular architecture (Fragments, Adapters, Models) to manage chats, user status and message synchronization.",
      "Designed an optimized, responsive UI with fast data retrieval and smooth navigation and real-time updates across all screens.",
    ],
    tech: [
      "Java",
      "Firebase Auth",
      "Firebase Realtime Database",
      "Android SDK",
      "Fragments",
      "Adapters",
      "Models",
    ],
    image: "/projects/batuni-chat.svg",
    imageAlt:
      "Batuni Chat App cover art: an Android phone showing incoming and outgoing chat bubbles with typing dots and delivery ticks",
    imageWidth: 1200,
    imageHeight: 630,
    links: [
      {
        label: "GitHub",
        href: "https://github.com/sandhruv/batuni-chat-aap",
      },
    ],
  },
];

export const certificates = [
  {
    name: "Cloud Computing",
    issuer: "NPTEL",
    date: "Nov 2025",
    href: "https://drive.google.com/drive/folders/15JsVOV-K6XXMYYPycabDDuNDRiZoiMAz",
  },
  {
    name: "Logic Building, Programming and Data Structures",
    issuer: "LPU",
    date: "Aug 2025",
    href: "https://drive.google.com/drive/u/1/folders/1hggmIoBh7gzBwK0sJ-Uz8tKZWnRxuTR7",
  },
  {
    name: "Forward Program",
    issuer: "McKinsey.org",
    date: "Jun 2026",
    href: "https://www.credly.com/badges/31d093f7-e6d1-4d7c-8508-20ece461025e",
  },
  {
    name: "Google AI Essentials",
    issuer: "Coursera",
    date: "May 2026",
    href: "https://drive.google.com/file/d/1hemx2WjdddzBnfDoduHMefEoFWB4U3K8/view?usp=sharing",
  },
  {
    name: "Gen AI 360° Foundational Model Certification",
    issuer: "Activeloop.ai",
    date: "May 2026",
    href: "https://learn.activeloop.ai/certificates/cgfgq6qe89",
  },
];

export type Achievement = {
  text: string;
  date: string;
  href?: string;
  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  imageWidth?: number;
  imageHeight?: number;
};

export const achievements: Achievement[] = [
  {
    text: "Honoured with the Bravery Award by the Pro-Chancellor of IP University (IPU) at Lovely Professional University.",
    date: "Jun 2024",
    href: "https://www.linkedin.com/posts/sandhruv_thank-you-so-much-mam-pro-chancellor-of-activity-7205681795906883584-9R2w",
    image: "/award.jpg",
    imageAlt:
      "Sankalp Nigam receiving the Bravery Award from the Pro-Chancellor of IP University at Lovely Professional University",
    imageWidth: 800,
    imageHeight: 591,
  },
  {
    text: "Actively participated in the 14th Bharatiya Chhatra Sansad (Indian Student Parliament) held 8-10 February 2025 at MIT School of Government, Pune, engaging student leaders across India on democracy, leadership, governance and public policy.",
    date: "Feb 2025",
    href: "https://www.linkedin.com/posts/sandhruv_leadership-democracy-publicpolicy-activity-7295870545315672064-zq8f",
    image: "/parliament.jpg",
    imageAlt:
      "Certificate of Participation awarded to Sankalp Nigam at the 14th Bharatiya Chhatra Sansad (Indian Student Parliament)",
    imageFit: "contain",
    imageWidth: 1075,
    imageHeight: 1536,
  },
  {
    text: "Secured the First Runner-Up position in a speaking competition organised by the Centre for Professional Enhancement at Lovely Professional University.",
    date: "Apr 2025",
    href: "https://www.linkedin.com/posts/sandhruv_thrilled-to-share-that-i-secured-the-first-activity-7323011223397007360-_y8m",
    image: "/speaking.jpg",
    imageAlt:
      "1st Runner-up trophy awarded to Sankalp Nigam by the Centre for Professional Enhancement, Lovely Professional University",
    imageFit: "contain",
    imageWidth: 1079,
    imageHeight: 1428,
  },
  {
    text: "Solved 400+ DSA problems across platforms like LeetCode",
    date: "Dec 2025",
    image: "/dsa.jpg",
    imageAlt:
      "400+ DSA problems solved by Sankalp Nigam across LeetCode, GeeksforGeeks and coding contests",
    imageWidth: 1400,
    imageHeight: 800,
  },
  {
    text: "Anchored the Alumni Homecoming Virtual Meet at Lovely Professional University alongside Bhavi Kapoor, facilitating conversations with distinguished alumni and hosting interactive sessions.",
    date: "Apr 2026",
    href: "https://www.linkedin.com/posts/sandhruv_anchoring-leadership-communicationskills-activity-7451261002668490753-JdG9",
    image: "/alumni.jpg",
    imageAlt:
      "Sankalp Nigam with LPU faculty and hosts at the Alumni Homecoming Virtual Meet",
    imageWidth: 1195,
    imageHeight: 672,
  },
];

export const education = [
  {
    school: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "B.Tech in Computer Science and Engineering",
    detail: "CGPA 7.0",
    period: "Aug 2023 – Present",
  },
  {
    school: "St Michael's Higher Secondary School",
    location: "Satna, Madhya Pradesh",
    degree: "Intermediate",
    detail: "69.9%",
    period: "Mar 2022 – Mar 2023",
  },
  {
    school: "St Michael's Higher Secondary School",
    location: "Satna, Madhya Pradesh",
    degree: "Matriculation",
    detail: "63.3%",
    period: "Mar 2020 – Mar 2021",
  },
];

export const sections = [
  { label: "Home", href: "/", blurb: "Profile, photo and highlights." },
  {
    label: "Skills",
    href: "/skills",
    blurb: "Languages, frameworks, databases, tools and AI/ML stack.",
  },
  {
    label: "Experience",
    href: "/experience",
    blurb: "Work history and professional experience.",
  },
  {
    label: "Projects",
    href: "/projects",
    blurb: "Full-stack and AI builds with live links and source code.",
  },
  {
    label: "Certificates",
    href: "/certificates",
    blurb: "Verified certifications from NPTEL, Coursera and more.",
  },
  {
    label: "Achievements",
    href: "/achievements",
    blurb: "Recognition, contests and problem-solving milestones.",
  },
  {
    label: "Education",
    href: "/education",
    blurb: "Academic background and qualifications.",
  },
  {
    label: "Contact",
    href: "/contact",
    blurb: "E-mail, phone, address and social profiles.",
  },
];
