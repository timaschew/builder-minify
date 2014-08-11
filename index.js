var minify = require('minify');

module.exports.js = function(options) {
  return function js(file, done) {
    return file.read(function(err, string) {
      if (err) return done(err);
      file.string = minify.js(string);
      return done();
    });
  };
};

module.exports.css = function(options) {
  return function css(file, done) {
    return file.read(function(err, string) {
      if (err) return done(err);
      file.string = minify.css(string);
      return done();
    });
  };
};
