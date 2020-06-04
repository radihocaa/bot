const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');


exports.run = (client, message, args) => {
  
let sendteauser = message.mentions.members.first();
if (!sendteauser) return message.reply("Kime ısmarlayacığımı seçmediniz.!").catch(console.error);
message.channel.send(
  new Discord.RichEmbed()
    .setDescription(sendteauser+ ` '${message.author.username}' Sana bir soğuk su ısmarladı ${client.emojis.get('712135622730711130')} terli terli içme hasta olursun.`)
    .setColor("RANDOM")
    .setTimestamp()
  )
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['soguksu','su'],
  permLevel: 0
};

exports.help = {
  name: 'ısmarla su',
  description: 'Ne oluğunu deneyerek görebilirsin.',
  usage: 'ısmarla su'
};