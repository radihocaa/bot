const Discord = require('discord.js');

exports.run = function(client, message, args) {
  message.delete();
  message.channel.send(`${client.emojis.get('711748070693404742')}`);
};

exports.conf = {
  enabled: true, //True => Komut açık, False => Komut kapalı 
  guildOnly: true, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: ['kedii'], //Komutun farklı kullanımları ÖR: !dene, !d
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'kedii', //Komutun adı (Komutu girerken lazım olucak)
  description: 'deneme komuttur.', //Komutun adı (Komutu girerken lazım olucak)
  usage: 'kedi' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
};
