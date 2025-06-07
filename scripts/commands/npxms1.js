const fs = require("fs");
module.exports.config = {
	name: "npxms1",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxms1",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Broken")==0 || event.body.indexOf("Dhoka")==0 || event.body.indexOf("Time pass")==0 || event.body.indexOf("Beiman")==0) {
		var msg = {
				body: "𝘿𝙪𝙣𝙞𝙮𝙖 𝙈𝙚𝙞𝙣 𝙊𝙧 𝘽𝙝𝙞 𝙃𝙤𝙜𝙖 𝙏𝙚𝙧𝙚 𝙅𝙚𝙞𝙨𝙖 𝙇𝙚𝙞𝙠𝙞𝙣... 🙂\n𝙃𝙪𝙢 𝙏𝙪𝙟𝙝𝙚 𝘾𝙝𝙖𝙝𝙩𝙚𝙝𝙚...🥺\n 𝙩𝙚𝙧𝙚 𝙅𝙚𝙞𝙨𝙖 𝙉𝙖𝙝𝙞.....!!💔🏵🌺😊\n\nOwner: SHOWROB KHAN\nContact me: showrobkhan041@gmail.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/jeisa.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💔", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }