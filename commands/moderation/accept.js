const Discord = require('discord.js');

module.exports = {
    name: 'accept',
    description: "Used in some servers",
    usage: '?accpet',
    category: 'moderation',
    run: async(client, message, args) => {
        message.member.roles.add(message.guild.roles.cache.get('834012930475425812'))
            .then(message.delete()) 
            .catch(err => message.channel.send('You cant use this'));
    }
}