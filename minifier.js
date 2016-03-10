var minifier = require('html-minifier').minify;
var fs = require('fs');


fs.readFile("src/index.html", 'utf8', function(err, data) {
    var result = minify(data, {
        removeEmptyAttributes: true,
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeEmptyElements: true,
        collapseInlineTagWhitespace: true
    });
    fs.writefile("index.html", result, function(error) {
        if (err)
            console.log(err);
    });

});
