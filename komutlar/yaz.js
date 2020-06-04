const Discord = require('discord.js');

exports.run = (client, message, args) => {
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("kendini zeki mi sandın");
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Duyuru yapmam için herhangi bir şey yazmalısın.');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say', 'söyle'],
  permLevel: 0
};

exports.help = {
  name: 'duyuru',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'duyuru [yazdırmak istediğiniz şey]'
};