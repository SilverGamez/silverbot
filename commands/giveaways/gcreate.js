const ms = require('ms');
const Discord = require('discord.js');

module.exports = {
    name: 'gcreate',
    description: "Starts a giveaway with questions",
    usage: '?gcreate',
    aliases: ['giveawaycreate'],
    category: 'giveaways',
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send('You cant use this!')
    let filter = (n) => n.author.id === message.author.id;
  message.channel.send("Ok, I'll ask you some questions, Type `ok` to continue");
  message.channel
    .awaitMessages(filter, { max: 1, time: 30000 })
    .then(async (collected) => {
      if (collected.first().content.toLowerCase() === "ok") {
        await message.reply("How long do you want the giveaway for?")
        message.channel
          .awaitMessages(filter, { max: 1, time: 30000 })
          .then(async (collecter) => {
            if (isNaN(collecter.first().content[0]) === false) {
              if (
                collecter.first().content.endsWith("d") &&
                collecter.first().content.endsWith("h") &&
                collecter.first().content.endsWith("m") &&
                collecter.first().content.endsWith("s")
              )
                return message.reply(
                  "Invalid option, restart command!"
                );
              let drago = collecter.first().content;
              await message.reply("What are you giving away?")
              message.channel
                .awaitMessages(filter, { max: 1, time: 30000 })//
                .then(async (collectre) => {
                  if (collectre.first().content) {
                    let dragon = collectre.first().content;
                    await message.reply("Which channel do you want to host this giveaway in?")
                    message.channel
                      .awaitMessages(filter, { max: 1, time: 30000 })
                      .then(async (collect) => {
                        if (collect.first().mentions.channels.first()) {
                          let channel = collect
                            .first()
                            .mentions.channels.first();
                          let time = drago
                          if(time < 300000) return message.channel.send('The giveaway has to be atleast 5 minutes long!')
                          await message.channel.send(`Giveaway Created! In ${channel}`);
                          let giveaway = new Discord.MessageEmbed()
                            .setTitle(`New Giveaway Has Started!`)
                            .setColor("BLUE")
                            .setDescription(`${message.author} has started a giveaway.
                            React to enter the giveaway of:
                            
                            ${dragon}`)
                            .setFooter(`This giveaway will end in ${time}`)
                          let m = await channel.send(giveaway);
                          let link = m.url;
                          m.react("🎉");
                          setTimeout(() => {
                            if (m.reactions.cache.get("🎉").count - 1 <= 1)
                              return channel.send(
                                "Atleast 3 members have to react!"
                              );
                            let winner = m.reactions.cache
                              .get("🎉")
                              .users.cache.filter((u) => !u.bot)
                              .random();
                            channel.send(
                              `${winner} has won **${dragon}** \n\nGiveaway link: ${link}`
                            );
                          }, ms(drago));
                        } else {
                          return message.reply(
                            "Channel not found, Please restart command"
                          );
                        }
                      });
                  }
                });
            }
          });
      }
    });
    }
}