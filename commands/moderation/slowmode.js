const Discord = require('discord.js');

module.exports = {
    name: 'slowmode',
    description: "Adds slowmode to channel",
    usage: '?slowmode <time in ms>',
    aliases: ['sm'],
    category: 'moderation',
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send('You dont permission to use this command');

        const value = Number(args[0]);
        if(!args[0]) return message.channel.send('You need to add seconds for the slowmode time');
        if(!value || value < 5 || value > 21600) return message.channel.send('You need to state a number between 5(5s) and 21600(6h)');
    
        try{
        await message.channel.setRateLimitPerUser(value)
        .then(message.channel.send(`The slowmode has been updated to ${value} seconds`))
        } catch (e) {
            message.channel.send('Something went wrong setting the slowmode') 
        }
    }
}