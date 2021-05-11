const Discord = require('discord.js');

module.exports = {
    name: 'suggest',
    description: "Time to suggest!",
    usage: '?suggest <suggestion>',
    category: 'misc',
    run: async(client, message, args) => {
        let reaction1 = '👍'
        let reaction2 = '👎'

        let suggestionChannel = message.guild.channels.cache.find(ch => ch.name === 'suggestions');
        let suggestion = args[0].join(' ')

        if(!suggestion && !suggestionChannel) return message.channel.send("There is no suggestion channel || You need to make a suggestion");

        const embed = new Discord.MessageEmbed()
        .setTitle('New suggestion!')
        .setColor('RANDOM')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(suggestion)

        suggestionChannel.send(embed)
        .then(message => {
            message.react(reaction1)
            message.react(reaction2)
        })
    }
}