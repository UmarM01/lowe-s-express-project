const courses = [
  {
    id: "full-stack-web-dev",
    title: "Full-Stack Web Development Bootcamp",
    category: "Development",
    level: "Beginner",
    duration: "12 Weeks",
    format: "Hybrid (Live Classes + Lab)",
    price: 899,
    rating: 4.9,
    reviewCount: 234,
    featured: true,
    badge: "Bestseller",
    instructor: {
      name: "Sarah Chen",
      role: "Principal Software Engineer",
      bio: "12+ years building enterprise web apps at fintech and SaaS scale-ups."
    },
    summary: "Master modern web development from fundamentals to production-grade full-stack Node.js and React applications.",
    description: "This comprehensive bootcamp takes you from raw HTML, modern CSS, and core JavaScript up to building RESTful backend services with Express, database schema design with PostgreSQL, and building responsive client applications. Includes real-world team capstone projects, automated testing, and CI/CD deployment pipelines.",
    prerequisites: [
      "Basic computer literacy and text editor familiarity",
      "No prior coding experience required",
      "Dedication to 10-15 hours/week for hands-on labs"
    ],
    skillsLearned: [
      "Semantic HTML5 & Modern CSS",
      "JavaScript (ES6+) & DOM",
      "Node.js & Express Architecture",
      "Relational Databases (PostgreSQL)",
      "RESTful API Design & Auth",
      "Git & GitHub Version Control"
    ],
    syllabus: [
      {
        module: "Module 1",
        title: "Frontend Foundations & Modern CSS",
        topics: ["Semantic HTML", "Flexbox & Grid Systems", "Responsive Design", "Accessibility (a11y)"]
      },
      {
        module: "Module 2",
        title: "Core JavaScript & Asynchronous Programming",
        topics: ["ES6 Syntax", "DOM Manipulation", "Promises & async/await", "Fetch API & JSON"]
      },
      {
        module: "Module 3",
        title: "Backend Development with Node.js & Express",
        topics: ["Express Routing & Middleware", "RESTful Architecture", "Input Validation", "Error Handling"]
      },
      {
        module: "Module 4",
        title: "Database Modeling & Data Persistence",
        topics: ["SQL Fundamentals", "PostgreSQL Queries", "Connection Pools", "ORM Patterns"]
      },
      {
        module: "Module 5",
        title: "Security, Authentication & Deployment",
        topics: ["JWT & Session Auth", "Password Hashing", "CORS & Helmet", "Cloud Deployment"]
      }
    ],
    nextBatch: "November 16, 2026",
    seatsAvailable: 6
  },
  {
    id: "data-science-machine-learning",
    title: "Applied Data Science & Machine Learning",
    category: "Data & AI",
    level: "Intermediate",
    duration: "14 Weeks",
    format: "Online (Evenings & Weekends)",
    price: 1050,
    rating: 4.8,
    reviewCount: 189,
    featured: true,
    badge: "High Demand",
    instructor: {
      name: "Dr. Marcus Vance",
      role: "Lead Research Scientist",
      bio: "Former ML researcher at national labs with over 20 published papers on predictive modeling."
    },
    summary: "Transform messy real-world datasets into predictive insights and production machine learning models using Python.",
    description: "Equip yourself with practical mathematical foundations, statistical computing with NumPy and Pandas, exploratory data visualization, and end-to-end model training using Scikit-Learn. Learn how to diagnose overfitting, tune hyperparameters, and serve models via microservice APIs.",
    prerequisites: [
      "Basic programming experience in Python or another scripting language",
      "High school algebra and familiarity with basic statistics"
    ],
    skillsLearned: [
      "NumPy & Pandas Data Wrangling",
      "Exploratory Data Analysis (EDA)",
      "Supervised & Unsupervised Learning",
      "Feature Engineering & Selection",
      "Model Evaluation Metrics",
      "Model Deployment with FastAPI"
    ],
    syllabus: [
      {
        module: "Module 1",
        title: "Scientific Computing & Exploratory Analysis",
        topics: ["Vectorized NumPy Operations", "Pandas DataFrame Manipulation", "Matplotlib & Seaborn"]
      },
      {
        module: "Module 2",
        title: "Statistical Foundations & Data Cleaning",
        topics: ["Descriptive Statistics", "Hypothesis Testing", "Handling Missing Data", "Outlier Detection"]
      },
      {
        module: "Module 3",
        title: "Supervised Learning Algorithms",
        topics: ["Linear & Logistic Regression", "Decision Trees & Ensembles", "Random Forests", "Gradient Boosting"]
      },
      {
        module: "Module 4",
        title: "Unsupervised Learning & Clustering",
        topics: ["K-Means Clustering", "Hierarchical Clustering", "Principal Component Analysis (PCA)"]
      },
      {
        module: "Module 5",
        title: "Model Production & Deployment",
        topics: ["Model Serialization", "FastAPI Endpoints", "Docker Packaging", "Monitoring Model Drift"]
      }
    ],
    nextBatch: "December 1, 2026",
    seatsAvailable: 8
  },
  {
    id: "cloud-devops-architect",
    title: "Cloud Architecture & DevOps Engineering",
    category: "Cloud & DevOps",
    level: "Intermediate",
    duration: "10 Weeks",
    format: "Live Interactive (Online)",
    price: 950,
    rating: 4.9,
    reviewCount: 165,
    featured: true,
    badge: "Industry Favorite",
    instructor: {
      name: "Elena Rostova",
      role: "Cloud Solutions Architect",
      bio: "AWS & GCP certified architect who has modernized infrastructure for Fortune 500 enterprises."
    },
    summary: "Design resilient cloud infrastructure, containerize applications, and automate CI/CD pipelines at scale.",
    description: "Master modern infrastructure as code using Terraform, container orchestration with Docker and Kubernetes, and automated deployment pipelines using GitHub Actions. Build scalable, high-availability distributed systems with zero downtime.",
    prerequisites: [
      "Familiarity with Linux command line basics",
      "Fundamental understanding of networking (IP, DNS, HTTP)",
      "Basic scripting knowledge (Bash or Python)"
    ],
    skillsLearned: [
      "AWS Core Infrastructure (VPC, EC2, S3, IAM)",
      "Docker Containerization & Multi-Stage Builds",
      "Kubernetes Deployment & Pod Networking",
      "Infrastructure as Code with Terraform",
      "Automated CI/CD with GitHub Actions",
      "Cloud Monitoring & Prometheus/Grafana"
    ],
    syllabus: [
      {
        module: "Module 1",
        title: "Linux Systems & Cloud Infrastructure Basics",
        topics: ["Linux Administration", "Cloud Networking & VPCs", "Security Groups & IAM Policies"]
      },
      {
        module: "Module 2",
        title: "Containerization with Docker",
        topics: ["Dockerfiles", "Container Networking", "Volumes & Persisted State", "Docker Compose"]
      },
      {
        module: "Module 3",
        title: "Kubernetes Orchestration",
        topics: ["Pods, Deployments & Services", "ConfigMaps & Secrets", "Ingress Controllers", "Helm Charts"]
      },
      {
        module: "Module 4",
        title: "Infrastructure as Code (Terraform)",
        topics: ["Declarative Configuration", "State Management", "Modularization", "Multi-Environment Setups"]
      },
      {
        module: "Module 5",
        title: "Continuous Integration & Deployment (CI/CD)",
        topics: ["GitHub Actions Workflows", "Automated Testing Gates", "Canary Deployments", "Observability"]
      }
    ],
    nextBatch: "November 24, 2026",
    seatsAvailable: 4
  },
  {
    id: "cybersecurity-analyst",
    title: "Cybersecurity Analyst & Threat Defense",
    category: "Cybersecurity",
    level: "Beginner",
    duration: "10 Weeks",
    format: "Hybrid (Online + Cyber Range)",
    price: 820,
    rating: 4.7,
    reviewCount: 112,
    featured: false,
    badge: null,
    instructor: {
      name: "Tariq Al-Mansoor",
      role: "Security Operations Director",
      bio: "15+ years in defensive security, incident response, and national cyber defense exercises."
    },
    summary: "Learn defensive security operations, threat hunting, vulnerability assessments, and incident response techniques.",
    description: "Hands-on immersion into security incident and event management (SIEM), packet analysis with Wireshark, defensive firewalls, vulnerability scanning, and incident triage. Prepare for entry-level SOC Analyst and Security Operations roles.",
    prerequisites: [
      "Basic understanding of operating systems (Windows & Linux)",
      "Basic networking concepts (TCP/IP, subnetting)"
    ],
    skillsLearned: [
      "Network Traffic Analysis (Wireshark)",
      "SIEM Log Analysis (Splunk / Elastic)",
      "Vulnerability Scanning (Nessus/Nmap)",
      "Incident Response Frameworks",
      "Endpoint Security & Hardening",
      "Compliance & Threat Intelligence"
    ],
    syllabus: [
      {
        module: "Module 1",
        title: "Security Fundamentals & Network Defense",
        topics: ["Threat Landscape", "Defense in Depth", "OSI Model & Port Scanning", "Firewall Rules"]
      },
      {
        module: "Module 2",
        title: "Network Traffic Analysis & Packet Inspection",
        topics: ["Wireshark Deep Dive", "Detecting Anomalous Traffic", "DNS & HTTP Tunneling", "Malware Signatures"]
      },
      {
        module: "Module 3",
        title: "SIEM & Security Monitoring",
        topics: ["Log Ingestion", "Writing SIEM Queries", "Alert Triage & Correlation", "Incident Ticketing"]
      },
      {
        module: "Module 4",
        title: "Vulnerability Management & System Hardening",
        topics: ["CVSS Scoring", "Nessus Scanning", "OS Hardening Benchmarks", "Patching Strategies"]
      },
      {
        module: "Module 5",
        title: "Incident Handling & Forensic Basics",
        topics: ["NIST Incident Response Steps", "Memory Forensics", "Chain of Custody", "Post-Incident Reporting"]
      }
    ],
    nextBatch: "December 5, 2026",
    seatsAvailable: 10
  },
  {
    id: "advanced-react-architecture",
    title: "Advanced React & Frontend Architecture",
    category: "Development",
    level: "Advanced",
    duration: "8 Weeks",
    format: "Online (Evening Cohort)",
    price: 750,
    rating: 4.9,
    reviewCount: 140,
    featured: false,
    badge: "Trending",
    instructor: {
      name: "David Kim",
      role: "Staff Frontend Architect",
      bio: "Created core component design systems used by hundreds of thousands of daily active users."
    },
    summary: "Deep dive into performance optimization, custom hook abstractions, modern state machines, and micro-frontend architectures.",
    description: "Engineered for experienced developers wanting to master internal React rendering mechanics, concurrent features, state machine orchestration, server-side streaming, and atomic design system construction.",
    prerequisites: [
      "Proficiency in vanilla JavaScript and ES6+",
      "At least 1 year of practical React experience",
      "Understanding of asynchronous UI states"
    ],
    skillsLearned: [
      "React Fiber & Rendering Internals",
      "Advanced Custom Hooks & Closures",
      "State Management (Zustand, XState)",
      "Performance Profiling & Web Vitals",
      "Design Systems & Component Packaging",
      "End-to-End Testing (Playwright & Vitest)"
    ],
    syllabus: [
      {
        module: "Module 1",
        title: "React Internals & Rendering Lifecycle",
        topics: ["Fiber Tree Architecture", "Reconciliation & Diffs", "Concurrent Features", "Memory Leak Prevention"]
      },
      {
        module: "Module 2",
        title: "Component Composition & Design Patterns",
        topics: ["Compound Components", "Render Props & Slot Patterns", "Headless UI Principles", "Accessibility"]
      },
      {
        module: "Module 3",
        title: "State Management & State Machines",
        topics: ["Context Optimization", "Zustand & Immer", "Finite State Machines with XState", "Server State Sync"]
      },
      {
        module: "Module 4",
        title: "Performance Audits & Profiling",
        topics: ["Chrome Performance Tools", "Bundle Splitting", "Virtualization of Long Lists", "Optimizing INP/LCP"]
      }
    ],
    nextBatch: "January 10, 2027",
    seatsAvailable: 7
  },
  {
    id: "deep-learning-nlp",
    title: "Deep Learning & Generative AI Applications",
    category: "Data & AI",
    level: "Advanced",
    duration: "12 Weeks",
    format: "Hybrid (Online + GPU Lab)",
    price: 1199,
    rating: 4.8,
    reviewCount: 98,
    featured: false,
    badge: "Cutting Edge",
    instructor: {
      name: "Dr. Marcus Vance",
      role: "Lead Research Scientist",
      bio: "Specialist in transformer models and natural language understanding architectures."
    },
    summary: "Build, fine-tune, and deploy transformer architectures, embedding pipelines, and RAG systems using PyTorch and Hugging Face.",
    description: "Go beyond classic machine learning into modern neural network architectures. Learn backpropagation mathematics, train PyTorch vision and NLP networks, fine-tune open-source LLMs, and architect enterprise Retrieval-Augmented Generation (RAG) applications.",
    prerequisites: [
      "Strong Python programming experience",
      "Familiarity with linear algebra and calculus",
      "Prior experience with basic ML concepts"
    ],
    skillsLearned: [
      "PyTorch Neural Network Construction",
      "Convolutional & Recurrent Networks",
      "Transformer Architecture (Self-Attention)",
      "Hugging Face Transformers & Datasets",
      "Vector Databases & Semantic Search",
      "RAG Architecture & LLM Fine-tuning"
    ],
    syllabus: [
      {
        module: "Module 1",
        title: "Neural Networks & PyTorch Fundamentals",
        topics: ["Tensors & Autograd", "Perceptrons & Multi-Layer Networks", "Loss Functions & Optimizers"]
      },
      {
        module: "Module 2",
        title: "Computer Vision & Sequence Modeling",
        topics: ["CNN Architectures", "Transfer Learning with ResNet", "RNNs & LSTMs", "Attention Mechanisms"]
      },
      {
        module: "Module 3",
        title: "The Transformer & Hugging Face",
        topics: ["Self-Attention Mechanics", "BERT, RoBERTa & GPT", "Tokenization & Pre-processing", "Hugging Face Hub"]
      },
      {
        module: "Module 4",
        title: "Retrieval-Augmented Generation (RAG)",
        topics: ["Vector Embeddings", "ChromaDB / Pinecone", "Hybrid Search", "Prompt Engineering & Guardrails"]
      },
      {
        module: "Module 5",
        title: "Fine-Tuning & Quantization",
        topics: ["LoRA & QLoRA Techniques", "Model Evaluation & Benchmarking", "Serving with vLLM", "Optimization"]
      }
    ],
    nextBatch: "January 15, 2027",
    seatsAvailable: 5
  },
  {
    id: "site-reliability-engineering",
    title: "Site Reliability Engineering (SRE) & Observability",
    category: "Cloud & DevOps",
    level: "Advanced",
    duration: "8 Weeks",
    format: "Online (Weekend Intensive)",
    price: 880,
    rating: 4.8,
    reviewCount: 76,
    featured: false,
    badge: null,
    instructor: {
      name: "Elena Rostova",
      role: "Cloud Solutions Architect",
      bio: "10+ years engineering high-availability systems with 99.999% uptime requirements."
    },
    summary: "Establish SLIs/SLOs, automate incident response, conduct chaos engineering experiments, and build distributed tracing systems.",
    description: "Learn how modern high-scale engineering organizations keep systems reliable under stress. Master OpenTelemetry, Prometheus alerting, error budget management, incident commander workflows, and post-mortem analysis.",
    prerequisites: [
      "Comfortable with Linux systems and containers",
      "Experience running microservices in production",
      "Familiarity with cloud environments (AWS/GCP/Azure)"
    ],
    skillsLearned: [
      "Service Level Objectives (SLOs & SLIs)",
      "Error Budgets & Burn Rate Alerts",
      "OpenTelemetry Distributed Tracing",
      "Prometheus & Thanos at Scale",
      "Chaos Engineering Principles",
      "Blameless Post-Mortem Facilitation"
    ],
    syllabus: [
      {
        module: "Module 1",
        title: "Reliability Principles & SLO Frameworks",
        topics: ["Defining Meaningful SLIs", "Calculating Error Budgets", "Reliability Targets vs Velocity"]
      },
      {
        module: "Module 2",
        title: "Distributed Observability & OpenTelemetry",
        topics: ["Metrics, Logs, and Traces", "Auto-instrumentation", "Collector Pipelines", "Trace Context Propagation"]
      },
      {
        module: "Module 3",
        title: "Alerting, Incident Management & On-Call",
        topics: ["Symptom-based Alerting", "Incident Command Hierarchy", "Runbooks & Automation", "Communication"]
      },
      {
        module: "Module 4",
        title: "Resilience Testing & Chaos Engineering",
        topics: ["Chaos Mesh / Litmus", "Latency Injection", "Network Partitions", "Blameless Post-Mortem Writing"]
      }
    ],
    nextBatch: "February 1, 2027",
    seatsAvailable: 9
  },
  {
    id: "ethical-hacking-penetration-testing",
    title: "Offensive Security & Penetration Testing",
    category: "Cybersecurity",
    level: "Intermediate",
    duration: "10 Weeks",
    format: "Online (Hands-on Labs)",
    price: 920,
    rating: 4.9,
    reviewCount: 130,
    featured: false,
    badge: "Popular",
    instructor: {
      name: "Tariq Al-Mansoor",
      role: "Security Operations Director",
      bio: "Offensive Security Certified Professional (OSCP) with a decade of red teaming experience."
    },
    summary: "Master ethical penetration testing methodologies, web application vulnerability exploitation, and network pivoting.",
    description: "Step into the shoes of an attacker to discover vulnerabilities before malicious actors do. Practice reconnaissance, web attack vectors (SQLi, XSS, CSRF, SSRF), privilege escalation on Linux and Windows, and writing structured penetration testing reports.",
    prerequisites: [
      "Solid networking foundation (TCP/IP, routing, DNS)",
      "Comfort with Linux terminal and command-line tools",
      "Basic understanding of web protocols and cookies"
    ],
    skillsLearned: [
      "Reconnaissance & OSINT Techniques",
      "Network Scanning & Enumeration",
      "Web App Exploitation (OWASP Top 10)",
      "Privilege Escalation Techniques",
      "Metasploit & Burp Suite Professional",
      "Professional Pen-Test Reporting"
    ],
    syllabus: [
      {
        module: "Module 1",
        title: "Reconnaissance & Target Enumeration",
        topics: ["Passive OSINT", "Nmap Advanced Scanning", "Service Fingerprinting", "Subdomain Enumeration"]
      },
      {
        module: "Module 2",
        title: "Web Application Attacks (OWASP Top 10)",
        topics: ["Burp Suite Setup", "SQL Injection", "Cross-Site Scripting (XSS)", "Authentication Bypass"]
      },
      {
        module: "Module 3",
        title: "Network Exploitation & Metasploit",
        topics: ["Payload Crafting", "Exploit Selection", "Handler Configuration", "Evading Basic Antivirus"]
      },
      {
        module: "Module 4",
        title: "Privilege Escalation & Post-Exploitation",
        topics: ["Linux SUID & Cron Jobs", "Windows Services & Tokens", "Credential Dumping", "Lateral Movement"]
      },
      {
        module: "Module 5",
        title: "Remediation & Report Documentation",
        topics: ["CVSS Vulnerability Rating", "Executive Summaries", "Remediation Verification", "Ethics & Law"]
      }
    ],
    nextBatch: "January 20, 2027",
    seatsAvailable: 6
  }
];

// Helper functions for easy querying in routes
function getAllCourses() {
  return courses;
}

function getCourseById(id) {
  return courses.find(c => c.id.toLowerCase() === id.toLowerCase());
}

function getFeaturedCourses() {
  return courses.filter(c => c.featured);
}

function getCategories() {
  return [...new Set(courses.map(c => c.category))];
}

function getLevels() {
  return ["Beginner", "Intermediate", "Advanced"];
}

module.exports = {
  courses,
  getAllCourses,
  getCourseById,
  getFeaturedCourses,
  getCategories,
  getLevels
};

