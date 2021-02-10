const { series, parallel, src, dest } = require("gulp");
const del = require("del");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const tsify = require("tsify");

function cleanDist(cb) {
  cb();
}

function copyHTML(cb) {
  cb();
}

function generateJS(cb) {
  cb();
}

exports.default = series(cleanDist, parallel(generateJS, copyHTML));
