const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
   res.render('home', { title: 'Home Page' });
});

router.get('/about',(req, res) => {
   res.render('about', { title: 'About Page' });
});

router.get('/project', (req, res) => {
  res.render('project', { title: 'Project Page' });
});

module.exports = router;
