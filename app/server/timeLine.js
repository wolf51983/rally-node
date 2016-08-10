/**
 * Created by YouHan on 2016/8/9.
 */
var express = require('express');
var router = express.Router();
var path = require('path');
var chart = require('./controller/chart');
var event = require('./controller/event');

router.use('/chart', chart);
router.use('/event', event);

router.get('/', function (req, res) {
    res.sendfile(path.resolve(__dirname + './../client/views/timeLine/timeLine.html'));
});

router.get('/image', function (req, res) {
    res.sendfile(path.resolve(__dirname + './../client/views/timeLine/image.html'));
});

module.exports = router;