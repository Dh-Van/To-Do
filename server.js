const http = require('http');
const express = require('express');
const path = require('path');

const app = express();

// Parse JSON bodies
app.use(express.json());

// Serve static files from the "express" directory
app.use(express.static("express"));

// Default URL for the website
app.use('/', function (req, res) {
	// __dirname: It will resolve to your project folder.
	res.sendFile(path.join(__dirname + '/express/index.html'));
});

const server = http.createServer(app);
const port = 3000;

server.listen(port);
console.debug('Server listening on port ' + port);