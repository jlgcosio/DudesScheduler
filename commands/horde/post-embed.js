const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

// Sample embed command
module.exports = class PostEmbedCommand extends Command {
    constructor(client){
        super(client, {
			name: 'post',
			group: 'horde',
			memberName: 'embed',
            description: 'Command for testing hard-coded embeds',
            args: [
                {
                    'key': 'title',
                    'prompt': 'Embed title',
                    'type': 'string'
                },
                {
                    'key': 'description',
                    'prompt': 'Embed description',
                    'type': 'string'
                },
                {
                    'key': 'image',
                    'prompt': 'Embed image',
                    'type': 'string',
                    'default': ''
                }
            ]
		})
    }

    run(message, {title, description, image}){
        // Set limit for sign ups (user input)
        var limit = 10
        // Get every user who reacted (separate listener class)
        var fieldValues =["first", "second", "third"];
        
        // Create embed fields
        var fieldTitle = "Players: " + (fieldValues.length) + "/" + limit;
        var fields = [
            {
                name: fieldTitle,
                value: fieldValues,
                inline: true
            },
            {
                name: "Field 2",
                value: "Field 2 value",
                inline: true
            },
            {
                name: "Field 3",
                value: "Field 3 value",
                inline: false
            },
        ];

        // Creates new MessageEmbed object
        const msg = new MessageEmbed()
            .setTitle(title)
            .setDescription(description)
            .setImage(image)
            .addFields(fields);

        console.log(image);
        return this.client.channels.cache.get('800659640362467340').send(msg);
    }
}