# Training Institute Course Catalogue

A clean, multi-page course catalogue web application built for a technical training institute. Built with **Node.js, Express, and EJS**, styled using **Shadcn UI design principles** and **Anthropic Claude's** warm editorial theme.

---

## 🌟 Features

- **Server-Side Rendering (SSR)**: Dynamic page rendering using EJS templates.
- **Shared Partials (DRY)**: Reusable components for `<head>`, header navigation, footer, and course cards.
- **Query String Filtering (`req.query`)**:
  - Keyword search across titles, summaries, and competencies.
  - Discipline filter (Development, Data & AI, Cloud & DevOps, Cybersecurity).
  - Proficiency level filter (Beginner, Intermediate, Advanced).
  - Sorting by popularity/rating and tuition fee (low-to-high, high-to-low).
- **Comprehensive Course Details**: Full syllabus modules breakdown, prerequisites, instructor profiles, and tuition cards.
- **Claude Design System**: Warm parchment tones (`#FAF8F5`), Claude terracotta accent (`#D97757`), Source Serif 4 headings, and Inter body text.
- **Error Handling**: Dedicated 404 handler returning explicit HTTP 404 statuses for non-existent routes and unknown course IDs.

---

## 📁 Project Structure

```
├── server.js                  # Express server, route definitions, req.query filtering & 404 handler
├── data/
│   └── courses.js             # Training institute courses dataset
├── public/
│   ├── css/
│   │   └── style.css          # Claude theme tokens & Shadcn component styles
│   └── images/                # Static image assets
├── views/
│   ├── partials/
│   │   ├── head.ejs           # Reusable HTML <head> with fonts and metadata
│   │   ├── header.ejs         # Reusable navigation bar with active route highlight
│   │   ├── footer.ejs         # Site footer with institute links and contact info
│   │   └── course-card.ejs    # Reusable card component for course listings
│   └── pages/
│       ├── index.ejs          # Home page with hero, statistics, and featured courses
│       ├── courses.ejs        # Catalogue with interactive search, filters, and results count
│       ├── course-detail.ejs  # Detailed syllabus, prerequisites, and sticky enrollment card
│       ├── about.ejs          # Institutional mission, methodology, and faculty bios
│       └── 404.ejs            # Clean 404 error page returning HTTP status 404
├── package.json
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/UmarM01/lowe-s-express-project.git
   cd lowe-s-express-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## 🛣️ Routes

| Route | Description |
| :--- | :--- |
| `GET /` | Home page featuring key statistics and featured courses |
| `GET /courses` | Course catalogue supporting `?search=`, `?category=`, `?level=`, `?sort=` |
| `GET /courses/:id` | Single course syllabus and enrollment details |
| `GET /about` | About the institute, instructors, and campus information |
| `*` (Catch-all) | Custom 404 error page |
