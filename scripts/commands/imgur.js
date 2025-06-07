module.exports.config = {
  name: "imgur",
  version: "1.0.0",
  permission: 0,
  credits: "Nayan",
  description: "",
  prefix: false, 
  category: "user", 
  usages: "Link",
  cooldowns: 5,
  dependencies: {
	}
};

module.exports.run = async ({ api, event, args }) => {
    const axios = global.nodemodule['axios'];
    const linkanh = event.messageReply.attachments[0].url || args.join(" ");
    if (!linkanh)
        return api.sendMessage('[⚜️]➜ Please respond or enter image link', event.threadID, event.messageID);
    try {
      var tpk = `",`;
        const allPromise = (await Promise.all(event.messageReply.attachments.map(item => axios.get(`http://download-api.xaikon4y4n.repl.co/imgur?link=${encodeURIComponent(item.url)}`)))).map(item => item.data.uploaded.image);
        return api.sendMessage(`"` + allPromise.join('"\n"') + tpk, event.threadID, event.messageID);
    }
    catch (e) {
        return api.sendMessage('[⚜️]➜ An error occurred while executing the command', event.threadID, event.messageID);
    }
};
          