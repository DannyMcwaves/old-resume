var express = require('express');
var router = express.Router();

/* GET home page. */
router
    .param("name", function (req, res, next, name) {
        req.name = name;
        next();
    })
    .get('/', function(req, res) {
        res.render('index', { title: 'Express' });
    })
    .get('/boni', function(req, res) {
        res.render('boni');
    })
    .get("/coverletter", function (req, res) {
        res.render("cover_letter");
    })
    .get("/coverletter/:name", function (req, res) {
        res.render(req.name);
    })

module.exports = router;
