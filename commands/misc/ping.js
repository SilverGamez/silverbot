const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    description: "Sends the bot ping",
    usage: '?ping',
    category: 'misc',
    run: async(client, message, args) => {
        const ping = Date.now() - message.createdTimestamp
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`Pinging!`)

    const msg = await message.channel.send(embed)
    setTimeout(() => {
      const embed2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`Pong! \`${ping}ms\``)
      msg.edit(embed2)
    }, 5000)
    }
}