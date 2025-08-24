exports.index = (req, res) => {
   res.render('home', {title: 'Home page'});
};

exports.contact = (req, res) =>{
  res.render('contact', {title: 'Contact page'});
};

exports.about = (req, res) => {
  res.render('about', {title: 'About page'});
};

exports.project = (req, res) => {
   res.render('project', {title: 'Porject page'});
};