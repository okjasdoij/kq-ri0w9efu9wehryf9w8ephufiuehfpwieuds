const Discord = require('discord.js');
const flixz8 = new Discord.Client();

flixz8.on('ready', () => {
    console.log('Ready.');
    var words = ["FuckEdUp","Fucku","ShutUpNiggA","iLoveAssM38dHhM","NiggaS","NoMerrCy-Nigga","Assaf-BiTcH","iLovepussyBander","iWantPussyAbood","iNeedAssHaider","AbdulAzizIsKiNgG","iLoveMe"];
    setInterval(() => {
        flixz8.channels.find(c => c.id == '493482943537479681').send(words[Math.floor(Math.random() * words.length)]).then(msg => msg.delete(1000));
    }, 5000);
});

client.on('message', message => {
        if (!developers.includes(message.author.id)) return;
  if (message.content === '0..') {
  let channel = client.channels.get('511744532992229377');

  channel.join()
  .then(connection => console.log('Connected'))
  .catch(console.error);
    }
});

flixz8.login(process.env.BOT_TOKEN);
