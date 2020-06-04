const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');


exports.run = (client, message, args) => {
  
let sendteauser = message.mentions.members.first();
if (!sendteauser) return message.reply("Kime ısmarlayacığımı seçmediniz.!").catch(console.error);
message.channel.send(
  new Discord.RichEmbed()
    .setDescription(sendteauser+ ` '${message.author.username}' Sana bir limonata ısmarladı ${client.emojis.get('712135656796848159')} oh mis gibi vallaha.`)
    .setColor("RANDOM")
    .setTimestamp()
  )
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['limonata'],
  permLevel: 0
};

exports.help = {
  name: 'ısmarla limonata',
  description: 'Ne oluğunu deneyerek görebilirsin.',
  usage: 'ısmarla limonata'
};