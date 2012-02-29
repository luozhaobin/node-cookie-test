var util = require('util');
var url = require('url');
var express = require('express');
var app = express.createServer();
app.use(express.logger());
app.use(express.cookieParser());
app.use(express.bodyParser());

//设置静态资源目录
var static_dir = __dirname+'/public';
app.use(express.static(static_dir));

//生成验证码
app.get('/api/captcha', function(req, res) {
    res.cookie('captcha', '2b', { path: "/" });
    res.send('{"msg":"gen captcha"}');
});

//接收验证码
app.post('/api/captcha', function(req, res) {
    var captcha = req.cookies.captcha;
    console.log(captcha);
    res.send('{"msg":"fetch captcha"}');
});
app.listen(3000);

