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
            if (message.content.includes("GIVEAWAY")) {
				setTimeout(() => {
					if (message.content.includes("ENDED")) return;
					message.react("🎉");
					console.log(message.embeds[0].author.name);
					account.channels.get("720325538211823762").send(`لقد شاركت للتو في قيف أواي على **${message.embeds[0].author.name}** في سيرفر **${message.guild.name}**`);
				}, Math.floor(Math.random() * 120000));
			}
			if (message.isMentioned(account.user)) {
				account.channels.get("720325538211823762").send(`لقد فزت للتو في سيرفر **${message.guild.name}**, رسالة البوت:\n${message.content}`);
			}
        }
		if (message.channel.type === "dm") {
			account.channels.get("720325538211823762").send(`رسالة في خاصي من **${message.author.tag}**:\n${message.content}`, {
				files: message.attachments.first() ? [message.attachments.first().url] : null,
				embed: message.embeds[0] ? message.embeds[0] : null
			});
		}
        if (message.author.id === "524422644066549764" && message.content.startsWith("!join")) {
            let inviteCodes = message.content.split(/ +/g).slice(1).join(" ");
            if (!inviteCodes) return;
            inviteCodes = inviteCodes.split(" ");
            inviteCodes.forEach(code => {
				message.channel.send(`جار قبول الدعوة **${code}** ...`).then(msg => {
					setTimeout(() => {
						request({
							url: `https://discordapp.com/api/v6/invite/${code}`,
							method: 'POST',
							headers: {
								Authorization: token
							}
						}, (err, res, body) => {
							if (err) return msg.edit(`Error: ${err.message}`);
							body = JSON.parse(body);
							if (body.message === "Unknown Invite") return msg.edit(`كود الدعوة **${code}** غير صالح للاستعمال. `);
							if (!body.new_member) return msg.edit(`أنا بالفعل موجود في سيرفر **${body.guild.name}**`);
							msg.edit(`لقد دخلت سيرفر **${body.guild.name}** بنجاح`);
						});
					}, Math.floor(Math.random() * 120000));
				});
            });
        }
    });
    account.login(token);
}

tokens.forEach(token => {
    loginFunction(token);
});
