var minify = require('minify');

exports = module.exports = function (options) {

  return function js(file, done) {
    file.read(function (err, string) {
      if (err) return done(err);
      file.string = minify.js(string);
      done()
    });
  });

  return function css(file, done) {
    file.read(function (err, string) {
      if (err) return done(err);
      file.string = minify.css(string);
      done()
    });
  });