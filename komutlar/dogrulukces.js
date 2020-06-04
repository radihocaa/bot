const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    var dogruluk = [
	'Telefonunda arattığın en son şey nedir ?',
	'Bir sabah karşı cins olarak uyansaydın ilk yapacağın şey ne olurdu ?',
	'Sokakta yere bir şey düşürdüğünde hiç bir şey olmamış gibi alıp ağzına attın mı ?',
	'hayatta en utandığın anı söyle' , 'en sevdiğin yemek?',
	'hayatta en acı çektiğin an (fiziksel)' ,
	'hayatta en acı çektiğin an (duygusal)',
	'cinsel organ(lar)ını kaybetmeyi mi yoksa 150 kilo almayı mı tercih edersin?',
	'Yeniden doğma şansın olsaydı hangi dönemde yaşamak isterdin?',
	'Birdenbire görünmez olsaydın ne yapardın?',
	'En büyük korkun nedir?',
	'Gelecek hafta dünyanın sonu olacak ve her şeyi yapma imkanına sahipsin. Ne yapardın?',
	'Birisi gün boyu tişörtünü ters giymen için sana 100 TL verse yapar mısın?',
	'Bir alışveriş merkezinde başına gelen en çılgınca şey neydi?',
	'Sevgili mi istersin yoksa 100 lira mı ?',
	'Çıplak olmak mı yoksa düşündüğün her şeyin tişörtünde yazması mı? Hangisini seçerdin?',
	'Hiç ailenin odasına lüzumsuz bir giriş yaptın mı?',
	'Hiç bilindik hayvan etlerinden farklı bir et yedin mi?',
	'En kötü alışkanlığın nedir?',
	'Hiç sen banyodayken birisi içeri pat diye girdi mi?',
	'Hiç aynada kendinle konuştun mu?',
	'Uykunda konuşur musun?',
	'Gizli aşkın kim?',
	'Sence kızlar sevimli mi?',
	'Sence erkekler sevimli mi?'
	];
    var cesaret = [
	'İğrenç bir ses tonuyla şarkı söyle', 
	'Bugün yaptığın bir şeyle alakalı uydurma kısa, komik bir hikaye anlat',
	'Whatsappındaki son mesajlaşmanı bize oku', 'Çok yüksek bir sesle 3 saniye bağır',
	'annene seslen ama cevap verme' , 'annene seslen ve masaya vur',
	'discordda boş yere kavga çıkart(eğer komut özcan showda kullanılıyorsa yapma)',
	'Bir köpek gibi havla.'
	];
    var dogrulukcevap = dogruluk[Math.floor(Math.random() * dogruluk.length)];
    var cesaretcevap = cesaret[Math.floor(Math.random() * cesaret.length)]

    message.channel.send('\`Doğruluk\` mu yoksa \`cesaret\` mi?')
    let uwu = false;
    while (!uwu) {
        const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 30000 });
        const choice = response.first().content
        if (choice == 'doğruluk' || choice == 'd') return message.channel.send(`${dogrulukcevap}`)
        if (choice !== 'cesaret' && choice !== 'c') {
            message.channel.send(`Lütfen sadece **doğruluk (d)** veya **cesaret (c)** ile cevap verin.`) 
        }
        if (choice == 'cesaret' || choice == 'c') uwu = true
    }
    if (uwu) {
        message.channel.send(`${cesaretcevap}`)

    }
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['dc'],
    permLevel: 0
};

exports.help = {
    name: 'doğrulukcesaret',
    description: 'Doğruluk cesaret oynarsınız',
    usage: 'doğrulukcesaret'
};