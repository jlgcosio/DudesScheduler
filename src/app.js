// Import libraries
require('dotenv').config();
const Discord = require("discord.js");
const path = require("path");
const express = require('express');
const passport = require('passport');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require('express-session');
const Store = require('connect-mongo')(session);

// Environment variables
const app = express();
const port = 3000;
const routes = require('./routes');

// Connect to database
mongoose.connect(process.env.MONGODB_URI, 
	{
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then((result) => {
		console.log(`Connected to db ${process.env.MONGODB_URI}`);
	}).catch((err) => {
		console.log(err);
	});

// Passport Authentication Strategies
require('./strategies/discord.strategy');

// Set express views
app.set('views', path.join(__dirname,'..','views'));
app.set('view engine', 'ejs');

// Passport initialization
app.use(passport.initialize());
app.use(passport.session());

app.use( session({
	secret: `${process.env.APP_TOKEN}`,
	cookie: {
		maxAge: 60000 * 60 *24
	},
	saveUninitialized: false,
	resave: false,
	store: new Store({mongooseConnection: mongoose.connection})
}));

app.use(bodyParser.json());

// Basic Routing
app.get('/', (req, res) => {
	res.render('index');
});

app.get('/login', (req, res) => {
	res.redirect('/api/auth/authenticate');
});

app.use('/api', routes);

app.listen(port, () => {
	console.log(`Express listening at http://localhost:${port}`);
});
// Disable bot on maintenance mode
if(!process.env.BOT_MAINTENANCE_MODE){
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
	client.login(process.env.APP_TOKEN);
}
else {
	console.log('BOT IN MAINTENANCE');
}