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

client.registry
	.registerDefaultTypes()
	.registerGroups([
		['horde', 'Your First Command Group'],
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
	client.user.setActivity('with Commando');
});

client.on('error', console.error);

client.login(config.token);