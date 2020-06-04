const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const fs = require("fs");
exports.run = (client, message, params) => {
var Random = [
'**O pikap bu pikap şu pikap**',
'**Serçe ile söyleşenin sesi semadan gelir.**',
'**Paşa tası ile beş has tas kayısı hoşafı**', 
'**Gül dibi bülbül dili gibi, bülbül dili gül dibi gibi.**',
'**Şemsi Paşa pasajında sesi büzüşesiceler.**',
'**Keşkekçinin keşkekleşmemiş keşkek kepçesi.**',
'**Dal sarkar kartal kalkar; kartal kalkar dal sarkar.**', 
'**Şu duvarı badanalamalı mı?**',
'**Bu mum umumumuzun mumu.**',
'**Şiş şişeyi şişlemiş, şişe de keşişe kış demiş.**',
'**Nankör nalbant nalları nallamalı mı, nallamamalı mı?**', 
'**Adem madene gitmiş. Adem madende badem yemiş. Madem ki Adem madende badem yemiş, niye bize getirmemiş.**',
'**Delmişler, takmışlar. Bunu böyle yapmışlar. Delmiyelerdi, takmıyalardı. Bunu böyle yapmıyalardı.**',
'**Hakkı haklının hakkını yemiş. Haklı Hakkı’ dan hakkını istemiş. Hakkı haklıya hakkını vermeyince haklı da Hakkı’ nın hakkından gelmiş.**',
'**Sizin damda var, beş boz başlı beş boz ördek, bizim damda var beş boz başlı beş boz ördek, sizin damdaki beş boz başlı beş boz ördek, bizim damdaki beş boz başlı beş boz ördeğe, siz de bizcileyin beş boz başlı beş boz ördek misiniz? demiş.**', 
'**Bir tarlaya kemeken ekmişler. Bu tarlaya iki kürkü yırtık kel kör kirpi dadanmış. Biri kürkü yırtık erkek kel kör kirpi, öteki kürkü yırtık dişi kel kör kirpi. Kürkü yırtık erkek kel kör kirpinin yırtık kürkünü, kürkü yırtık dişi kel kör kirpinin yırtık kürküne; kürkü yırtık dişi kel kör kirpinin yırtık kürkünü, kürkü yırtık erkek kel kör kirpinin yırtık kürküne eklemişler.**'
];
var atasozuver = Math.floor(Math.random()*Random.length);
const atasozu= new Discord.RichEmbed()
.setDescription(`${Random[atasozuver]}`)
.setColor(0xe2ff00)
.setTimestamp()
message.channel.send(atasozu)
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['tekerle'],
permLevel: 0
};

exports.help = {
name: 'tekerleme',
description: 'Bot Tarafından Rasgele Tekerlemeler Gönderilir',
usage: 'tekerleme'
};