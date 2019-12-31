const express = require('express');
var path = require('path'); //otherwise it blows up if the page is refreshed. Why?
const app = express();
// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// same url but with HTTPS
const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}
// Instruct the app
// to use the forceSSL
// middleware
console.log("dir name " + __dirname);
app.use(forceSSL());

app.use(express.static(__dirname + '/dist/sheltonwelder'));
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/sheltonwelder/index.html'));
  });

app.listen(process.env.PORT || 8080);

// setInterval(function() {
//   http.get("https://sheltonwelder.herokuapp.com/");
// }, 300000); // every 5 minutes (300000)

