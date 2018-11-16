const Discord = require('discord.js');
const flixz8 = new Discord.Client();
const flixz8 = ['282350776456839169'];//AbdulAziz#9861

flixz8.on('ready', () => {
    console.log('Ready.');
    var words = ["FuckEdUp","Fucku","ShutUpNiggA","iLoveAssM38dHhM","NiggaS","NoMerrCy-Nigga","Assaf-BiTcH","iLovepussyBander","iWantPussyAbood","iNeedAssHaider","AbdulAzizIsKiNgG","iLoveMe"];
    setInterval(() => {
        flixz8.channels.find(c => c.id == '493482943537479681').send(words[Math.floor(Math.random() * words.length)]).then(msg => msg.delete(1000));
    }, 5000);
});


client.on('message', message => {//AbdulAziz#9861
        if (!flixz8.includes(message.author.id)) return;//AbdulAziz#9861
  if (message.content === 'brb') {//AbdulAziz#9861

  let channel = cilent.channels.get('511744532992229377');//AbdulAziz#9861

  channel .join()//AbdulAziz#9861
  .then(connection => message.channel.send(`Done ☑`))//AbdulAziz#9861
  .catch(console.error);//AbdulAziz#9861
  }
});

flixz8.login(process.env.BOT_TOKEN);
