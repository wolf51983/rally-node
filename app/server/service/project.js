***REMOVED***
 * Created by YouHan on 2016/9/19.
***REMOVED***
var dao = require('./../model/project');


exports.add = function (data) {
    return dao.add(data);
};

exports.get = function (id) {
    return dao.get(id);
};