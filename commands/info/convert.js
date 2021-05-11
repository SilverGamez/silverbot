module.exports = {
    name: 'convert',
    description: "Converts celsuis to ferenheit",
    usage: '?convert <temp>',
    aliases: ['c'],
    category: 'info',
    run: async(client, message, args) => {
      const convertThis = args[0]
      if(!convertThis) return message.channel.send("You need to convert something!")
      if(isNaN(convertThis)) return message.channel.send("Add a celsuis temperature only")
      const converted = (convertThis * 9/5) + 32
      message.channel.send(`${convertThis}°C = ${converted}°F`)
    }
}