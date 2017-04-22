/* Initial declarations */
var express = require("express");
var app = express();
var server = require('http').createServer(app);
// var io = require('socket.io').listen(server);

var bodyParser = require("body-parser");
var path  = require('path');

/** connect to MySQL*/
// var mysql = require('mysql')
// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'fse',
//   password: 'fse',
//   database: 'fsechat'
// })
// connection.connect();

/** view engine **/
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/** Body parser middleware **/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

/** set static path **/
app.use(express.static(path.join(__dirname, 'public')));

/** Routes **/
// welcome page
app.get("/", function(req, res){
	res.render('index');
});

server.listen(4000, function(){
	console.log('Server started on port 4000...');
});