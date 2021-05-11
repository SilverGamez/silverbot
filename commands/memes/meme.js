const Discord = require('discord.js');
const got = require('got');

module.exports = {
    name: 'meme',
    description: "Sends a meme",
    usage: '?meme',
    category: 'memes',
    run: async(client, message, args) => {
        const embed = new Discord.MessageEmbed()
                got('https://www.reddit.com/r/memes/random/.json').then(async response => {
                    let content = JSON.parse(response.body);
                    let permalink = content[0].data.children[0].data.permalink;
                    let memeUrl = `https://reddit.com${permalink}`;
                    let memeImage = content[0].data.children[0].data.url;
                    let memeTitle = content[0].data.children[0].data.title;
                    let memeUpvotes = content[0].data.children[0].data.ups;
                    let memeDownvotes = content[0].data.children[0].data.downs;
                    let memeNumComments = content[0].data.children[0].data.num_comments;
                    embed.setTitle(`${memeTitle}`)
                    embed.setURL(`${memeUrl}`)
                    embed.setImage(memeImage)
                    embed.setDescription('React down below if this message is NSFW or includes swearing')
                    embed.setColor('RANDOM')
                    embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
                    
                    const msg = await message.channel.send(embed);
                    msg.react('🔞')
                    const filter = (reaction, user) => {
                        return ['🔞'].includes(reaction.emoji.name) && user.id === message.author.id
                    };
                    msg.awaitReactions(filter, {max:1, time: 600000, error: ["time"]}).then(
                        async(collected) => {
                            const reaction = collected.first()
                            if(!reaction) return
                            msg.delete()
                            let m = await message.channel.send("Deleted meme due to, NSFW || Swearing");
                            setTimeout(() => {
                                m.delete()
                            }, 10000)
                            
                        });
                });
    }
}