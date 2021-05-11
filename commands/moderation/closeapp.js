const Discord = require('discord.js');

module.exports = {
    name: 'closeapp',
    description: "Closes an application",
    usage: '?closeapp',
    category: 'moderation',
    run: async(client, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You cant do that');
    if(!message.channel.name.includes(`application-`)) return message.channel.send('You cant do that here!');

    message.channel.delete();
    }
}