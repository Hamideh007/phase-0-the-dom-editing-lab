const { assert } = require("chai");
const fs = require("fs");

describe("index.html", function () {
  it("contains a <body> tag", function () {
    const html = fs.readFileSync("./index.html", "utf-8");
    assert.include(html, "<body>");
  });

  it("contains a </body> tag", function () {
    const html = fs.readFileSync("./index.html", "utf-8");
    assert.include(html, "</body>");
  });

  it("contains an <h1> tag", function () {
    const html = fs.readFileSync("./index.html", "utf-8");
    assert.include(html, "<h1>");
  });

  it("contains a <p> tag", function () {
    const html = fs.readFileSync("./index.html", "utf-8");
    assert.include(html, "<p>");
  });

  it("within the <p>, it contains a <strong> tag", function () {
    const html = fs.readFileSync("./index.html", "utf-8");
    const p = html.match(/<p>.*<\/p>/s)[0];
    assert.include(p, "<strong>");
  });

  it("within the <p>, it contains an <em> tag", function () {
    const html = fs.readFileSync("./index.html", "utf-8");
    const p = html.match(/<p>.*<\/p>/s)[0];
    assert.include(p, "<em>");
  });

  it("within the <p>, it contains an <a> tag", function () {
    const html = fs.readFileSync("./index.html", "utf-8");
    const p = html.match(/<p>.*<\/p>/s)[0];
    assert.include(p, "<a>");
  });

  it("within the <body>, it contains a <table> tag", function () {
    const html = fs.readFileSync("./index.html", "utf-8");
    assert.include(html, "<table>");
  });
});
