const Discord = require('discord.js');
const math = require('mathjs');

module.exports = {
    name: 'calculate',
    description: "Works like a calculator!",
    usage: '?calculate <maths sum>',
    aliases: ['cal'],
    category: 'games',
    run: async(client, message, args) => {
        
        if(!args[0]) return message.channel.send('Please provide a question');

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            const errorEmbed = new Discord.MessageEmbed()
            .setTitle('This is not a __valid__ question')
            .setColor(0x808080)
            .setDescription('Please use one of the following:')
            .addField('Multiplication', '\`\`\`*\`\`\`')
            .addField('Division', '\`\`\`/\`\`\`')
            .addField('Addition', '\`\`\`+\`\`\`')
            .addField('Subtraction', '\`\`\`-\`\`\`')
            .setFooter(`${message.member.user.username} doesnt know maths :o`)
            return message.channel.send(errorEmbed)
        }

        const embed = new Discord.MessageEmbed()
        .setColor(0x808080)
        .setTitle('Calculator')
        .addField('Question', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('Answer', `\`\`\`css\n${resp}\`\`\``)

        message.channel.send(embed);
    }
}