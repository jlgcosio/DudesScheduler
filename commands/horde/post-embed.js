const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

// Sample embed command
module.exports = class PostEmbedCommand extends Command {
    constructor(client){
        super(client, {
			name: 'post',
			group: 'horde',
			memberName: 'embed',
            description: 'Posts a specific embed message',
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
        // Creates new MessageEmbed object
        const msg = new MessageEmbed()
            .setTitle(title)
            .setDescription(description)
            .setImage(image);

        console.log(image);
        return this.client.channels.cache.get('800659640362467340').send(msg);
    }

    
}