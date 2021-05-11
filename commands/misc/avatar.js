const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    description: "Sends a members avatar",
    usage: '?avatar <@user>(optional)',
    category: 'misc',
    run: async(client, message, args) => {
        let member1 = message.mentions.users.first() || message.author

    let avatar = member1.displayAvatarURL({size: 1024})
    const w = new Discord.MessageEmbed()
    .setDescription(`${member1}'s avatar`)
    .setColor(`RANDOM`)
    .setImage(avatar);
    message.channel.send(w)
    }
}