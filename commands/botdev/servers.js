const Discord = require('discord.js');

module.exports = {
    name: 'servers',
    description: "Shows all the servers the bot is in",
    usage: '?servers',
    category: 'botdev',
    run: async(client, message, args) => {
        let botdevid = '737862913309540413'
    if(message.author.id === botdevid){
      const embed = new Discord.MessageEmbed()
      embed.setTitle('Servers')
      embed.setColor('RANDOM')
      client.guilds.cache.forEach(guild => {
        embed.addField(`Name: ${guild.name}`, `ID: ${guild.id}`)
      });
      message.author.send(embed)
      } else return;
    }
}