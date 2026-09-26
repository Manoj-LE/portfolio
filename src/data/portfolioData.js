// ============================================================
// CENTRALIZED PORTFOLIO DATA — Edit here to update everywhere
// ============================================================

export const personal = {
  name: "Manoj L E",
  firstName: "Manoj",
  headline: "B.Tech Student — Artificial Intelligence & Data Science | Python, C | Aspiring DSA & ML Engineer",
  subheadline: "Building Intelligent Solutions with Code & Curiosity",
  about: `I am Manoj L E, a B.Tech student at Reva University, Bengaluru, specializing in Artificial Intelligence and Data Science. I am from Kalyanapura, Belur Taluk, Hassan District, Karnataka, and I am driven by curiosity and a strong desire to learn. I am developing my skills in Python, C, Data Structures & Algorithms, Machine Learning, and Data Analysis while building practical student projects and learning through Git and GitHub.`,
  availability: "Open to Internships • Collaborative Projects • Mentorship",
  email: "manojle452@gmail.com",
  emailHref: "mailto:manojle452@gmail.com",
  github: "https://github.com/Manoj-LE",
  linkedin: "https://www.linkedin.com/in/manoj-l-e-8798a1428/",
  location: "Bengaluru, India",
  from: "Kalyanapura, Belur Taluk, Hassan District, Karnataka, India",
  profileImage: "/profile.jpg",
  resumeUrl: "/resume/Manoj-Le-Resume.pdf",
};

export const education = [
  {
    id: 1,
    degree: "B.Tech — Artificial Intelligence & Data Science",
    institution: "Reva University",
    location: "Bengaluru, India",
    status: "Currently Pursuing",
    description:
      "Studying core AI/DS fundamentals including machine learning, data analysis, algorithms, and software engineering principles.",
    highlights: [
      "Artificial Intelligence",
      "Data Science",
      "Machine Learning",
      "Data Structures & Algorithms",
      "Python Programming",
    ],
  },
];

export const skills = [
  {
    category: "Programming Languages",
    icon: "Code2",
    items: [
      { name: "Python", level: "intermediate" },
      { name: "C", level: "intermediate" },
    ],
  },
  {
    category: "Core Computer Science",
    icon: "Cpu",
    items: [
      { name: "Data Structures & Algorithms", level: "learning" },
      { name: "Problem Solving", level: "intermediate" },
      { name: "Debugging", level: "intermediate" },
      { name: "Version Control", level: "intermediate" },
    ],
  },
  {
    category: "Data & Machine Learning",
    icon: "BrainCircuit",
    items: [
      { name: "pandas", level: "learning" },
      { name: "scikit-learn", level: "learning" },
      { name: "matplotlib", level: "learning" },
      { name: "Data Analysis", level: "learning" },
      { name: "Machine Learning", level: "learning" },
    ],
  },
  {
    category: "Tools & Environment",
    icon: "Wrench",
    items: [
      { name: "Git", level: "intermediate" },
      { name: "GitHub", level: "intermediate" },
      { name: "Jupyter Notebook", level: "intermediate" },
      { name: "GCC", level: "intermediate" },
      { name: "Makefile", level: "beginner" },
      { name: "pytest", level: "beginner" },
    ],
  },
];

// level: "learning" | "beginner" | "intermediate"
// "learning" = actively exploring (shown with learning badge)

export const learning = [
  {
    id: 1,
    title: "Data Structures & Algorithms",
    subtitle: "in Python",
    status: "Practicing",
    description:
      "Building proficiency in arrays, linked lists, trees, graphs, and classic algorithm patterns.",
    icon: "GitBranch",
  },
  {
    id: 2,
    title: "Competitive Programming",
    subtitle: "Problem Solving",
    status: "Learning",
    description:
      "Solving algorithmic problems to sharpen logic and problem-decomposition skills.",
    icon: "Trophy",
  },
  {
    id: 3,
    title: "Machine Learning",
    subtitle: "Fundamentals",
    status: "Exploring",
    description:
      "Understanding supervised learning, model evaluation, and end-to-end ML workflows.",
    icon: "BrainCircuit",
  },
  {
    id: 4,
    title: "Data Analysis",
    subtitle: "with Python",
    status: "Learning",
    description:
      "Practicing data cleaning, exploration, and visualization using pandas and matplotlib.",
    icon: "BarChart3",
  },
  {
    id: 5,
    title: "Open Source Development",
    subtitle: "GitHub & Collaboration",
    status: "Exploring",
    description:
      "Learning to contribute to open-source projects and collaborate using Git workflows.",
    icon: "Github",
  },
  {
    id: 6,
    title: "Problem Solving",
    subtitle: "First Principles",
    status: "Practicing",
    description:
      "Developing a systematic approach to breaking down and solving technical problems.",
    icon: "Lightbulb",
  },
];

export const projects = [
  {
    id: 1,
    number: "01",
    title: "DSA-in-Python",
    tagline: "Data Structures & Algorithms",
    description:
      "A student project containing Python implementations and explanations of data structures and algorithms, with a focus on practicing problem solving and understanding time and space complexity.",
    features: [
      "Arrays & Linked Lists",
      "Stacks & Queues",
      "Trees & Graphs",
      "Sorting & Searching",
      "Complexity Analysis",
    ],
    techStack: ["Python", "Jupyter Notebook", "pytest"],
    githubUrl: "https://github.com/Manoj-LE/DSA-in-Python",
    liveUrl: null,
    status: "In Progress",
    accentColor: "#7c6fef",
  },
  {
    id: 2,
    number: "02",
    title: "C-Basics-Projects",
    tagline: "C Programming Fundamentals",
    description:
      "A student collection of C programs covering programming fundamentals, pointers, dynamic memory, file handling, algorithms, and data structures.",
    features: [
      "Pointer Demonstrations",
      "File I/O Operations",
      "Dynamic Memory Management",
      "Algorithm Implementations",
      "Modular Code Structure",
    ],
    techStack: ["C", "GCC", "Makefile"],
    githubUrl: "https://github.com/Manoj-LE/C-Basics-Projects",
    liveUrl: null,
    status: "In Progress",
    accentColor: "#06b6d4",
  },
  {
    id: 3,
    number: "03",
    title: "Mini-ML-Project",
    tagline: "End-to-End Machine Learning Practice",
    description:
      "A student Machine Learning project for practicing data cleaning, feature engineering, model training, and evaluation in an end-to-end workflow.",
    features: [
      "Data Cleaning & Preprocessing",
      "Feature Engineering",
      "Model Training",
      "Model Evaluation",
      "Result Visualization",
    ],
    techStack: ["Python", "pandas", "scikit-learn", "matplotlib", "Jupyter"],
    githubUrl: "https://github.com/Manoj-LE/Mini-ML-Project",
    liveUrl: null,
    status: "In Progress",
    accentColor: "#10b981",
  },
];

export const strengths = [
  {
    id: 1,
    title: "Fast Learner",
    description:
      "Quickly picks up new tools, technologies, and concepts with genuine curiosity.",
    icon: "Zap",
  },
  {
    id: 2,
    title: "Reliable Execution",
    description:
      "Completes assigned tasks end-to-end and takes full ownership of commitments.",
    icon: "CheckCircle2",
  },
  {
    id: 3,
    title: "Problem Solver",
    description:
      "Enjoys breaking down complex problems and turning ideas into working solutions.",
    icon: "Puzzle",
  },
  {
    id: 4,
    title: "Clear Communication",
    description:
      "Values clear communication, teamwork, and effective collaboration.",
    icon: "MessageSquare",
  },
  {
    id: 5,
    title: "Learning Agility",
    description:
      "Continuously improves through projects, DSA practice, and active experimentation.",
    icon: "TrendingUp",
  },
  {
    id: 6,
    title: "Growth Mindset",
    description:
      "Embraces challenges as learning opportunities and is not deterred by initial difficulty.",
    icon: "Sprout",
  },
];

export const goals = [
  {
    id: 1,
    title: "Master DSA in Python",
    description: "Build a strong algorithmic foundation with Python.",
    icon: "Code2",
  },
  {
    id: 2,
    title: "Competitive Programming",
    description: "Participate regularly and improve problem-solving speed.",
    icon: "Trophy",
  },
  {
    id: 3,
    title: "Build ML Projects",
    description: "Create practical, end-to-end Machine Learning applications.",
    icon: "BrainCircuit",
  },
  {
    id: 4,
    title: "Open Source Contributions",
    description: "Contribute to meaningful open-source repositories on GitHub.",
    icon: "Github",
  },
  {
    id: 5,
    title: "Real-World Experience",
    description:
      "Gain internship experience in software, data, or ML engineering.",
    icon: "Briefcase",
  },
  {
    id: 6,
    title: "Collaborate & Grow",
    description:
      "Work with developers and mentors to accelerate professional growth.",
    icon: "Users",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Strengths", href: "#strengths" },
  { label: "Skills", href: "#skills" },
  { label: "Learning", href: "#learning" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Goals", href: "#goals" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];
