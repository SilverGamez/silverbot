const discord = require('discord.js');

module.exports = {
    name: 'coinflip',
    description: "Randomly flips heads or tails!",
    usage: '?coinflip',
    category: 'games',
    run: async (client, message, args) => {
        const choices = [
            "heads",
            "tails"
        ];
        const choice = choices[Math.floor(Math.random() * choices.length)];
        let embed = new discord.MessageEmbed()
        .setTitle('Coinflip!')
        .setDescription(`You flipped a **${choice}**`)
        message.channel.send(embed)
    }
}