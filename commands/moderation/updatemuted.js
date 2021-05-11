const Discord = require('discord.js');

module.exports = {
    name: 'updatemuted',
    description: "Updates the muted role",
    usage: '?updatemuted <roleid>',
    category: 'moderation',
    run: async(client, message, args) => {
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('You cannot do this')
         const role = message.guild.roles.cache.get(args[0]);
    if(role) {
        message.guild.channels.cache.forEach(channel => {
            channel.updateOverwrite(role, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false,
                SPEAK: false,
                STREAM: false
            })
            .catch(err => {})
        })
        const msg = await message.channel.send('**(25%)** Creating Overwrites for mutedrole')
        setTimeout(() => {
            msg.edit('**(50%)** Editing overwrites for mutedrole')
            setTimeout(() => {
                msg.edit('**(75%)** Editing overwrites for mutedrole')
                setTimeout(() => {
                msg.edit('**(99%)** Finishing overwrites for mutedrole')
                setTimeout(() => {
                msg.edit(`**(100%)** Done! Updated muted role for **${message.guild.channels.cache.size}** channels.`)
                }, 5000)
                }, 5000)
            }, 5000)
        }, 5000)
    } else return message.channel.send('You need to add a role id.')
    }
}