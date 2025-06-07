const fs = require("fs");
module.exports.config = {
	name: "npx27",
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
	if (event.body.indexOf("assalamu alaikum")==0 || event.body.indexOf("assalamualaikum")==0 ||
event.body.indexOf("Assalamualaikum")==0 ||
event.body.indexOf("Assalamu alaikum")==0 ||
event.body.indexOf("আসসালামু আলাইকুম")==0 || event.body.indexOf("Assalamu Alaikum")==0) {
		var msg = {
				body: "Walaikum Assalam. I Am Messenger Showrob BOT🙋‍♂️🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/npx27.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥀", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }