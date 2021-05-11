const Discord = require('discord.js');

module.exports = {
    name: 'imagine',
    description: "Replies with Imagine <Text>",
    usage: '?imagine <what to imagine>',
    category: 'memes',
    run: async(client, message, args) => {
        const imagine = args.slice(0).join(" ");
        if(!imagine) return message.channel.send("You need to imagine something <:smolthink:785369569762082836>")
        const embed = new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setDescription(`Imagine ${imagine}`)
        .setFooter(`${message.member.user.username} is trying really hard to imagine`)
        message.channel.send(embed)
    }
}