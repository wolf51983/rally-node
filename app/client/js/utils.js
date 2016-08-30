***REMOVED***
 * Created by YouHan on 2016/8/30.
***REMOVED***

var api = {
    get: get,
    post: post
};

function serialize(obj) {
    var str = [];
    for (var p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return str.join("&");
}

function get(option) {
    return new Promise(function (resolver, rejector) {
        var xhr = new XMLHttpRequest();
        var url = option.url;
        if (option.params) {
            url += serialize(option.params);
        }
        xhr.open('GET', url, true);
        xhr.send();

        xhr.onerror = function (error) {
            rejector(error);
        };
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                resolver(JSON.parse(xhr.responseText));
            }
        };
        xhr.onabort = function (error) {
            rejector(error);
        };

    ***REMOVED***
}

function post(option) {
    return new Promise(function (resolver, rejector) {
        var xhr = new XMLHttpRequest();
        xhr.setRequestHeader('Content-Type', option.contentType || 'application/json;charset=UTF-8');
        xhr.open('POST', option.url, true);
        xhr.send(JSON.stringify(option.data));

        xhr.onerror = function (error) {
            rejector(error);
        };
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                resolver(JSON.parse(xhr.responseText));
            }
        };
        xhr.onabort = function (error) {
            rejector(error);
        };
    ***REMOVED***
}

module.exports = {
    api: api
};