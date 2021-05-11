const Discord = require('discord.js');

module.exports = {
    name: 'createembed',
    description: "Creates an embed!",
    usage: '?createembed',
    aliases: ['ce'],
    category: 'misc',
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send('You do not have permission to do this!')
    let filter = (n) => n.author.id === message.author.id;

      message.channel.send("Alright, lets make an embed!, Type `continue` to continue")
      message.channel.awaitMessages(filter, { max: 1, time: 60000 })
      .then(async (collected) => {
          if (collected.first().content.toLowerCase() === "continue") {
            await message.channel.send('What do you want the title to be? If you dont want any, Type \`none\`')
            message.channel.awaitMessages(filter, { max: 1, time: 60000})
            .then(async (collecte) => {
                let title;
                if(collecte.first().content.toLowerCase() === 'none'){
                  title = ''  
                } else {
                 title = collecte.first().content.toLowerCase()
                }
              message.channel.send('What do you want the colour to be? Type the hex colour or \`none\` for random')
              message.channel.awaitMessages(filter, {max: 1, time: 60000})
              .then(async (collect) => {
                  let colour;
                  if(collect.first().content.toLowerCase() === 'none'){
                      colour = 'RANDOM'
                  } else {
                      colour = collect.first().content.toLowerCase()
                  }
                  message.channel.send('What do you want the description be? If you dont want any, Type \`none\`')
                  message.channel.awaitMessages(filter, {max: 1, time: 1200000})
                  .then(async (desc) => {
                      let description;
                      if(desc.first().content.toLowerCase() === 'none'){
                          description = ''
                      } else {
                          description = desc.first().content.toLowerCase()
                      }
                      message.channel.send('Want a footer? If you dont want any, Type \`none\`')
                      message.channel.awaitMessages(filter, {max: 1, time: 60000})
                      .then(async (img) => {
                          let footer;
                          if(img.first().content.toLowerCase() === 'none'){
                              footer = ''
                          } else {
                           footer = img.first().content.toLowerCase()
                          }
                          message.channel.send('Which channel? Please \_\_say\_\_ the channel name. Type \`none\` for current channel')
                          message.channel.awaitMessages(filter, {max: 1, time: 60000})
                          .then(async (lechannel) =>  {
                              let targetChannel;
                              if(lechannel.first().content.toLowerCase() === 'none'){
                               targetChannel = message.channel
                              } else {
                                  const channelName = lechannel.first().content.toLowerCase()
                                  if(channelName.includes('#')) return message.channel.send('Please say the channel name, like: \`general\`')
                                  targetChannel = message.guild.channels.cache.find(channel => channel.name === channelName)
                              }
                              let embed = new Discord.MessageEmbed()
                              .setTitle(title)
                              .setColor(colour)
                              .setDescription(description)
                              .setFooter(footer)
                          targetChannel.send(embed)
                          })
                      })
                  })

              })
            })
          }
  })
    }
}