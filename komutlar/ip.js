const Discord = require('discord.js');

exports.run = (client, message, args) => {
	
    const embedyardim = new Discord.RichEmbed()
    .setColor('GREEN')
    .setAuthor(`${client.user.username} `, client.user.avatarURL) 
      .setDescription('**MC SERVER:**')
      .addField('** Sürüm **', `Sürüm \n` +  '`1.12`')
      .addField('** Yetkili listesi **',   `Yetkililer \n` + '`Mustafa!#0001(orhanme13)`, `Beroo#1804(Beroo)`, `Muhammet#3044(KonsolKafa_)`')
      .addField('** Kayıt sitesi**',`Önce kayıt olmanız gerek \n` +  '`https://tokivud.oyna.tc/`')
      .addField('** IP **',`IP adresi . \n` + '`tokivud.minecraftoyna.com`')
    .setFooter(`© ${client.user.username} ` , client.user.avatarURL)
    .setTimestamp()
    message.channel.send(embedyardim).catch()
	
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mc'],
  permLevel: 4
};

exports.help = {
  name: 'ipmc',
  description: 'mc ipsi',
  usage: 'ipmc'
};