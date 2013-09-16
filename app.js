var express = require('express');
var routes = require('./routes');
var expressLayouts = require('express-ejs-layouts');
var app = module.exports = express.createServer();


// Configuration

app.configure(function(){
  	app.set('views', __dirname + '/views');
  	app.set('view engine', 'ejs');
  	app.use(express.bodyParser());
  	app.use(express.methodOverride());
	app.use(expressLayouts)
  	app.use(app.router);
  	app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  	app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);

app.listen(5000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
