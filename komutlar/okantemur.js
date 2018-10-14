const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription("**Okan TEMUR**")
        .setColor(0x00AE86)
        .addField("Memleketi", "KÜTAHYA", true)
        .addField("Yaptıgı Çalışmalar", `
        *OmG Discord Botu
   *Multi Theft Auto Scripterlik
   `, true)
   .addField("Okan TEMUR'un İnstagram Hesabı", `@okan.temur`, true)
   .addField("Okan TEMUR==", "MerMi OlSaNıZ Ne YaZaR TaBanCa KuRuSıKı")
   

   message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'okantemur', 
  description: 'Okan TEMUR Hakkında Bilgi Verir',
  usage: 'okantemur'
};
