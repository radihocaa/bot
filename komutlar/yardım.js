const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const embedyardim = new Discord.RichEmbed()
    .setColor('#fffa00')
    .setAuthor(`${client.user.username} `, client.user.avatarURL) 
      .setDescription('**r!Yardım** ile yardım alabilirsiniz.\n örnek komut kullanımı: **r!sil**.\nbotun sitesine gitmek için **https://radi-hoca.glitch.me**')
      .addField('** Komutlar (15)**', `herkesin kullanabileceği standart komutlar. \n` +  '`scbilgi`, `kullanıcıbilgim`, `ping`, `iftarvakti`, `namazvakitleri`, `korona`, `seviyem`, `sıralama`, `değişiklikler`, `öneri`, `canlıdestek`,`botbilgi`,`youtube`,`steamfiyat`,`atasozu`')
      .addField('** Eğlence (9)**',   `herkes için kullanılabilecek eğlence komutları. \n` + '`yazan-kazanır (@kullanıcı)`, `doğrulukcesaret`,`balıktut`,`sorusor`,`1vs1`,`espri`,`tabutcu`,`tekerle`,`ısmarla <ısmarlanıcakkişi>`')
      .addField('** Moderasyon (13)**',`yetkililer için moderasyon komutları bölüm 1 . \n` +  '`sil`, `sayaç-ayarla`, `sayac-hg-msg`, `sayac-bb-msg`, `kick`,`ban`,`uyar`,`uyarı-sayı`,`uyarı-sil`,`mute`,`unmute`,`kilit`,`öneri-kanal`')
      .addField('** Moderasyon2 (6)**',`yetkililer için moderasyon komutları bölüm 2 . \n` + '`duyuru`,`unban`,`edit`, `reklamengel aç/kapat`, `küfür-engel aç/kapat`, `istatistik-kur(kanal kurar)`')
    .setFooter(`© ${client.user.username} ` , client.user.avatarURL)
    .setTimestamp()
    message.channel.send(embedyardim).catch()
    
//////`${client.user.username}`
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["h", "halp", "help", 'y', 'yadrım','?'],
    permLevel: 0
};

exports.help = {
    name: 'yardım',
    category: 'Yardım',
    description: 'Yardım kategorilerini gösteir.',
};