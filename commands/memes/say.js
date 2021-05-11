const Discord = require('discord.js');

module.exports = {
    name: 'say',
    description: "Says your text",
    usage: '?Say <Text>',
    category: 'memes',
    run: async(client, message, args) => {
        let suggestion = args.slice(0).join(' ');
        message.channel.bulkDelete(1)
        .then(message.channel.send(suggestion));
    }
}