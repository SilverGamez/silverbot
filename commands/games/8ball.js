const Discord = require('discord.js');

module.exports = {
    name: '8ball',
    description: "Responds with a random answer",
    usage: '?8ball <question>',
    category: 'games',
    run: async(client, message, args) => {
        const respones = [
            "As I see it, yes.",
            "Ask again later.",
            "Better not tell you now.",
            "Cannot predict now.",
            "Concentrate and ask again.",
            "Don’t count on it.",
            "It is certain.",
            "It is decidedly so.",
            "Most likely.",
            "My reply is no.",
            "My sources say no.",
            "Outlook not so good.",
            "Outlook good.",
            "Reply hazy, try again.",
            "Signs point to yes.",
            "Very doubtful.",
            "Without a doubt.",
            "Yes.",
            "Yes – definitely.",
            "You may rely on it."
        ];
      
        const reply = Math.floor(Math.random() * (respones.length - 1) + 1);
        const question = args.slice(0).join(" ");
        if(!question) return message.channel.send("Whats the question?");
      
        let embed = new Discord.MessageEmbed()
        .setTitle('🎱 8ball! 🎱')
        .setDescription(`**Question:** ${question}\n **Answer:** ${respones[reply]}`)
        .setColor('RANDOM')
      
        message.channel.send(embed)
    }
}