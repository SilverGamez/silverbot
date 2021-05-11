const Discord = require('discord.js');

module.exports = {
    name: 'report',
    description: "reports a user",
    usage: '?report <@user> <reason>',
    category: 'moderation',
    run: async(client, message, args) => {
        try{

            let args = message.content.subString(mainSettings.prefix.length).split(' ');
            let target = message.mentions.members.first();
            let reason = args.slice(1).join(" ");
            let reportChannel = message.guild.channels.cache.find(ch => ch.name === 'logs') || message.guild.channels.cache.find(ch => ch.name === 'reports');
        
            if(!target) return message.channel.send("Please ping a user to report")
            if(!reason) return message.channel.send("You need a reason to report the user")
            if(!reportChannel) return message.channel.send("There isnt a channel named \`logs\` or \`reports\`, please contact a admin this eror")
        
            const reportEmbed = new Discord.MessageEmbed()
            .setTitle('New Report!')
            .setColor('red')
            .setDescription(`${message.author} would like to report ${target} for:\n=> ${reason}`)
            .setTimeStamp()
        
            reportChannel.send(reportEmbed)
            message.channel.bulkDelete(1)
            message.author.send("Report submitted!")
        
           } catch (e) {
            
           }
    }
}