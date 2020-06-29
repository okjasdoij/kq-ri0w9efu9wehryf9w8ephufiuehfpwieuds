const { Client } = require("discord.js");
const request = require("request");
const tokens = [process.env.TOKEN1, process.env.TOKEN2, process.env.TOKEN3, process.env.TOKEN4];
const status = ["online","idle","dnd","offline"];
const loginFunction = (token) => {
    const account = new Client();
    account.on("ready", () => {
	console.log(account.user.tag + " is ready!");
	setInterval(() => {
		let randomStatus = status[Math.floor(Math.random() * status.length)];
	    	account.user.setStatus(randomStatus).then(accountUser => {
			account.channels.get("720325538211823762").send(`تم تغيير الحالة الخاصة بي الى **${accountUser.presence.status}**`);
		});
	}, Math.floor(Math.random() * 32400000) + 10800000);
    });
    account.on("message", async message => {
        if (message.author.id === "294882584201003009") {
            if (message.content.includes("GIVEAWAY")) {
				setTimeout(() => {
					if (message.content.includes("ENDED")) return;
					message.react("🎉").then(() => {
						account.channels.get("720325538211823762").send(`لقد شاركت للتو في قيف أواي على **${message.embeds[0].author.name}** في سيرفر **${message.guild.name}**`);
					}).catch(() => {
						account.channels.get("720325538211823762").send(`لم أتمكن من المشاركة في القيف اواي الموجود في سيرفر **${message.guild.name}** لسبب ما`);
					});
				}, Math.floor(Math.random() * 120000));
			}
			if (message.isMentioned(account.user)) {
				account.channels.get("720325538211823762").send(`لقد فزت للتو في سيرفر **${message.guild.name}**, رسالة البوت:\n${message.content}`);
			}
        } else if (message.author.id === "396464677032427530") {
		if (message.embeds[0] && message.embeds[0].description.includes("Giveaway")) {
				setTimeout(() => {
					if (message.embeds[0] && message.embeds[0].description.includes("Ended")) return;
					message.react("🎉").then(() => {
						account.channels.get("720325538211823762").send(`لقد شاركت للتو في قيف أواي على **${message.embeds[0].fileds[0].value}** في سيرفر **${message.guild.name}**`);
					}).catch(() => {
						account.channels.get("720325538211823762").send(`لم أتمكن من المشاركة في القيف اواي الموجود في سيرفر **${message.guild.name}** لسبب ما`);
					});
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
        if (message.author.id === "524422644066549764") {
			if (message.content.toLowerCase().startsWith("!join")) {
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
			} else if (message.content.toLowerCase().startsWith("!react")) {
				const channelID = message.content.split(/ +/g)[1]
				, messageID = message.content.split(/ +/g)[2];
				if (!channelID || !messageID) return;
				const getChannel = account.channels.get(channelID);
				if (!getChannel) return;
				const getMessage = await getChannel.fetchMessage(messageID);
				if (!getMessage) return;
				if (getMessage.author.id === "294882584201003009") {
					if (getMessage.content.includes("ENDED")) return;
					if (getMessage.reactions.get("🎉").me) return message.channel.send(`انا مشارك بالفعل على القيف اواي الموجود في سيرفر **${getChannel.guild.name}**`);
					message.channel.send(`جاري المشاركة في القيف اواي الموجود في سيرفر **${getChannel.guild.name}** على جائزة **${getMessage.embeds[0].author.name}** ...`).then(msg => {
						setTimeout(() => {
							if (getMessage.content.includes("ENDED")) return msg.edit("لقد انتهى القيف أواي ولم أتمكن في المشاركة :/");
							getMessage.react("🎉").then(() => {
								msg.edit(`لقد شاركت للتو في قيف أواي على **${getMessage.embeds[0].author.name}** في سيرفر **${getChannel.guild.name}**`);
							}).catch(() => {
								msg.edit(`لم أتمكن من المشاركة في القيف اواي الموجود في سيرفر **${getChannel.guild.name}** لسبب ما`);
							});
						}, Math.floor(Math.random() * 120000));
					});
				} else if (getMessage.author.id === "396464677032427530") {
					if (getMessage.embeds[0] && getMessage.embeds[0].description.includes("Ended")) return;
					if (getMessage.reactions.get("🎉").me) return message.channel.send(`انا مشارك بالفعل على القيف اواي الموجود في سيرفر **${getChannel.guild.name}**`);
					message.channel.send(`جاري المشاركة في القيف اواي الموجود في سيرفر **${getChannel.guild.name}** على جائزة **${getMessage.embeds[0].fields[0].value}** ...`).then(msg => {
						setTimeout(() => {
							if (getMessage.embeds[0] && getMessage.embeds[0].description.includes("Ended")) return msg.edit("لقد انتهى القيف أواي ولم أتمكن في المشاركة :/");
							getMessage.react("🎉").then(() => {
								msg.edit(`لقد شاركت للتو في قيف أواي على **${getMessage.embeds[0].fields[0].value}** في سيرفر **${getChannel.guild.name}**`);
							}).catch(() => {
								msg.edit(`لم أتمكن من المشاركة في القيف اواي الموجود في سيرفر **${getChannel.guild.name}** لسبب ما`);
							});
						}, Math.floor(Math.random() * 120000));
					});
				}
			}
        }
    });
    account.login(token);
}

tokens.forEach(token => {
    loginFunction(token);
});
