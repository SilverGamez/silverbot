const Discord = require('discord.js');

module.exports = {
    name: 'spotify',
    description: "Searchs a song on spotify",
    usage: '?spotify <song name>',
    category: 'misc',
    run: async(client, message, args) => {
        const msgLink = args.slice(0).join("-")
        const msgName = args.slice(0).join(" ")
        const embed1 = new Discord.MessageEmbed()
        .setTitle('Searching Spotify!')
        .setColor('RANDOM')
      const msg = await message.channel.send(embed1)
        setTimeout(() => {
            const embed2 = new Discord.MessageEmbed()
            .setTitle('Result found!')
            .setColor('RANDOM')
            .setDescription(`Found [${msgName}](https://open.spotify.com/search/${msgLink}) on spotify!`)
            msg.edit(embed2)
        }, 5000)
    }
}