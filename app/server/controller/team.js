/**
 * Created by YouHan on 2016/9/19.
 */
var express = require('express');
var path = require('path');
var router = express.Router();
var team = require('./../service/team');

router.param('id', function (req, res, next, id) {
    // sample user, would actually fetch from DB, etc...
    req.params.id = id;
    next();
});


router.get('/all', function (req, res) {
    team.getAll().then(function (data) {
        res.send({
            success: true,
            data: data
        });
    }, function (error) {
        res.send({
            success: false,
            reason: error || 'error happen'
        });
    }).catch(function (error) {
        res.send({
            success: false,
            reason: error || 'error happen'
        });
    });

});

/**
 *      /project/:id?
 */
router.route('/:id?')
    .all(function (req, res, next) {
        // runs for all HTTP verbs first
        // think of it as route specific middleware!
        //TODO load data?
        next();
    })
    .get(function (req, res, next) {
        team.get(req.params.id).then(function (data) {
            res.send({
                success: true,
                data: data
            });
        }, function (reason) {
            res.send({
                success: false,
                reason: reason || 'error happen'
            });
        }).catch(function (error) {
            res.send({
                success: false,
                reason: error || 'error happen'
            });
        });
    })
    .post(function (req, res, next) {
        var params = req.body;
        team.add(params).then(function (data) {
            res.send({
                success: true,
                data: data
            });
        }, function (error) {
            res.send({
                success: false,
                reason: error || 'error happen'
            });
        }).catch(function (error) {
            res.send({
                success: false,
                reason: error || 'error happen'
            });
        });
    })
    .patch(function (req, res, next) {
        var params = req.body;
        team.update(params).then(function (data) {
            res.send({
                success: true,
                data: data
            });
        }, function (error) {
            res.send({
                success: false,
                reason: error || 'error happen'
            });
        }).catch(function (error) {
            res.send({
                success: false,
                reason: error || 'error happen'
            });
        });
    });

module.exports = router;