const { tictactoe } = require('reconlx');
const Discord = require('discord.js');

module.exports = {
    name: 'tictactoe',
    description: "Play a game of tictactoe with your friends!",
    usage: '?tictactoe @user',
    aliases: ['ttt'],
    category: 'games',
    run: async(client, message, args) => {
        const member = message.mentions.members.first();
        if(!member) return message.channel.send('Who are you challenging?');
        
        new tictactoe({
            player_two: member,
            message: message
        });
    }
}