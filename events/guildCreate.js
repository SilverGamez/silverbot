const Discord = require('discord.js');
const { prefix } = require('../config.js');

module.exports.run = async(client, guild) => {
    const mainChannel = guild.systemChannel
    if(!mainChannel) return
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`Hello! My prefix is \`${prefix}\`\nStart with \`${prefix}help\``)
    .setFooter(`Thanks to inviting me to **${guild}**`)

    mainChannel.send(embed)

    client.guilds.cache.get(guild.id).members.cache.get(client.user.id).setNickname(`[ ${prefix} ] SilverBotz`);
}