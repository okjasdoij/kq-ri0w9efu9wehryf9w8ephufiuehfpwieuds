const { Client } = require("discord.js");
const request = require("request");
const tokens = [process.env.TOKEN1, process.env.TOKEN2, process.env.TOKEN3, process.env.TOKEN4];
const loginFunction = (token) => {
    const account = new Client();
    account.on("ready", () => {
        console.log(account.user.tag + " is ready!");
    });
    account.on("message", message => {
        if (message.author.id === "294882584201003009") {
            if (!message.content.includes("GIVEAWAY")) return;
            setTimeout(() => {
                message.react("🎉");
            }, Math.floor(Math.random() * 120000));
        }
        if (message.author.id === "524422644066549764" && message.content.startsWith("!join")) {
            const inviteCodes = message.content.split(/ +/g).slice(1).join(" ");
            if (!inviteCodes) return;
console.log(inviteCodes);
            inviteCodes.forEach(code => {
                setTimeout(() => {
                    request({
                        url: `https://discordapp.com/api/v6/invite/${code}`,
                        method: 'POST',
                        headers: {
                            Authorization: token
                        }
                    }, (err, res, body) => {
                        if (err) return message.channel.send(`Error: ${err.message}`);
                        body = JSON.parse(body);
                        if (body.message === "Unknown Invite") return message.channel.send(`كود الدعوة **${code}** غير صالح للاستعمال. `);
                        if (!body.new_member) return message.channel.send(`أنا بالفعل موجود في سيرفر **${body.guild.name}**`);
                        message.channel.send(`لقد دخلت سيرفر **${body.guild.name}** بنجاح`);
                    });
                }, Math.floor(Math.random() * 120000));
            });
        }
    });
    account.login(token);
}

tokens.forEach(token => {
    loginFunction(token);
});
