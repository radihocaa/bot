const Discord = require('discord.js');


exports.run = (client, message, args) => {
     if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Yetkin bulunmuyor.");
    message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Komut giriişi').setDescription('Gerekli Dosaylar Kurulsunmu?.').setFooter('Bu eylemi onaylıyorsan "evet" yazman yeterlidir.Bu eylem 30 saniye içinde sona erecek'))
.then(() => {
message.channel.awaitMessages(response => response.content === 'evet', {
max: 1,
time: 30000,
errors: ['time'],
})
.then((collected) => {
          message.guild.createChannel(`Hoşgeldiniz`, 'category');
          message.guild.createChannel(`👋-hoşgeldi̇ni̇z`, 'text');
        message.guild.createChannel(`📜-kurallar`, 'text');
        message.guild.createChannel(`🔥-roller`, 'text');
        message.guild.createChannel(`📌sosyal-medya`, 'text');
            message.guild.createChannel(`Genel`, 'category');
          message.guild.createChannel(`💎-Sohbet`, 'text');
          message.guild.createChannel(`💎-bot-komut` ,'text');
            message.guild.createChannel(`💎-foto-gif`, 'text');
              message.guild.createChannel(`💎-gelen-giden`, 'text');
              message.guild.createChannel(`mod-log`, 'text');
          message.guild.createChannel(`Ses Kanalları`, 'category')
        message.guild.createChannel(`● Genel Sohbet`, 'voice');
          message.guild.createChannel(`● Genel Sohbet`, 'voice');
        message.guild.createChannel(`● AFK`, 'voice');
        message.guild.createChannel(`● Müzik Odası`, 'voice');
          message.guild.createChannel(`● Bekleme Odası`, 'voice');


  



        message.channel.send(`Gerekli Kanalları Oluşturdum.`);
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucumukur','kur','setup'],
  permLevel: 0
};

exports.help = {
  name: 'sunucukur',
  description: 'Bot İçin gerekli kanlları kurar.',
  usage: 'kurulum'
};