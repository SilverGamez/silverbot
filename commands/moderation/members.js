const Discord = require('discord.js');
const sourcebin = require('sourcebin_js');

module.exports = {
    name: 'members',
    description: "Shows all the members in server",
    usage: '?members',
    category: 'moderation',
    run: async(client, message, args) => {
        let index = 1;
        let members = message.guild.members.cache.map(m => `INDEX: ${index++}\nUSER NAME & TAG: ${m.user.tag}\nUSER ID: ${m.user.id}`).join("\n\n");
        sourcebin.create([
            {
                name: 'Name (optional)',
                content: members,
                languageId: 'txt'
            }
        ], {
            title: 'Members',
            description: `Shows the members in ${message.guild.name}`
        })
            .then(bin => message.channel.send(bin.url))
            .catch(console.error);
    }
}