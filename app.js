var minify = require('html-minifier').minify;
var express = require('express');
var fs = require('fs');
var reload = require('reload');
var http = require('http');
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

var publicDir = path.join(__dirname, '');
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use("/", express.static(__dirname));

var server = http.createServer(app);
var exec = require('child_process').exec;
var cmd = 'guard';

exec(cmd, function(error, stdout, stderr) {
  // command output is in stdout
});

server.listen(app.get('port'), function(req, res) {
    fs.watchFile('src/index.html', function(curr, prev) {
        console.log("current mtime: " + curr.mtime);
        console.log("previous mtime: " + prev.mtime);
        if (curr.mtime.getTime() == prev.mtime.getTime());
        else {
            console.log("mtime not equal");
            // minifyFile();
            reload(server, app)
        }
    });

});

function minifyFile() {
    fs.readFile("src/index.html", 'utf8', function(err, data) {
        var result = minify(data, {
            removeEmptyAttributes: true,
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            collapseInlineTagWhitespace: true
        });
        fs.writeFile("index.html", result, function(error) {
            if (err)
                console.log(err);
        });

    });
}
