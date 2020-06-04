const Discord = require("discord.js");
const ffmpeg = require("ffmpeg");
const ytdl = require('ytdl-core');
exports.run = function (client, message, args) {
        let value = args.slice(0).join(' ');
    if(!value) {
        message.reply("**metrofm dinlemek için r!metrofm dinle**!")
    } 
    if (!message.member.voiceChannel) return message.reply("**metrofm Dinlemek için sesli kanala girmelisin.**");
            if (value === "dinle") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const stream = ytdl('https://www.youtube.com/watch?v=KJQXDJgPSTs', { filter: 'audioonly' })
            const dispatcher = connection.playStream(stream)
        }));
          const hsyn = new Discord.RichEmbed()
          .setTitle('Keyifli dinlemeler.')
          .setColor('0x00fff')
          return message.channel.send(hsyn)
          return;
    }; 
    if (value === "kapat") {
      message.channel.send("metrofm Durduruluyor.").then(m => {
        setTimeout(()=>{
          m.edit("Durduruldu!")
        }, 2800)
      })
      setTimeout(()=>{
        const voiceChannel = message.member.voiceChannel;
        voiceChannel.leave()
      }, 3000)
    }
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['metrofm'],
    permLevel: 0
};
exports.help = {
    name: "metrofm",
    description: "BAKIMDA",
    usage: "r!metrofm"
};