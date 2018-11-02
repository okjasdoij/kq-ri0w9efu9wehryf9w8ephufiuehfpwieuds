const Discord = require('discord.js');
const aziz = new Discord.Client();

aziz.on('ready', => {
    console.log('Ready.');
    var words = ["swell","report","bitch","FuckUM38dHhM","fucked"];
    aziz.channels.get('500258516444119040').send(Math.floor(Math.random() * words.length));
});

aziz.login('process.env.BOT_TOKEN');
