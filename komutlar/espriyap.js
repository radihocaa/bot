const discord = require("discord.js");

exports.run = function(client, message, args) {
var eprilist = [
  "Adamın biri güneşte yanmış,ay da düzmüş.",
  "Geçen gün geçmiş günlerimi aradım ama meşguldü",
  "Röntgen Filmi çektirdik, yakında sinemalarda.",
  "Türkiye’nin en yeni şehri – Nevşehir",
  "Ben hikâye yazarım Ebru Destan.",
  "Sana bir kıllık yapayım, kıllarını koyarsın",
  "En çok eşek yavrusu nerde bulunur? -  **Tabi ki SPA merkezinde.**",
  "Rıdvanı'nın bi büyüğü kimdir - **Rıdtwo**",
  "Mafya babası olmak için oğlumun adını **“Mafya”** koydum.",
  "Kim vurduya gittim, **birazdan gelicem**",
  "Zenginler et, **fakirler hayalet yer.**",
  "Abi sen tüp bebek misin? - **Gaz kaçırıyorsun da.**",
  "Pişmemiş burgere ne denir? - **Hamburger**.",
  "Seven unutmaz oğlum , **eight** unutur.",
  "Dört tarafı suyla çevrili çaya ne denir? - **Adaçayı**.",
  "Fransız ihtilali neye karşı yapılmıştır? -- Sabaha karşı.",
  "Geçen gün taksi çevirdim hala dönüyor.Geçen gün taksi çevirdim hala dönüyor.",
  "Adamın biri kızmış istemeye gelmişler.",
  "Funda Arar dediler ama hala daha aramadı.",
  "Adamın kafası atmış bacakları eşek.",
  "Adamın biri gülmüş, saksıya koymuşlar.",
  "Yağmur yağmış, kar peynir!",
  "Sakla samanı, inekler aç kalsın.",
  "Dünya dönermiş ay da köfte…",
  "Bu erikson, başka erik yok.",
  "Sen kamyonu al, leonardo da vinci.",
  "Çalmak fiilinin gelecek zamanı nedir? - **Hapse girmek**.",
  "Çok tatlısın ama bende şeker hastasıyım.",
  "Kediler niçin havaalanına gidemez? Çünkü pist var.",
  "Adamın bir varmış. İkinci dönem düzetmiş",
  "Koltuk altı spreyi aldım evdeki bütün koltukların altına sıktım ohh miss gibi.",
  "Yıkanan Ton’a ne denir? Washington!",
  "Basamakta durmayın otomatik kapı çarpar, böler, karekökünü alır.",
  "Sakın ha bi hamster’a şeker serpip, “Aaa! Ne şeker bi Hamster!” demeyin.",
  "3 Japon sırayla uçaktan atlamış. Japonlar ölmüş, sıra ise kırılmış!",
  "Yarasa yararlı bir hayvandır. Yararlı bir hayvan olmasaydı yaramasa derlerdi.",
  "Gizlice taksimetreye bakmaya çalışırken sol gözüm taksicinin kucağına düştü.",
  "Gizlice taksimetreye bakmaya çalışırken sol gözüm taksicinin kucağına düştü.",
  "İki diş şarjım kaldı ne demek lan batarya yerine sarımsak mı takıyon telefona.",
  "Annemin bahsettiği elalem diye bir örgüt var illuminatiden daha tehlikeli yemin ederim."
];
message.channel.send(`:timer: Espri geliyor..`).then(message =>{
  var sogukespri = eprilist[Math.floor(Math.random() * eprilist.length)]
  message.edit("Espri : "+sogukespri)
})
};

exports.conf = {
  enabled: true, //True => Komut açık, False => Komut kapalı
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: ['espri','soğuk','sogukespri'], //Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: "soğukespri", //Komutun adı (Komutu girerken lazım olucak)
  category: "eğlence", //Komutun olduğu kategori. kategoriler: bot-yetkili-ayar-kullanıcı-eğlence
  description: "IQ Düşürten eprililer", //Komutun Açıklaması
  usage: "soğukespri" //komutun kullanım şekli; ÖR: !ban @Kullanıcı
};