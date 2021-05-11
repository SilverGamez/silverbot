const Discord = require('discord.js');
const mainSettings = require('../../config.js');

module.exports = {
    name: 'support',
    description: "Gives some important links",
    usage: '?support',
    category: 'misc',
    run: async(client, message, args) => {
        let embed = new Discord.MessageEmbed()
        .setTitle('VV Support links VV')
        .setDescription(`[Invite me](https://discord.com/oauth2/authorize?client_id=810004058529857566&permissions=8&scope=bot)\n[Support Server](https://discord.gg/WvtdbyRmz6)\nBotdev Contact: ${mainSettings.botdev}`)

        message.channel.send(embed)
    }
}