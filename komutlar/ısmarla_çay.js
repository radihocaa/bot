const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');


exports.run = (client, message, args) => {
  
let sendteauser = message.mentions.members.first();
if (!sendteauser) return message.reply("Kime ısmarlayacığımı seçmediniz.!").catch(console.error);
message.channel.send(
  new Discord.RichEmbed()
    .setDescription(sendteauser+ ` '${message.author.username}' Sana bir çay ısmarladı ${client.emojis.get('712017276311699468')} tavşan kanı hemde.`)
    .setColor("RANDOM")
    .setTimestamp()
  )
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çay'],
  permLevel: 0
};

exports.help = {
  name: 'ısmarla çay',
  description: 'Ne oluğunu deneyerek görebilirsin.',
  usage: 'ısmarla çay'
};