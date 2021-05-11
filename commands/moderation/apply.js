const random = 'RANDOM'
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'apply',
    description: "You can apply to be mod!",
    usage: '?apply',
    category: 'moderation',
    run: async(client, message, args) => {
        if(!message.channel.name.includes('apply')) return message.channel.send('You cant do that here!')

    const q1 = new MessageEmbed()
    .setTitle('Question 1')
    .setColor(random)
    .setDescription('What stage would you like to apply for?')
    const q2 = new MessageEmbed()
    .setTitle('Question 2')
    .setColor(random)
    .setDescription('How old are you? You must meet requirement [here](https://discord.com/terms)')
    const q3 = new MessageEmbed()
    .setTitle('Question 3')
    .setColor(random)
    .setDescription('Why do you want to be a moderator? Please give detail why')

    const user = message.author;
    let filter = (n) => n.author.id === message.author.id;
    
    message.guild.channels.create(`Application-${user.username}`, {
      permissionOverwrites: [
       {
        id: user.id,
        allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
       },
       {
        id: message.guild.roles.everyone,
        deny: ['VIEW_CHANNEL'],
       },
      ],
      type: 'text',
     }) .then(channel => {
       channel.send(`Welcome ${user},`)
       channel.send(q1)
      channel
      .awaitMessages(filter, { max: 1, time: 60000})
      .then(async (collected) => {
        const stage = collected.first().content
        await channel.send(q2)
        channel
        .awaitMessages(filter, { max: 1, time: 60000})
        .then(async (collecte) => {
          const age = collecte.first().content
          
          if(age < 13){
            user.send('Your not old enough to apply!')
            channel.delete()
            return;
          } else if(age > 70){
            user.send('Dont fake your age!')
            channel.delete()
            return;
          } else {
            await channel.send(q3)
            channel
            .awaitMessages(filter, { max: 1, time: 60000})
            .then(async (collect) => {
              const reason = collect.first().content
              
              const results = new MessageEmbed()
              .setTitle('New Application!')
              .setColor(random)
              .addField('Age', age)
              .addField('Chosen position', stage)
              .addField('Reason why', reason)
              channel.bulkDelete(100)
              channel.send(results)
              channel.send("New Application Has Summoned!")
              channel.permissionOverwrites.get(message.author.id).delete();
            })
          }
        })
      })

     })
    }
}
