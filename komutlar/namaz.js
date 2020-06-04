const Discord = require('discord.js');
   const superagent = require('superagent');

    exports.run = async(client, message, args) => {
    if(!args[0]) return message.channel.send(`❌ Bir şehir girmelisin.`)
    let {body} = await superagent 
    .get(`https://namazapi.glitch.me/namaz?sehir=${args[0]}`);
    if(!{body}) return message.channel.send(`404! Bir Hata Oluştu! Lütfen Biraz Sonra Tekrar Dene!`)
    if(body.hata) return message.channel.send(`Lütfen Geçerli Bir Şehir Gir!`)
    const embed = new Discord.RichEmbed()
    .setColor('ff000')
    .addField(`**${args[0]} Güneşin doğuş vakti:**`, body.Güneş, true)
	.addField(`**${args[0]} Sabah namazı vakti:**`, body.İmsak, true)
	 .addField(`**${args[0]} Öğle namazı vakti:**`, body.Öğle, true)
	.addField(`**${args[0]} İkindi namazı vakti:**`, body.İkindi, true)
	 .addField(`**${args[0]} Akşam namazı vakti:**`, body.Akşam, true)
	.addField(`**${args[0]} Yatsı namazı vakti:**`, body.Yatsı, true)
    .setFooter(`Radi Hoca : Allah kabul etsin.`)
    .setTimestamp()
    message.channel.send(embed)
    }
    exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['namaz','namazvakti'], 
  permLevel: 0
};

exports.help = {
  name: 'namazvakitleri',
  usage: 'namazvakitleri <şehir>'
};