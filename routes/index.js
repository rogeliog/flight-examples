var cons = require('consolidate');

exports.index = function(req, res){
  res.render('index', { title: 'Express',
    partials: {
      head: 'head',
      javascripts: 'javascripts',
      examples: 'examples',
      'examples/hello_world': 'examples/hello_world',
      'examples/color_matcher': 'examples/color_matcher'
    }
  });
};
