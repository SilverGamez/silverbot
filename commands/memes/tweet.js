const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
    name: 'tweet',
    description: "Sends a tweet",
    usage: '?tweet <text>',
    category: 'memes',
    run: async(client, message, args) => {
        if(!args[0]) return message.channel.send('Add a message!')
    fetch(`https://nekobot.xyz/api/imagegen?type=tweet&username=${message.author.username}&text=${args.join(' ')}`)
        .then((res) => res.json())
        .then((data) => {
            let embed = new MessageEmbed()
            .setTitle("Tweet!")
            .setImage(data.message)
            .setTimestamp()
            message.channel.send(embed)
        })
    }
}