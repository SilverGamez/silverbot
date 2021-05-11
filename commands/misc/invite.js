const Discord = require('discord.js');

module.exports = {
    name: 'invite',
    description: "Invites the bot",
    usage: '?invite',
    category: 'misc',
    run: async(client, message, args) => {
        const inviteEmbed = new Discord.MessageEmbed()
            .setTitle("Invite")
            .setColor(`RANDOM`)
            .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
            .setTimestamp()
            .setDescription(`Clicking the title will invite the bot`)
            message.channel.send(inviteEmbed)
    }
}