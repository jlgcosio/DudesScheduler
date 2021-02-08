// Import libraries
const Discord = require("discord.js");
const path = require("path");
const config = require("../config.json");
const express = require('express');

// Environment variables
const app = express();
const port = 3000;
const route = require('./routes');

app.set('views', path.join(__dirname,'..','views'));
app.set('view engine', 'ejs');

// Basic Routing
app.get('/', (req, res) => {
	res.render('index');
});

app.get('/login', (req, res) => {
	res.redirect(config.oauth_url);
});

app.use('/api', route);

app.listen(port, () => {
	console.log(`Express listening at http://localhost:${port}`);
});



//Bot config and login
// Instantiate bot client
const client = new Discord.Client()

// Display console message on bot login
client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
	client.user.setActivity('camp the quest channel');
});

// Basic Error Handling
client.on('error', console.error);

// Bot client login
client.login(config.token);