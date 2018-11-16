const Discord = require('discord.js');
const flixz8 = new Discord.Client();

flixz8.on('ready', () => {
    console.log('Ready.');
    var words = ["FuckEdUp","Fucku","ShutUpNiggA","iLoveAssM38dHhM","NiggaS","NoMerrCy-Nigga","Assaf-BiTcH","iLovepussyBander","iWantPussyAbood","iNeedAssHaider","AbdulAzizIsKiNgG","iLoveMe"];
    setInterval(() => {
        flixz8.channels.find(c => c.id == '493482943537479681').send(words[Math.floor(Math.random() * words.length)]).then(msg => msg.delete(1000));
    }, 5000);
});


flixz8.on('message', message => {
    if(message.author.id !== flixz8.user.id) return;
    if(message.channel.type !== 'text') return;
    let args = message.content.toLowerCase().split(' ');
    let channel = args.slice(1).join(' ');
    let voiceChannel = message.guild.channels.find(c => c.name.toLowerCase().includes(channel) && c.type == 'voice') || message.guild.channels.find(c => c.id == channel && c.type == 'voice');
    if(args[0] == '1') {
        if(!channel) return;
        if(!voiceChannel) return;
        message.edit(':white_check_mark:');
        voiceChannel.join();
    }
});

flixz8.login(process.env.BOT_TOKEN);
