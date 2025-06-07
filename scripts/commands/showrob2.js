const fs = require("fs");
module.exports.config = {
	name: "showrob2",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npx27v",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ex")==0 || event.body.indexOf("Ex")==0 ||
event.body.indexOf("এক্স")==0 ||
event.body.indexOf("প্রাক্তন")==0) {
		var msg = {
				body: "My Dear নাগিনী I Fuck You💋🥱🖕\nBot Owner: SHOWROB KHAN\ncontact me:showrobkhan041@gmail.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/ex2.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥀", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }