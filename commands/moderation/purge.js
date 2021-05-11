const Discord = require('discord.js');

module.exports = {
    name: 'purge',
    description: "Deletes messages",
    usage: '?purge <amount>',
    category: 'moderation',
    run: async(client, message, args) => {
        try{
            let amount = args[0] + 1
      
            if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You need to be a mod!")
            if(isNaN(amount)) return message.channel.send("You need to clear a __number__")
      
            message.channel.bulkDelete(amount)
      
           } catch (err) {
            
           }
    }
}