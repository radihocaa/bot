const Discord = require('discord.js');

exports.run = function (client, message, args) {
   
const sunucu = client.guilds.size
const user = client.users.size
const kanal = client.channels.size

const sahip = message.author.tag

message.channel.send(
new discord.RichEmbed()
.setTitle("Bilgi")
.addField("Toplam Sunucu: ", sunucu)
.addField("Toplam Kullanıcı: ", user)
.addField("Toplam Kanal: ", kanal)
.setFooter(sahip + " Tarafından kullanıldı")
.setTimestamp()
  )
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kac','sunucu'],
  permLevel: 0
};

exports.help = {
  name: 'kacsunucu',
  category: 'bilgi',
  description: 'Kaç sunucuda ekliyim',
  usage: 'kacsunucu'
};