var minify = require('minify');

module.exports = function(options) {
  return {
    js: function(file, done) {
      return file.read(function(err, string) {
        if (err) return done(err);
        file.string = minify.js(string);
        return done();
      });
    },
    css: function(file, done) {
      return file.read(function(err, string) {
        if (err) return done(err);
        file.string = minify.css(string);
        return done();
      });
    }
  };
};