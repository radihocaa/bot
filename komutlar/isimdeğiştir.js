const Discord = require('discord.js');


exports.run = function (client, message, args) { 
  
const yenisim  = args.slice(0).join(' ');
if (!yenisim) return message.channel.send("**İsmin ne olsun?**")
  message.author.setNickname(yenisim)

  message.channel.send(
     new Discord.RichEmbed()
        .setTitle(":tada: Başarılı")
        .setDescription("Kullanıcı adın başarıyla **" + yenisim + "** Olarak değiştirilmiştir.")
        )  
};

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: ['isim'],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'adımıdeğiştir',//Komutun adı (Komutu girerken lazım olucak)
  description: 'Kullanıcı adınızı değiştirir',//Komutun Açıklaması
  kategori: 'kullanıcı',// Komutun olduğu kategori. kategoriler: bot-yetkili-ayarlar-kullanıcı-sunucu-eğlence-efektcerceve
  usage: 'adımıdeğiştir' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}