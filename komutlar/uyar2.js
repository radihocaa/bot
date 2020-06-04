const Discord = require("discord.js");
const db = require('quick.db');
const neblm = require('../ayarlar.json');

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`⛔ Bu komutu kullanabilmek için **yeterli izne sahip değilsin!**`);   
	if (!args[0]) return message.channel.send('❓ Kimin uyarısını sileceğimi yazmalısın.')
	let CodEming = message.mentions.users.first() || client.users.get(args[0]) || message.guild.members.find(u => u.user.username.toLowerCase().includes(args[0].toLowerCase())).user
	if (!CodEming) return message.channel.send('❓ Kullanıcıyı bulamadım.')
	let Baroo = message.guild.member(CodEming)
	if (!Baroo) return message.channel.send('❓ Kullanıcıyı **bulamadım.**')
  
  let i = await db.get(`uyarı.${CodEming.id+message.guild.id}`)
  if (!i || i == 0) return message.channel.send(':+1: Bu kullanıcının zaten bir uyarısı yok ki,nasıl sileyim ? \n Radi Hoca Uyarı Sistemi')
  
  await db.add(`uyarı.${CodEming.id+message.guild.id}`, -1)
  message.channel.send('✔️ Bu kullanıcının uyarısı silindi! \n Radi Hoca Uyarı Sistemi')
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["uyarı-sil"],
    permLevel: 2
};
  
  exports.help = {
    name: 'uyarı-kaldır',
    description: 'Uyarı Kaldırır',
    usage: 'uyarı-kaldır'
};