/*
    :客户端入口文件
    :Create 5.18
    :Author bbei
    :Modify 
*/

//引用express
const express = require('express');
//引用express-handlebars 模板引擎
const handlebars = require('express-handlebars');

//创建app应用
const app = express();

//创建页面模板main.hbs
const hbs = handlebars.create({
    defaultLayout: 'main',
    extname: '.hbs',
    partialsDir: __dirname + '/views/partials', // 片段文件路径
    layoutsDir: __dirname + '/views/layouts'// 模板文件路径
});

//绑定端口
app.set('port', process.env.PORT || 3000);

//绑定模板文件路径
app.set('views', __dirname + "/views");

//绑定模板引擎
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

//使用static中间件，指定public目录为静态资源（该目录文件不做任何处理）
app.use(express.static(__dirname + '/public'));

//home路由
app.get('/', (req, res) => {
    res.render('login', {
        title: "Home Page",
        layout: ''
    });
});

//about路由
app.get('/home', (req, res) => {
    res.render('home', {
        title: 'About Page'
    });
});

app.listen(app.get('port'), () => {
    console.log('Server started with port ' + app.get('port'))
});






