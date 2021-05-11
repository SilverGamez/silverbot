const Translate = require('@iamtraction/google-translate');
const Err = 'Something went wrong finding that!';

module.exports = {
  name: 'translate',
  description: "Translates text",
  usage: '?translate <language> <text>',
  category: 'info',
  run: async(client, message, args) => {
    let To = args[0];

    if (!To) return message.channel.send("What language do you want to translate to?");

    To = To.toLowerCase();

    const ToTranslate = args.slice(1).join(" ");

    if (!ToTranslate) return message.channel.send(`What message to you want to translate to ${To}`);

    Translate(ToTranslate, { to: To }).then((Translation) => {
      if (!Translation.text || !Translation.from || !Translation.from.language) return message.channel.send(Err);
      const { text } = Translation;
      return message.channel.send("`" + 'English' + "` => `" + To + "`\n" + `${text}`);
    }).catch((error) => {
      return message.channel.send(Err).then(() => console.log(error.message));
    });
  }  
}