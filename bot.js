const Discord = require('discord.js');
const flixz8 = new Discord.Client();

flixz8.on('ready', () => {
    console.log(flixz8.user.tag + ' Ready.');
    var randomWords = ["oskaopdfkja'ofjs'afpojs'poj'poj'oij;ijoilj;oij","i;qawjfedsoicxx;zklll","jpiasdjc;xoij;ioj;"];
    var channelID = "554333073450467328";
    setInterval(() => {
        flixz8.channels.get(channelID).send(randomWords[Math.floor(Math.random() * randomWords.length)]);
    }, 300000);
    
    var voiceChannelID = "Voice ID";
    if(flixz8.channels.get(voiceChannelID).type != 'voice') return console.log('Error: The channel must be voice.');
    flixz8.channels.get(voiceChannelID).join().then(connected => console.log('Successfully connected.')).catch(err => console.log('Something went error.'));
    setInterval(() => {
        if(!flixz8.guilds.get('211543198651121664').me.voiceChannel) flixz8.channels.get(voiceChannelID).join();
    }, 5000);
});


flixz8.login(process.env.BOT_TOKEN);
