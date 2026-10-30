const express = require('express');
const path = require('path');
const {
  courses,
  getAllCourses,
  getCourseById,
  getFeaturedCourses,
  getCategories,
  getLevels
} = require('./data/courses');

const app = express();
const PORT = process.env.PORT || 3000;

// Configure View Engine & Views Directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve Static Assets (CSS, Images, etc.)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

/**
 * Route: GET /
 * Purpose: Institute Home Page featuring key metrics, hero CTA, and featured courses
 */
app.get('/', (req, res) => {
  const featuredCourses = getFeaturedCourses();
  const categories = getCategories();

  res.render('pages/index', {
    title: 'Apex Technical Institute | Professional Engineering & Tech Training',
    activePage: 'home',
    featuredCourses,
    categories,
    totalCourses: courses.length
  });
});

/**
 * Route: GET /courses
 * Purpose: Course catalogue with query string filtering (search, category, level, sort)
 */
app.get('/courses', (req, res) => {
  const { search, category, level, sort } = req.query;

  let filtered = getAllCourses();

  // 1. Text Search Filter (title, summary, skills)
  if (search && search.trim() !== '') {
    const q = search.trim().toLowerCase();
    filtered = filtered.filter(course =>
      course.title.toLowerCase().includes(q) ||
      course.summary.toLowerCase().includes(q) ||
      course.description.toLowerCase().includes(q) ||
      (course.skillsLearned && course.skillsLearned.some(s => s.toLowerCase().includes(q)))
    );
  }

  // 2. Category Filter
  if (category && category !== 'all' && category.trim() !== '') {
    filtered = filtered.filter(
      course => course.category.toLowerCase() === category.trim().toLowerCase()
    );
  }

  // 3. Level Filter
  if (level && level !== 'all' && level.trim() !== '') {
    filtered = filtered.filter(
      course => course.level.toLowerCase() === level.trim().toLowerCase()
    );
  }

  // 4. Sorting Filter
  if (sort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else {
    // Default: Sort by popularity / rating and featured
    filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || b.rating - a.rating);
  }

  res.render('pages/courses', {
    title: 'Course Catalogue | Apex Technical Institute',
    activePage: 'courses',
    courses: filtered,
    categories: getCategories(),
    levels: getLevels(),
    currentQuery: {
      search: search || '',
      category: category || 'all',
      level: level || 'all',
      sort: sort || 'default'
    },
    totalMatches: filtered.length
  });
});

/**
 * Route: GET /courses/:id
 * Purpose: Detailed page for a specific course
 */
app.get('/courses/:id', (req, res) => {
  const courseId = req.params.id;
  const course = getCourseById(courseId);

  if (!course) {
    return res.status(404).render('pages/404', {
      title: 'Course Not Found | Apex Technical Institute',
      activePage: 'courses',
      message: `We could not find any course matching ID "${courseId}".`
    });
  }

  // Related courses in the same category
  const relatedCourses = courses
    .filter(c => c.category === course.category && c.id !== course.id)
    .slice(0, 2);

  res.render('pages/course-detail', {
    title: `${course.title} | Apex Technical Institute`,
    activePage: 'courses',
    course,
    relatedCourses
  });
});

/**
 * Route: GET /about
 * Purpose: Institute background, credentials, instructional team, and campus facilities
 */
app.get('/about', (req, res) => {
  res.render('pages/about', {
    title: 'About Us | Apex Technical Institute',
    activePage: 'about',
    stats: {
      graduates: '4,200+',
      placementRate: '94%',
      partnerCompanies: '120+',
      instructors: '35+'
    }
  });
});

/**
 * Catch-All 404 Handler for undefined routes
 */
app.use((req, res) => {
  res.status(404).render('pages/404', {
    title: '404 - Page Not Found | Apex Technical Institute',
    activePage: '',
    message: `The requested URL "${req.originalUrl}" was not found on this server.`
  });
});

/**
 * Global Error Handler
 */
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).send('Internal Server Error');
});

// Start Server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

module.exports = app;

