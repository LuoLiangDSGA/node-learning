var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/', function (req, res) {
    res.send('Got a POST request')
});

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
});

app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

// 路由参数用法
// Route path: /users/:userId/books/:bookId
// Request URL: http://localhost:3000/users/34/books/8989
// req.params: { "userId": "34", "bookId": "8989" }
app.get('/users/:userId', function (req, res) {
    res.send(req.params);
});

// 多个回调函数处理一个路由
app.get('/example/b', function (req, res, next) {
    console.log('the response will be sent by the next function ...');
    next();
}, function (req, res) {
    res.send('Hello from B!')
});

// 使用回调函数数组处理一个路由
const cb0 = function (req, res, next) {
    console.log('CB0');
    next();
}

const cb1 = function (req, res, next) {
    console.log('Hello from C!');
    next();
}

const cb2 = function (req, res, next) {
    res.send('CB2');
}

app.get('/example/c', [cb0, cb1, cb2])