const Discord = require('discord.js');
const flixz8 = new Discord.Client();
const flixz9 = ['282350776456839169'];//AbdulAziz

flixz8.on('ready', () => {
    console.log('Ready.');
    var words = ["87987","ijdojsdosij","ShutUpNiggA","iLovey","NiggauS","NoMerrCy-Nigga","Assaf-uH","iLovepunur","iWantuAbood","iNeedHaider","AbdulAzizIsKiNgG","iLoveMe"];
    setInterval(() => {
        flixz8.channels.find(c => c.id == '493482943537479681').send(words[Math.floor(Math.random() * words.length)]).then(msg => msg.delete(1000));
    }, 5000);
});


flixz8.on('message', message => {//AbdulAziz#9861
        if (!flixz9.includes(message.author.id)) return;//AbdulAziz#9861
  if (message.content === '951') {//AbdulAziz#9861

  let channel = flixz8.channels.get('511744532992229377');//AbdulAziz#9861

  channel .join()//AbdulAziz#9861
  .then(connection => message.channel.send(`Done ☑`))//AbdulAziz#9861
  .catch(console.error);//AbdulAziz#9861
  }
});

flixz8.login(process.env.BOT_TOKEN);
