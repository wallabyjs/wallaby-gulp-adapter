var gutil = require('gulp-util');
var through = require('through2');

module.exports = function (gulpPlugin) {
  return function (file, done) {
    var inputStream = through.obj();
    inputStream.write(new gutil.File({cwd: '', base: '', path: file.path, contents: new Buffer(file.content)}));
    inputStream.pipe(gulpPlugin).pipe(through.obj(function (res) {
      done(res.contents.toString());
    }));
  };
};