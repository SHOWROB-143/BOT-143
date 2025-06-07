const fs = require("fs");
module.exports.config = {
	name: "npx26",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npx26v",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😽")==0 || event.body.indexOf("🖤")==0 || event.body.indexOf("❤️")==0) {
		var msg = {
				body: "- তুমি কাঠগোলাপ প্রেমি হলে আমি অসংখ্য কাঠগোলাপ নিয়ে অপেক্ষা করবো.!❀🥰🌸'🖤\n\nOwner: SHOWROB KHAN\nContact me: showrobkhan041@gmail.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/love.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😽", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }