const Discord = require('discord.js');
const sourcebin = require('sourcebin_js');

module.exports = {
    name: 'createsourcebin',
    description: "Creates a sourcebin",
    usage: '?createsourcebin <title> <text>',
    aliases: ['csb'],
    category: 'misc',
    run: async(client, message, args) => {
        if(!args[0]) return message.channel.send('Please add a title for the sourcebin!');
    if(!args[1]) return message.channel.send('Please add a message for the sourcebin!');
    sourcebin.create([
      {
          name: args[0],
          content: args.slice(1).join(" "),
          languageId: 'txt'
      }
  ], {
      title: args[0],
      description: `New sorcebin!`
  }).then(bin => message.channel.send(`Sourcebin created!\n> ${bin.url}`))
    }
}