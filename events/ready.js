const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  
  const aktiviteListesi = [
	'☪️ Ramazan bayramınız kutlu olsun',
    `🥇 ${prefix}yardım | ${client.channels.size} kanal ${client.guilds.size} sunucu ${client.users.size} kullanıcı`,
    '🎬 Özcan Show',
    '⌚️ 7/24 aktif.',
	'💪 radi-hoca.glitch.me',
	`🥇 ${prefix}yardım | ${client.channels.size} kanal ${client.guilds.size} sunucu ${client.users.size} kullanıcı`,
	`🥇 ${prefix}yardım | ${client.channels.size} kanal ${client.guilds.size} sunucu ${client.users.size} kullanıcı`
  ]

  client.user.setStatus('idle')
  
  setInterval(() => {
    const Aktivite = Math.floor(Math.random() * (aktiviteListesi.length - 1))
    client.user.setActivity(aktiviteListesi[Aktivite])
  }, 7000)
};

