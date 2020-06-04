const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');


exports.run = (client, message, args) => {
  
message.channel.send(
  new Discord.RichEmbed()
    .addField(`${client.emojis.get('709800228160667688')}| Çay`,"r!çay")
    .addField(`${client.emojis.get('709805726070997055')}| Pide`,"r!pide")
	.addField(`${client.emojis.get('712135622730711130')}| Soğuk su`,"r!soguksu")
	.addField(`${client.emojis.get('712135656796848159')}| Limonata`,"r!limonata")
    .setColor("RANDOM")
    .setTimestamp()
  )
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ısmarla',
  description: 'Ne oluğunu deneyerek görebilirsin.',
  usage: 'ısmarla'
};