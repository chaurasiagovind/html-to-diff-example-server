//var faker = require("faker");
var Convert = require('ansi-to-html');
var appRouter = function (app) {

  app.get("/coco", function (req, res) {

var fs = require('fs'),
    HtmlDiffer = require('html-differ').HtmlDiffer,
    logger = require('html-differ/lib/logger');
 
var html1 = fs.readFileSync('1.html', 'utf-8'),
    html2 = fs.readFileSync('2.html', 'utf-8');
 
var options = {
        ignoreAttributes: [],
        compareAttributesAsJSON: [],
        ignoreWhitespaces: true,
        ignoreComments: true,
        ignoreEndTags: false,
        ignoreDuplicateAttributes: false
    };
 
var htmlDiffer = new HtmlDiffer(options);
 
var diff = htmlDiffer.diffHtml(html1, html2),
    isEqual = htmlDiffer.isEqual(html1, html2),

    difference = logger.getDiffText(diff, { charsAroundDiff: 40 });
 //console.log('diff',res)
logger.logDiffText(diff, { charsAroundDiff: 40 });


var convert = new Convert();

 difference = convert.toHtml(difference);

res.status(200).send({ message:  difference});
  });


}

module.exports = appRouter;
