// Import libraries
const { CommandoClient } = require("discord.js-commando");
const path = require("path");
const config = require("./config.json");

// Instantiate bot client
const client = new CommandoClient({
    commandPrefix: config.prefix,
    owner: config.ownerID,
    invite: config.invite
});

// Commando CommandRegistry
client.registry
	.registerDefaultTypes()
	.registerGroups([
		['horde', 'Test Commands'],
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, 'commands'));

// Display console message on bot login
client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
	client.user.setActivity('with Commando');
});

// Basic Error Handling
client.on('error', console.error);

// Bot client login
client.login(config.token);