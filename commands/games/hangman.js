const { hangman } = require('reconlx');

module.exports = {
    name: 'hangman',
    description: "Starts a hangman game!",
    usage: '?hangman <word>',
    category: 'games',
    run: async(client, message, args) => {
        const channel = message.channel;
        const word = args.slice(0).join(' ');
        if(!word) return message.channel.send('Please specify a word to guess.');

        const hang = new hangman({
            message: message,
            word: word,
            client: client,
            channelID: channel.id
        });
        message.channel.bulkDelete(1)
        .then(hang.start())
    }
}