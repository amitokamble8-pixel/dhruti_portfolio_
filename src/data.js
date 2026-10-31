/* ==================================================================
   data.js — every piece of content on the site lives here.
   Edit this file; the components never need to change.
   ================================================================== */

export const PROFILE = {
  first: "Dhruti",
  last: "Nagre",
  fullName: "Dhruti Nagre",
  tagline: "Aspiring Engineer • Automation • Electrical Systems • Problem Solving",
  location: "Pune, Maharashtra, India",
  email: "", // NOTE: the CV has no student email — only parents' emails. Add Dhruti's own address here.
  phone: "", // NOTE: the CV lists only parents' phone numbers. Left out deliberately for a public site.
  bio: [
    "I'm an A Level student at Bharati Vidyapeeth Rabindranath Tagore School of Excellence (BVRTSE), Pune, studying Mathematics, Physics and Chemistry, with a passion for engineering and a particular interest in automation, electrical and electronic systems, and system reliability.",
    "My interest took shape during an internship at United Foods Corporation (Deemah) in Saudi Arabia, where I shadowed engineers on high-volume production and packaging lines, studied sensors, motors and control systems, and worked through a packaging-machine sensor fault to learn systematic troubleshooting. I have also explored research on dye-sensitized solar cells, visiting the National Chemical Laboratory in Pune, and built a website project combining AI-based learning with the traditional Indian Gurukul system.",
    "Outside the classroom, I have volunteered with the Sant Nirankari Charitable Foundation in Lagos since childhood, including a food drive with the Lagos Food Bank. I enjoy swimming, music, drama and public speaking, and I aim to contribute to a team focused on innovation and meaningful impact.",
  ],
  socials: {
    github: "",
    scholar: "",
    linkedin: "",
    codeforces: "",
    fide: "",
    imo: "",
    wespa: "",
    twitter: "",
  },
  cv: "", 
  photo: "",
  aboutPhoto: "",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Experience",
    children: [
      { label: "Work Experience", to: "/work" },
      { label: "Featured Projects", to: "/projects" },
      { label: "Areas of Interest", to: "/publications" },
    ],
  },

  { label: "Achievements", to: "/awards" },
  { label: "Community Service", to: "/volunteering" },

  { label: "Beyond Academics", to: "/sports" },
];

/* ---- Roles & engagement (renders as "Work Experience" cards) ---- */

export const EXPERIENCE = [
  {
    slug: "united-foods-deemah",
    role: "Intern",
    org: "United Foods Corporation (Deemah)",
    logo: "",
    location: "Saudi Arabia",
    dates: "Apr 2024",
    meta: "Apr 2024 · Saudi Arabia ·",
    badge: "Internship",
    desc: "Industrial internship observing large-scale food manufacturing across production, quality control and packaging to understand end-to-end automated processes.",
    bullets: [
      "Shadowed engineers and production staff to learn the operation and troubleshooting of automated systems in high-volume environments",
      "Examined sensors, motors, control systems and automated machinery on production and packaging lines",
      "Analysed machine detection, motion control, stage regulation and consistency maintenance across production processes",
      "Observed quality-control procedures used to identify defects and maintain product consistency",
      "Investigated a packaging-machine sensor cable fault, learning fault detection, systematic troubleshooting and reliability principles",
      "Applied mathematical and scientific principles to timing, measurement, control and optimisation in practical engineering decisions",
    ],
    tags: ["Industrial Automation", "Control Systems", "Troubleshooting"],
    featured: true,
  },
];

/* ---- Research & projects (renders as "Projects") ---- */

export const PROJECTS = [
  {
    name: "My Future Dream School",
    org: "Website Project",
    meta: "Jul 2025 · Online",
    desc: "A website combining modern AI-based learning ideas with elements of the traditional Indian Gurukul system, presenting technology in a way that connects with educational values familiar to older generations.",
    tags: ["Web Design", "EdTech", "Artificial Intelligence"],
    featured: true,
  },
  {
    name: "Rewire Research Project: Ruthenium(II) Polypyridyl Complexes in Dye-Sensitized Solar Cells",
    org: "Independent Research · Pune",
    meta: "Exploratory research",
    desc: "Investigated how the molecular structure of ruthenium(II) polypyridyl complexes affects light absorption and electron transfer efficiency in dye-sensitized solar cells. Reviewed scientific literature, visited the National Chemical Laboratory (NCL), Pune several times, and worked through challenges in controlling TiO₂ layer thickness, dye loading time, light intensity and temperature. The project was not completed due to dye degradation, material cost and limited guidance, and it sharpened a move towards mathematics and physics.",
    tags: ["Chemistry", "Renewable Energy", "Experimental Research"],
    featured: true,
  },
];

/* ---- Achievements ---- */

export const AWARDS = [
  {
    icon: "",
    title: "SAT — 1520/1600",
    meta: "Top 2% of test-takers",
    detail: "Maths 770 · Reading & Writing 750.",
    link: "",
    featured: true,
  },
  {
    icon: "",
    title: "A Level Predicted Grades",
    meta: "BVRTSE, Pune",
    detail: "Maths A*, Probability & Statistics A*, Physics A*, Chemistry A*.",
    link: "",
    featured: true,
  },
  {
    /* NOTE: this figure comes from the CV's Key Achievements; the internship
       bullets describe observing rather than leading fixes. Verify before publishing. */
    icon: "",
    title: "Efficiency Optimization",
    meta: "United Foods Corporation (Deemah), 2024",
    detail: "Reduced downtime by 15% through effective troubleshooting during the internship.",
    link: "",
    featured: true,
  },
  {
    icon: "",
    title: "Community Service Impact",
    meta: "Lagos Food Bank partnership",
    detail: "Coordinated a food drive supporting over 200 families in partnership with the Lagos Food Bank.",
    link: "",
    featured: true,
  },
  {
    /* NOTE: 25% engagement figure taken from the CV; verify the source of this metric. */
    icon: "",
    title: "Innovative Learning Platform",
    meta: "My Future Dream School, 2025",
    detail: "Developed a website incorporating AI and Gurukul traditions, growing engagement by 25%.",
    link: "",
    featured: false,
  },
  {
    icon: "",
    title: "Certified Artificial Intelligence Course",
    meta: "Times of India",
    detail: "Completed a certified course in Artificial Intelligence.",
    link: "",
    featured: false,
  },
  {
    icon: "",
    title: "Class 10 — Grade A in Science, Maths & ICT",
    meta: "BVRTSE, Pune",
    detail: "Science 94/100 · Maths 90/100 · ICT 88/100.",
    link: "",
    featured: false,
  },
];

/* ---- Research interests ---- */

export const ARTICLES = [
  {
    title: "Electrical & Electronic Systems",
    outlet: "How electrical, sensor and control components interact in real-world machines",
    link: "",
  },
  {
    title: "Industrial Automation & Control",
    outlet: "Motion control, machine detection and end-to-end automated production",
    link: "",
  },
  {
    title: "System Reliability & Troubleshooting",
    outlet: "Fault detection, systematic diagnosis and keeping systems running efficiently",
    link: "",
  },
  {
    title: "Renewable Energy & Technology in Education",
    outlet: "Dye-sensitized solar cells, and using AI to bridge modern and traditional learning",
    link: "",
  },
];

/* ---- Community service ---- */

export const VOLUNTEER = {
  /* NOTE: only one quantified service figure exists in the CV, so two stats
     are shown instead of three. Add a third if there is a real number. */
  stats: [
    { value: "200+", label: "Families Supported" },
    { value: "3+", label: "Types of Service Drives" },
  ],
  orgs: [
    {
      name: "Sant Nirankari Charitable Foundation (SNCF)",
      role: "Volunteer · Lagos Branch",
      desc: "Involved in community service since childhood, participating in annual blood donation camps, tree plantation drives, food distribution and other social welfare activities, and working with people from different backgrounds.",
    },
    {
      name: "Food Drive with the Lagos Food Bank",
      role: "Volunteer · SNCF",
      desc: "Collected, organised and distributed food to families living in underserved areas of Lagos as part of a food drive run in collaboration with the Lagos Food Bank.",
    },
    {
      name: "Blood Donation & Tree Plantation Drives",
      role: "Volunteer · SNCF",
      desc: "Helped organise activities around blood donation camps and planted trees during plantation drives, learning the importance of environmental care.",
    },
  ],
};

/* ---- Interests & activities (renders on the /sports route) ---- */

export const SPORTS = [
  {
    icon: "",
    name: "Swimming",
    desc: "Experienced recreational swimmer for over 15 years, dedicating 3–4 hours each week.",
  },
  {
    icon: "",
    name: "Keyboard",
    desc: "Learned keyboard for several years during junior school through regular lessons and practice.",
  },
  {
    icon: "",
    name: "Drama",
    desc: "Participated in several school drama productions.",
  },
  {
    icon: "",
    name: "Group Dance",
    desc: "Performed in a themed group dance representing Indian culture.",
  },
  {
    icon: "",
    name: "Public Speaking",
    desc: "Prepared and delivered presentations on health and nutrition.",
  },
];

/* ---- Skills ---- */

export const SKILLS = [
  {
    group: "Core Competencies",
    items: ["Problem Solving", "Systematic Troubleshooting", "Teamwork", "Independent Learning", "Public Speaking", "Persistence"],
  },
  {
    group: "Engineering & Technical",
    items: ["Industrial Automation", "Sensors & Control Systems", "Fault Detection", "System Reliability", "Quality Control", "Artificial Intelligence (Certified)"],
  },
  {
    group: "Research",
    items: ["Literature Review", "Laboratory Research", "Controlling Experimental Variables"],
  },
  {
    group: "Languages",
    items: ["English (Native)", "Marathi (Native)", "Hindi (Native)", "French (Advanced)"],
  },
];

/* ---- Education (additional export — needs a component if you want to render it) ---- */

export const EDUCATION = [
  {
    school: "BVRTSE",
    location: "Pune, Maharashtra, India",
    level: "12th — A Level",
    dates: "",
    gpa: "Predicted: Maths A*, Probability & Statistics A*, Physics A*, Chemistry A*",
    coursework: ["Mathematics", "Physics", "Chemistry"],
  },
  {
    school: "BVRTSE",
    location: "Pune, Maharashtra, India",
    level: "Class 11",
    dates: "",
    gpa: "Maths 73/75 (91/100) · Mechanics 47/50 · Physics 83/100 · Chemistry 85/100",
    coursework: ["Mathematics", "Mechanics", "Physics", "Chemistry"],
  },
  {
    school: "BVRTSE",
    location: "Pune, Maharashtra, India",
    level: "Class 10",
    dates: "",
    gpa: "Science 94 (A) · Maths 90 (A) · ICT 88 (A) · English 74 (B) · French 74 (B) · Global Perspective 69 (C)",
    coursework: ["Science", "Mathematics", "ICT", "English", "French", "Global Perspective"],
  },
  {
    school: "BVRTSE",
    location: "Pune, Maharashtra, India",
    level: "Class 9",
    dates: "",
    gpa: "",
    coursework: ["Mathematics", "Science", "English", "French", "Global Perspective", "ICT"],
  },
];

export const TEST_SCORES = [
  {
    exam: "SAT Total Score: 1520/1600 (top 2%)",
    date: "",
    breakdown: [
      { label: "Maths", value: "770" },
      { label: "Reading & Writing", value: "750" },
    ],
  },
  {
    exam: "A Level — Predicted Grades",
    date: "",
    breakdown: [
      { label: "Mathematics", value: "A*" },
      { label: "Probability & Statistics", value: "A*" },
      { label: "Physics", value: "A*" },
      { label: "Chemistry", value: "A*" },
    ],
  },
];

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Work Experience", to: "/work" },
  { label: "Featured Projects", to: "/projects" },
  { label: "Areas of Interest", to: "/publications" },
  { label: "Achievements", to: "/awards" },
  { label: "Community Service", to: "/volunteering" },
  { label: "Beyond Academics", to: "/sports" },
];

/* NOTE: no LinkedIn or other profile in the CV. Add entries here once available,
   e.g. { label: "LinkedIn", href: PROFILE.socials.linkedin } */
export const FOOTER_PROFILES = [];
