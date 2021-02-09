// Import libraries
require('dotenv').config();
const Discord = require("discord.js");
const path = require("path");
const express = require('express');
const passport = require('passport');

// Environment variables
const app = express();
const port = 3000;
const routes = require('./routes');

// Passport Authentication Strategies
require('./strategies/discord.strategy');


app.set('views', path.join(__dirname,'..','views'));
app.set('view engine', 'ejs');

// Basic Routing
app.get('/', (req, res) => {
	res.render('index');
});

app.get('/login', (req, res) => {
	res.redirect('/api/auth/authenticate');
});

app.use('/api', routes);

app.use(passport.initialize());
app.use(passport.session());

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

// Bot client login (prevent login for now; Bot is unused)
// client.login(process.env.APP_TOKEN); 
console.log(process.env.APP_TOKEN);