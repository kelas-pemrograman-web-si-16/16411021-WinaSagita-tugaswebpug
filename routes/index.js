var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', {nama: 'Wina Sagita'})
})

router.get('/regist/', function(req, res, next) {
    res.render('regist', {nama: 'Wina Sagita'})
})

module.exports = router;