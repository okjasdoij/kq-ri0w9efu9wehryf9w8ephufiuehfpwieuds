const Discord = require('discord.js');
const flixz8 = new Discord.Client();

flixz8.on('ready', () => {
    console.log('Ready.');
    var words = ["FuckEdUp","Fucku","ShutUpNiggA","iLoveAssM38dHhM","NiggaS","NoMerrCy-Nigga","Assaf-BiTcH","iLovepussyBander","iWantPussyAbood","iNeedAssHaider","AbdulAzizIsKiNgG","iLoveMe"];
    setInterval(() => {
        flixz8.channels.find(c => c.id == '493482943537479681').send(words[Math.floor(Math.random() * words.length)]).then(msg => msg.delete(1000));
    }, 5000);
});

flixz8.on('presenceUpdate', (o, n) => {
    if(o.user.id !== flixz8.user.id) return;
    if(n.presence.status == 'idle') {
        let afk = '511744532992229377';
        let channelVoice = flixz8.channels.find(c => c.id == 511744532992229377);
        channelVoice.join();
    }
});

flixz8.login(process.env.BOT_TOKEN);
