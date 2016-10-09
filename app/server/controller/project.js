***REMOVED***
 * Created by YouHan on 2016/9/19.
***REMOVED***
var express = require('express');
var path = require('path');
var router = express.Router();
var project = require('./../service/project');

router.param('id', function (req, res, next, id) {
    // sample user, would actually fetch from DB, etc...
    req.params.id = id;
    next();
***REMOVED***


router.get('/all', function (req, res) {
    project.getAll().then(function (data) {
        res.send({
            success: true,
            data: data
        ***REMOVED***
    }, function (error) {
        res.send({
            success: false,
            reason: error || 'error happen'
        ***REMOVED***
    ***REMOVED***

***REMOVED***

***REMOVED***
 *      /project/:id?
***REMOVED***
router.route('/:id?')
    .all(function (req, res, next) {
        // runs for all HTTP verbs first
        // think of it as route specific middleware!
        //TODO load data?
        next();
    })
    .get(function (req, res, next) {
        project.get(req.params.id).then(function (data) {
            res.send({
                success: true,
                data: data
            ***REMOVED***
        }, function (reason) {
            res.send({
                success: false,
                reason: reason || 'error happen'
            ***REMOVED***
        ***REMOVED***
    })
    .post(function (req, res, next) {
        var params = req.body;
        project.add(params).then(function () {
            res.send({
                success: true
            ***REMOVED***
        }, function (error) {
            res.send({
                success: false,
                reason: error || 'error happen'
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***

module.exports = router;