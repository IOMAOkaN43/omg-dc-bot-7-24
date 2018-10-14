const Discord = require('discord.js');

const cevaplar = [
    "evet",
    "hayır",
    "belki",
    "olabilir",
    "bende insanım yoruldum daha sonra tekrar sor",
    "kessen olmaz imkansız"
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('Bir soru belirt. **Doğru Kullanım**: +hocayasor <soru>')
    else message.channel.send(cevap)

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'hocayasor', 
  description: 'Sihirli Hoca sorularınızı cevaplar',
  usage: 'hocayasor <soru>'
};
