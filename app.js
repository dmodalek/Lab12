var express = require('express'),
	app = express.createServer(),
	path = require('path');


app.configure(function() {
	app.set('views', path.join( __dirname, '/views'));
	app.set('view engine', 'hbs');
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.compiler({ src: path.join(__dirname, '/public'), enable: ['less'] }));
	app.use(express.static(path.join(__dirname + '/public')));
	app.use(app.router);
});


app.configure('development', function() {
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function() {
	app.use(express.basicAuth('ppf', 'the.Shit'));
	app.use(express.errorHandler());
});


app.get('/', function(req, res) {
	res.render('index', { 'title' : 'Lab12 Hello!' });
});



app.listen(3000, function() {
	//console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
	console.log("Express server listening in %s mode", app.settings.env);
});