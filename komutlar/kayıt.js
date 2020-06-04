const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = function(client, message, args) {
  
  let k = client.channels.get("695623282392694834")   //LOG KANALI İD SİNİ YAZ
  let misafir = message.guild.roles.get("699947694965260300")  //ALINACAK ROL İD SİNİ YAZ
  let üye = message.guild.roles.get("695630033628168289")     //VERİLECEK ROL İD
  let kayıtkanal = message.guild.channels.find(`id`, `699948319199461447`)   //KAYITIN OLUNACAĞI KANAL İD
  

    message.member.addRole(üye)
    message.member.removeRole(misafir)    

  const e = new Discord.RichEmbed()
  .setTitle("Kayıt Bildiri")
  .addField("Kullanıcı", message.author.tag)
  .addField("Kullanıcı (ID)", message.author.id)
  k.send(e)
  
}



exports.conf = {

    enabled: true,
    guildOnly: true,
    aliases: ["kayıt" , "kayit"],
    permLevel: 0
};

exports.help = {
    name: "kayıt",
    description: "SADECE ÖZCAN SHOW ÖZEL",
    usage: "kayıt"
};