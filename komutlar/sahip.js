const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new Discord.RichEmbed()
    .setDescription("**:chicken: Sahip komutları**")
    .setColor("RANDOM")
    .addField("r!eval", "Kod dener")
    .addField("r!load", "Yeni bir komut yükler")
    .addField("r!reboot", "Botu yeniden başlatır")
    .addField("r!reload", "Bir komutu yeniden başlatır")
    .addField("r!unload", "Bir komutu devre dışı bırakır")

    message.channel.send(serverembed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sahipler'],
  permLevel: 0
};

exports.help = {
  name: 'sahip',
  description: 'Bütün sahip komutlarını verir.',
  usage: 'sahip'
};
