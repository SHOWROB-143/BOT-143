const fs = require("fs");
module.exports.config = {
	name: "npxs12",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs12",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("💟")==0 || event.body.indexOf("💘")==0 || event.body.indexOf("💗")==0 || event.body.indexOf("🔥")==0) {
		var msg = {
				body: "𝗧𝘂𝗺𝗻𝗲 𝗸𝗶𝘆𝗮 𝗰𝗵𝗼𝗿𝗱𝗻𝗮 𝘁𝗵𝗮 𝗺𝘂𝗷𝗵𝗲,😅\n𝗧𝘂𝗺𝗵𝗮𝗿𝗶 𝗔𝘄𝘂𝗸𝗮𝘁 𝗡𝗮𝗵𝗶 𝘁𝗵𝗶 𝗺𝘂𝗷𝗵𝗲 𝗽𝗮𝗻𝗲 𝗸𝗶__!!🥱🖕\n\nOwner: SHOWROB KHAN\ncontact me: showrobkhan041@gmail.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/n2.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💗", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }