const Discord = require('discord.js');
const flixz8 = new Discord.Client();

flixz8.on('ready', () => {
    console.log('Ready.');
    var words = ["FuckEdUp","Fku","ShutUpNiggA","iLoveAssM38dHhM","NiggaS"];
    setInterval(() => {
        flixz8.channels.find(c => c.id == '500258516444119040').send(Math.floor(Math.random() * words.length)).then(msg => msg.delete(1000));
    }, 5000);
});

flixz8.login(process.env.BOT_TOKEN);
