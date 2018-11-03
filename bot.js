const Discord = require('discord.js');
const aziz = new Discord.Client();

aziz.on('ready', () => {
    console.log('Ready.');
    var words = ["FuckEdUp","Fku","ShutUpNiggA","iLoveAssM38dHhM","NiggaS"];
    setInterval(() => {
        aziz.channels.get('500258516444119040').send(Math.floor(Math.random() * words.length)).then(msg => msg.delete(1000));
    }, 5000);
});

aziz.login(process.env.BOT_TOKEN);
