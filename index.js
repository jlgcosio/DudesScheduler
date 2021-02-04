// Import libraries
const Discord = require("discord.js");
const path = require("path");
const config = require("./config.json");

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