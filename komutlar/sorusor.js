const Discord = require('discord.js');

const cevaplar = [
    "Evet evladım",
    "Hayır evladım",
    "Olabilir evladım",
    "Olmayabilir evladım",
    "Bilmiyorum evladım",
    "Bilmem ki evladım",
    "Sanırım Evet evladım",
    "İyi evladım",
    "Kötü evladım",
    "Sanırım Hayır evladım"
];

module.exports.run = async (bot, message, args) => {
const soru = args.join(' ');
  if(!soru) return message.channel.send('Ne Soracağını **Yazmadın.**')
  message.channel.send(" **Cevap:** " + (cevaplar[Math.floor(Math.random() * cevaplar.length)]));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sorusor',
  category: 'eğlence',
  description: 'Bota sorduğunuz soruya cevap verir.',
  usage: 'sorusor'
};