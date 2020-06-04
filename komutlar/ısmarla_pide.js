const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');


exports.run = (client, message, args) => {
  
let sendteauser = message.mentions.members.first();
if (!sendteauser) return message.reply("Kime ısmarlayacığımı seçmediniz.!").catch(console.error);
message.channel.send(
  new Discord.RichEmbed()
    .setDescription(sendteauser+ ` '${message.author.username}' Sana bir pide ısmarladı ${client.emojis.get('709805726070997055')} kapa kapa yeme.`)
    .setColor("RANDOM")
    .setTimestamp()
  )
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pide'],
  permLevel: 0
};

exports.help = {
  name: 'ısmarla pide',
  description: 'Ne oluğunu deneyerek görebilirsin.',
  usage: 'ısmarla pide'
};