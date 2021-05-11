const Discord = require('discord.js');
const ms = require('ms');

module.exports = {
    name: 'remind',
    description: "Reminds you after certain time",
    usage: '?remind <time, 1m, 1h, 1d, 1w> <reminder>',
    category: 'misc',
    run: async(client, message, args) => {
        let time = args[0];
        let user = message.author
        let reminder = args.splice(1).join(' ')
        if (!args[0]) return message.channel.send(`Please specify the **time!**`)
        if (
            !args[0].endsWith("d") &&   
            !args[0].endsWith("m") &&
            !args[0].endsWith("h") &&
            !args[0].endsWith("s") &&
            !args[0].endsWith("w")
        )


            return message.channel.send(`Sorry I only do **d,** **m,** **h,** or **s.**`)
        if (!reminder) return message.channel.send(`Please tell me what you want to be **reminded of**`)


        message.channel.send(`Your reminder will go off in **${time}**`)

        const reminderdm = new Discord.MessageEmbed()
        .setColor('#7289DA')
        .setTitle('**REMINDER**')
        .setDescription(`****DING!!!****\nIt has been **${time}** so here is your reminder: **${reminder}**`)  

        setTimeout(async function () {
           try{

            await user.send(reminderdm)
           }catch(err){
        
           } 
           
        }, ms(time));
    }
}