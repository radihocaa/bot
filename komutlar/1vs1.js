const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
const { randomRange, verify } = require('../util/Util.js');

exports.run = async (client, message, args) => {
  
  this.fighting = new Set();
  
	let opponent = message.mentions.users.first()
	var embedoyna = new Discord.RichEmbed().setTitle(' ').setDescription('Oynamak istediğiniz kişiyi seçmediniz.').setColor('#65dead');
	var embedbot = new Discord.RichEmbed().setTitle(' ').setDescription('Botlar ile oynayamazsın.').setColor('#65dead');
	var embedkendi = new Discord.RichEmbed().setTitle(' ').setDescription('Kendin ile düello atamazsın.').setColor('#65dead');
	if (!opponent) return message.channel.send(embedoyna);
  
  if (opponent.bot) return message.channel.send(embedbot);
  if (opponent.id === message.author.id) return message.channel.send(embedkendi);
		if (this.fighting.has(message.channel.id)) return message.reply('Kanal başına sadece bir düello meydana gelebilir.');
		this.fighting.add(message.channel.id);
		try {
			if (!opponent.bot) {
				var embedkabul = new Discord.RichEmbed().setTitle(' ').setDescription(`${opponent}, düello isteği geldi. Düello'yu kabul ediyor musun?`).setColor('#65dead').setFooter('evet veya hayır yazarak cevap verebilirsin.');
                await message.channel.send(embedkabul);
				const verification = await verify(message.channel, opponent);
				if (!verification) {
					this.fighting.delete(message.channel.id);
					var nokabul = new Discord.RichEmbed().setTitle(' ').setDescription('Düello kabul edilmedi.').setColor('#65dead');
					return message.channel.send(nokabul);
				}
			}
			let userHP = 500;
			let oppoHP = 500;
			let userTurn = false;
			let guard = false;
			const reset = (changeGuard = true) => {
				userTurn = !userTurn;
				if (changeGuard && guard) guard = false;
			};
			const dealDamage = damage => {
				if (userTurn) oppoHP -= damage;
				else userHP -= damage;
			};
			const forfeit = () => {
				if (userTurn) userHP = 0;
				else oppoHP = 0;
			};
			while (userHP > 0 && oppoHP > 0) { // eslint-disable-line no-unmodified-loop-condition
				const user = userTurn ? message.author : opponent;
				let choice;
				if (!opponent.bot || (opponent.bot && userTurn)) {
					var sondurum = new Discord.RichEmbed().setTitle(' ').setDescription(stripIndents`
					${user}, ne yapmak istersin? \`saldır\`, \`savun\`, \`ultra güç\`, veya \`kaç\`?
					**${message.author.username}**: ${userHP} :heartpulse:
					**${opponent.username}**: ${oppoHP} :heartpulse:
				`).setColor('#65dead')
					await message.channel.send(sondurum);
					const filter = res =>
						res.author.id === user.id && ['saldır', 'savun', 'ultra güç', 'kaç'].includes(res.content.toLowerCase());
					const turn = await message.channel.awaitMessages(filter, {
						max: 1,
						time: 30000
					});
					if (!turn.size) {
						await message.reply(`Uh loris... Çok yavaşsın!`);
						reset();
						continue;
					}
					choice = turn.first().content.toLowerCase();
				} else {
					const choices = ['saldır', 'savun', 'ultra güç'];
					choice = choices[Math.floor(Math.random() * choices.length)];
				}
				if (choice === 'saldır') {
					const damage = Math.floor(Math.random() * (guard ? 10 : 100)) + 1;
					var vurdu = new Discord.RichEmbed().setTitle(' ').setDescription(`${user}, **${damage}** hasar vurdu!`).setColor('#65dead')
					await message.channel.send(vurdu);
					dealDamage(damage);
					reset();
				} else if (choice === 'savun') {
					var kalkan = new Discord.RichEmbed().setTitle(' ').setDescription(`${user}, kendisini süper kalkan ile savundu!`).setColor('#65dead')
					await message.channel.send(kalkan);
					guard = true;
					reset(false);
				} else if (choice === 'ultra güç') {
					const miss = Math.floor(Math.random() * 4);
					if (!miss) {
						const damage = randomRange(100, guard ? 150 : 300);
						var sonik = new Discord.RichEmbed().setTitle(' ').setDescription(`${user}, Çoook uzak galaksilerden gelen ultra sonik enerjiyi yeterki miktarda topladın ve **${damage}** hasar vurdun!!`).setColor('#65dead')
						await message.channel.send(sonik);
						dealDamage(damage);
					} else {
						var nosonik = new Discord.RichEmbed().setTitle(' ').setDescription(`${user}, Çoook uzak galaksilerden gelen ultra sonik enerjiyi yeterli miktarda toplayamadığın için ulta güç kullanamadın!`).setColor('#65dead')
						await message.channel.send(nosonik);
					}
					reset();
				} else if (choice === 'kaç') {
					var korkak = new Discord.RichEmbed().setTitle(' ').setDescription(`${user}, kaçtı! Korkak!`).setColor('#65dead')
					await message.channel.send(korkak);
					forfeit();
					break;
				} else {
					await message.reply('Maalesef ne yapmak istediğini anlamadım. Bir WWE oyuncusu isen sana saygı duyuyorum.');
				}
			}
			this.fighting.delete(message.channel.id);
			const winner = userHP > oppoHP ? message.author : opponent;
			var kazanan = new Discord.RichEmbed().setTitle('Oyun bitti. ' + winner + 'kazandı!').setDescription(`**${message.author.username}**: ${userHP} :heartpulse: \n**${opponent.username}**: ${oppoHP} :heartpulse:`).setColor('#65dead');
			return message.channel.send(kazanan);
		} catch (err) {
			this.fighting.delete(message.channel.id);
			throw err;
		}
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['1vs1', '1v1', 'savaş', 'vs'],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: 'düello',
  category: "eğlence",
  description: 'İstediğiniz bir kişi ile düello atarsınız!',
  usage: 'düello <@kullanıcı>'
};
