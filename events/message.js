const { prefix, botdevid } = require('../config.js');
const Discord = require('discord.js');
module.exports.run = async(client, message) => {
    if (message.author.bot) return;
    if (!message.guild) return;

    const mentionMember = message.mentions.members.first();

    // if(mentionMember) {
    //   if(mentionMember.id === '737862913309540413') {
    //     const user = client.users.cache.get('737862913309540413')
    //     const ping = new Discord.MessageEmbed()
    //     .setTitle('New ping')
    //     .setColor('RANDOM')
    //     .setDescription(`**Info:**\n\n**User:** ${message.member.user.tag}\n**Message:** ${message.content}\n**Server:** [${message.guild}](https://discord.com/channels/${message.guild.id}/${message.channel.id})\n**Link:** [here](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id})`)

    //     await user.send(ping)
    //   }//
    //   //https://discord.com/channels/686973120594182184/782930634073964545/823295875237412874
    //   // Server id: 686973120594182184
    //   // Channel id: 782930634073964545
    //   // Message id:  823295875237412874
    // } else {

    // }

    if(message.content === 'no u' || message.content === 'No u'){
      message.channel.send('No u')
    }
    
    if (!message.content.startsWith(prefix)) return;

    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    
    let command = client.commands.get(cmd);
    
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    
    if (command) 
        command.run(client, message, args)

        
}