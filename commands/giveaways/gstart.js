const ms = require('ms');
const Discord = require('discord.js');

module.exports = {
    name: 'gstart',
    description: "Starts a giveaway",
    usage: '?gstart <#channel> <time, 1s, 1m, 1h, 1d> <prize>',
    aliases: ['giveawaystart'],
    category: 'giveaways',
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send("You can not create a giveaway")
        
        //usage: ?gstart <channel> <time> <prize>

        const giveawayChannel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.guild.channels.cache.find(channel => channel.name === args[0]);
        const time = args[1];
        const prize = args.slice(2).join(' ');

        if(!giveawayChannel) return message.channel.send("Please specify a channel with \`id\`, \`mention\` or \`name\`");
        if(!time) return message.channel.send("Please specify the time");
        if(!prize) return message.channel.send("Please specify a prize");

        const giveawayEmbed = new Discord.MessageEmbed()
        .setTitle('New Giveaway')
        .setColor('LIME')
        .setDescription(`Giveaway Created by ${message.author}\n\nReact to join the giveaway of:\n\n**${prize}**`)
        .setFooter(`Giveaway ends in ${time}`)
        message.delete()
        const msg = await giveawayChannel.send(giveawayEmbed).catch(err => console.log(err))
        .then(message.channel.send("Giveaway Created!"))
        

        msg.react('🎉')
        

        .then(message => {
            setTimeout(async () => {
                if (msg.reactions.cache.get("🎉").count - 1 <= 1)
                              return msg.channel.send(
                                "Atleast 3 members have to react!"
                              );
                            let winner = msg.reactions.cache
                              .get("🎉")
                              .users.cache.filter((u) => !u.bot)
                              .random();
                giveawayChannel.send(`${winner} has won **${prize}**!\n\nGiveaway link: https://www.discord.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id}`)
            
            }, ms(time)) 
        })
    }
}