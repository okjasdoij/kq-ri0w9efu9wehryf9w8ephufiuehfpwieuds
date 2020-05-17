const { Client } = require("discord.js");
const flixz9 = new Client();

flixz9.on("message", message => {
    if(message.author.id !== "294882584201003009") return;
    if(!message.content.includes("GIVEAWAY")) return;
    setTimeout(() => {
        message.react(":tada:");
    }, 20000);
});

flixz9.login(process.env.BOT_TOKEN);
