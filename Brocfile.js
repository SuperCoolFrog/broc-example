var babel = require('broccoli-babel-transpiler');
var watchify = require('broccoli-watchify');

var src = 'src';
var js = babel(src);
js = watchify(js, {
  browserify: {
    entries: ['./index.js'],
    debug:true
  },
  outputFile: 'bundled/app.js'
});

module.exports = js;
