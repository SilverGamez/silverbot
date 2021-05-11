  
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  description:
    "Get list of all command and even get to know every command detials",
  usage: "?help <cmd>",
  category: "misc",
  aliases: '',
  run: async (client, message, args) => {
    const Invite = `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`;
    const prefix = "?";
    if (args[0]) {
      const command = await client.commands.get(args[0]);

      if (!command) {
        return message.channel.send("Unknown Command: " + args[0]);
      }

      let aliases;
      if(!command.aliases) aliases = 'There is no aliases'
      if(command.aliases) aliases = command.aliases
      let embed = new MessageEmbed()
        .addField("Name", command.name)
        .addField("Description", command.description)
        .addField("Usage", command.usage)
        .addField("Aliases", aliases)
        .setColor("RANDOM")
        .setFooter(client.user.username, client.user.displayAvatarURL());

      return message.channel.send(embed);
    } else {
      const commands = await client.commands;
      //prefix variable is prefix
      let emx = new MessageEmbed()

        .setColor("RANDOM")
        .setFooter(`do ${prefix}help <command name> for more info.`)
        .addField('Need support?', 'Type ?support for links!')
        .setThumbnail(client.user.displayAvatarURL());

      let com = {};
      for (let comm of commands.array()) {
        let category = comm.category || "Unknown";
        let name = comm.name;

        if (!com[category]) {
          com[category] = [];
        }
        com[category].push(name);
      }

      for (const [key, value] of Object.entries(com)) {
        let category = key;

        let desc = "```" + value.join(", ") + "```";

        emx.addField(`${category.toLowerCase()} [${value.length}]`, desc);
      }

      return message.channel.send(emx);
    }
  },
};