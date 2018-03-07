var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function(req, res) {
	res.send('This is the homepage');
});

app.get('/star_wars_episode/:episode_number?', function(req, res) {
	res.send('This is the page for episode ' + req.params.episode_number);
});

app.listen(3000, function() {
	console.log('The application is running on port 3000');
});
