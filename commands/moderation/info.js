const Discord = require('discord.js');
const mainSettings = require('../../config.js');

module.exports = {
    name: 'info',
    description: "Sends info about server",
    usage: '?info',
    category: 'moderation',
    run: async(client, message, args) => {
        const memberCount1 = message.guild.members.cache.filter(member => !member.user.bot).size
        const memberCount2 = message.guild.memberCount
        const botCount = message.guild.members.cache.filter(member => member.user.bot).size
        const embed = new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setDescription(`****About bot****\n----------------\n**Invite:** ${mainSettings.prefix}invite\n**Bot prefix:** ${mainSettings.prefix}\n**Bot server count:** I am in ${client.guilds.cache.size} guilds!\n**Botdev:** I was created by ${mainSettings.botdev}\n\n****Server info****\n-------------------`)
        .addFields(
            {name: 'Server Owner', value: `The server owner is ${message.guild.owner}`},
            {name: 'All member count', value: `This server has ${message.guild.memberCount} members`},
            {name: 'Human Count', value: `This server has ${memberCount1} users`},
            {name: 'Bot count', value: `This server has ${botCount} bots`},
            {name: 'Emoji count', value: `This server has ${message.guild.emojis.cache.size} emojis`},
            {name: 'Role count', value: `This server has ${message.guild.roles.cache.size} roles`},
            
        )
        .setThumbnail(message.guild.iconURL)
        .setTimestamp()
        message.channel.send(embed)
    }
}