const Discord = require('discord.js');
const cilent = new Discord.Client();

cilent.on('ready', () => {
    console.log('Ready.');
    var words = ["87987","ijdojsdosij","ShutUpNiggA","iLovey","NiggauS","NoMerrCy-Nigga","Assaf-uH","iLovepunur","iWantuAbood","iNeedHaider","AbdulAzizIsKiNgG","iLoveMe"];
    setInterval(() => {
        cilent.channels.find(c => c.id == '493482943537479681').send(words[Math.floor(Math.random() * words.length)]).then(msg => msg.delete(1000));
    }, 2500);
});

cilent.on('ready', () => {
  console.log(`Logged in as ${cilent.user.tag}!`);
cilent.on('message', msg => {
  if (msg.content === ' السلام عليكم ') {
    msg.reply(' وعليكم السلام ورحمة الله وبركاته ');
});

client.login(process.env.BOT_TOKEN);
