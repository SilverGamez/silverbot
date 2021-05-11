const Discord = require('discord.js');

module.exports = {
    name: 'kick',
    description: "Kicks a user",
    usage: '?kick <@user> <reason>',
    category: 'moderation',
    run: async(client, message, args) => {
        try{
            message.channel.bulkDelete(1)
            if(message.member.hasPermission("KICK_MEMBERS")){
            let target = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
              if(!target) return message.channel.send('Please provide a user that you wish to kick').then(m => m.delete({timeout: 15000}));
              let reason = args.slice(1).join(" ");
              if(!reason) return message.channel.send("Please add a reason for the kick").then(m => m.delete({timeout: 15000}));
              let reportChannel = message.guild.channels.cache.find(x => x.name === "logs");
              if(!reportChannel) return message.channel.send("Please get a logs channel named \`logs\`")
      
              target.send(`You were **KICKED** from ${message.guild} because *${reason}*`)
              target.kick()
              reportChannel.send(`User ${target.user.tag} (${target}) was **KICKED** by Moderator ${message.member.user.tag} (${message.member}) for ${reason}`)
            } else {
                message.channel.send("You need to be a mod for this command").then(m => m.delete({timeout: 15000}));
            }
        } catch(e) {
        
        }
    }
}