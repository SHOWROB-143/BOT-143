 const fs = require("fs");
module.exports.config = {
	name: "mimv1",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "mimv1",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😍")==0 || event.body.indexOf("😅")==0 || event.body.indexOf("🤣")==0 || event.body.indexOf("🖤")==0) {
		var msg = {
				body: "-মানুষকে খুশি করা সবচেয়ে কঠিন🖤😊 -Dear Sir or Madam, Thank you very much for your notification.! Thank you for.(Auto Replied)★Support Email:- Showrobkhan041@gmail.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/s2.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😅", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }