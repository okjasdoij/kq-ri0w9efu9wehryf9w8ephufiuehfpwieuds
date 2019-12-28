const Discord = require('discord.js');
const flixz8 = new Discord.Client();

flixz8.on('ready', () => {
    var voiceChannelID = "660177935151661106";
    if(flixz8.channels.get(voiceChannelID).type != 'voice') return console.log('Error: The channel must be voice.');
    flixz8.channels.get(voiceChannelID).join().then(connected => console.log('Successfully connected.')).catch(err => console.log('Something went error.'));
    setInterval(() => {
        if(!flixz8.guilds.get('527769237595619338').me.voiceChannel) flixz8.channels.get(voiceChannelID).join();
    }, 10000);
});

flixz8.login(process.env.BOT_TOKEN);
