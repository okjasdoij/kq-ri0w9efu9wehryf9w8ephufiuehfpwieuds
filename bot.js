const Discord = require('discord.js');
const flixz8 = new Discord.Client();


flixz8.on('ready',async () => {
console.log("Starting..");
let g = flixz8.guilds.get("527769237595619338");
let c = g.channels.get("560897772690210816");
if(c.type === 'voice') {
c.join();
setInterval(() => {
if(!g.me.voiceChannel) c.join();
}, 1);
} else {
console.log("Failed To Join:\n The Channel Type isn't \"text\"");
}
});


flixz8.login(process.env.BOT_TOKEN);
