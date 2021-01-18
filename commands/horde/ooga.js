const { Command } = require("discord.js-commando");

module.exports = class OogaCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'ooga',
			group: 'horde',
			memberName: 'ooga',
			description: 'Replies with ooga booga',
		});
	}

	run(message) {
		return message.say('OOGA BOOGA!');
	}
};