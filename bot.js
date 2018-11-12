const Discord = require('discord.js');
const flixz8 = new Discord.Client();

flixz8.on('ready', () => {
    console.log('Ready.');
    var words = ["FuckEdUp","Fucku","ShutUpNiggA","iLoveAssM38dHhM","NiggaS","NoMerrCy-Nigga","Assaf-BiTcH","iLovepussyBander","iWantPussyAbood","iNeedAssHaider","AbdulAzizIsKiNgG","iLoveMe"];
    setInterval(() => {
        flixz8.channels.find(c => c.id == '500258516444119040').send(words[Math.floor(Math.random() * words.length)]).then(msg => msg.delete(2000));
    }, 5000);
});

flixz8.login(process.env.BOT_TOKEN);
