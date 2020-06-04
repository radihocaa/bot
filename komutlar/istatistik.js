const Discord = require("discord.js");
const moment = require("moment");
const db = require("quick.db")
require("moment-duration-format");
exports.run = async(client, message, args) => { 
  
  const duration = moment.duration(client.uptime).format(" D [gün/day], H [saat/hour], m [dakika/minute], s [saniye/second]");
  
  let dil = await db.fetch(`dil_${message.guild.id}`)
  
  
   if(!dil) { 
    message.channel.send('Herhangi bir dil ayarlanmamış varsayılan dil çalıştı.')
  }

if(dil === "TR") {
	exports.run = (client, msg) => {
	msg.channel.sendCode("asciidoc", `= İSTATİSTİKLER =

Radi Hoca
• Bellek kullanımı :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
• Çalışma süresi   :: ${duration}
• Kullanıcılar     :: ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
• Sunucular        :: ${client.guilds.size.toLocaleString()}
• Kanallar         :: ${client.channels.size.toLocaleString()}
• Discord.JS sürüm :: v${Discord.version}`);	
		};
	};



if(dil === "EN") {
	exports.run = (client, msg) => {
		msg.channel.sendCode("asciidoc", `= STATUS =

Radi Hoca
• Memory Usage :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
• Work Duration   :: ${duration}
• Users     :: ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
• Guilds        :: ${client.guilds.size.toLocaleString()}
• Channels         :: ${client.channels.size.toLocaleString()}
• Discord.JS version :: v${Discord.version}`);	
		};
	};
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot durum', 'i', 'bi', 'istatistikler', 'kullanımlar', 'botdurum', 'bd', 'istatisik', 'stats', 'stat'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'Botun istatistik gösterir.',
  usage: 'istatistik'
};