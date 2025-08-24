exports.index = (req, res) => {
   res.render('home', {title: 'Home page', activePage: 'home'});
};

exports.contact = (req, res) =>{
  res.render('contact', {title: 'Contact page', activePage: 'contact'});
};

exports.about = (req, res) => {
  res.render('about', {title: 'About page', activePage: 'about'});
};

exports.project = (req, res) => {
   res.render('project', {title: 'Porject page', activePage: 'project'});
};