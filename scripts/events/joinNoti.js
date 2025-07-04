
module.exports.config = {
 name: "joinNoti",
 eventType: ["log:subscribe"],
 version: "1.0.1",
 credits: "CatalizCS", //fixing ken gusler
 description: "Notify bot or group member with random gif/photo/video",
 dependencies: {
  "fs-extra": "",
  "path": "",
  "pidusage": ""
 }
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

 const path = join(__dirname, "cache", "joinGif");
 if (existsSync(path)) mkdirSync(path, { recursive: true }); 

 const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event }) {
 const { join } = global.nodemodule["path"];
 const { threadID } = event;
 if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
  api.changeNickname(`{ ${global.config.PREFIX} } × ${(!global.config.BOTNAME) ? "bot" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
  const fs = require("fs");
  return api.sendMessage("চলে এসেছি আমি সৌরভ BOT🤖", event.threadID, () => api.sendMessage({body:`আসসালামুআলাইকুম❤️
🤖\nBOT CONNECTED!!! \nadding in the group chat successfully!!!\nTHANKS FOR ADDING YOUR GROUP\n\nOWNER: SHOWROB KHAN\nFACEBOOK : https://www.facebook.com/SHOWROB.YOUR.FATHER\nEMAIL: showrobkhan041@gmail.com\nUse ${global.config.PREFIX}help to see commands.\n\nexample :\n${global.config.PREFIX}mark (text)\n${global.config.PREFIX}lexi (text)\n${global.config.PREFIX}trump (text)\n${global.config.PREFIX}info 
`, attachment: fs.createReadStream(__dirname + "/cache/intro.mp4")} ,threadID));
 }
 else {
  try {
   const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
   let { threadName, participantIDs } = await api.getThreadInfo(threadID);

   const threadData = global.data.threadData.get(parseInt(threadID)) || {};
   const path = join(__dirname, "cache", "joinGif");
   const pathGif = join(path, `${threadID}.gif`);

   var mentions = [], nameArray = [], memLength = [], i = 0;
   
   for (id in event.logMessageData.addedParticipants) {
    const userName = event.logMessageData.addedParticipants[id].fullName;
    nameArray.push(userName);
    mentions.push({ tag: userName, id });
    memLength.push(participantIDs.length - i++);
   }
   memLength.sort((a, b) => a - b);
   
   (typeof threadData.customJoin == "undefined") ? msg = "🥀আ্ঁস্ঁসা্ঁলা্ঁমু্ঁআ্ঁলা্ঁই্ঁকু্ঁম্ঁ🥀\n\n🥰{name}🥰\n ব্ঁন্ধু্ঁ আ্ঁপ্ঁনি্ঁ আ্ঁমা্ঁদে্ঁর্ঁ গ্রু্ঁপে্ঁর্ঁ {soThanhVien} না্ঁম্বা্ঁর্ঁ স্ঁদ্ঁস্য্ঁ🥰.\n\n🥀{threadName}🥀\n\n🥀 গ্রু্ঁপে্ঁর্ঁ প্ঁক্ষ্ঁ থে্ঁকে্ঁ আ্ঁপ্ঁনা্ঁকে্ঁ♥\n\n🥰🥀ᏔᎬᏞᏟϴᎷᎬ🥀🥰\n┌──────────────♣───────────────┐\n\n😘♦SHOWROB CHOWDHURY ♦😘\n\n└──────────────♣───────────────┘\n\n I'm bot messenger🤖 \n name: SHOWROB BOT BOT😝 \n BOT Admin: SHOWROB CHOWDHURY 😇\nContact me: showrobkhan041@gmail.com" : msg = threadData.customJoin;
   msg = msg
   .replace(/\{name}/g, nameArray.join(', '))
   .replace(/\{type}/g, (memLength.length > 1) ? 'You' : 'Friend')
   .replace(/\{soThanhVien}/g, memLength.join(', '))
   .replace(/\{threadName}/g, threadName);

   if (existsSync(path)) mkdirSync(path, { recursive: true });

   const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

   if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
   else if (randomPath.length != 0) {
    const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
    formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
   }
   else formPush = { body: msg, mentions }

   return api.sendMessage(formPush, threadID);
  } catch (e) { return console.log(e) };
 }
        }
