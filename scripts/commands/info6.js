module.exports.config = {
	name: "report",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Joshua Sy", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.postimg.cc/4xksYYT7/Screenshot-20250608-235957.jpg", 
            
            "https://i.postimg.cc/1zMQ7MVw/Screenshot-20250608-235942.jpg", 
             "https://i.postimg.cc/mgqmPym9/1709650306209.jpg",
            
            "https://i.postimg.cc/MHWDCPpC/1709650312837.jpg"];
  
var callback = () => api.sendMessage({body:`জ্বী বলুন শুনতেছি......
ADMIN AND BOT INFORMATION 
BOT NAME : 🤖SHOWROB ＢｏＴ- 69🤖 

*My Owner info & Any Problem Contact :-

- নাম।         : সৌরভ খান

- বর্তমান ঠিকানা  : ঢাকা 

- স্থায়ী ঠিকানা    : ঢাকা

- বয়স          : ❌

- GENDER       : MALE

- উচ্চতা         : ৫ ফুট ৬ইঞ্চি

- জন্ম তারিখ     : ২৩ সেপ্টেম্বর ❌

- পেশা          : স্টুডেন্ট 

- যোগ্যতা        : ১ম শ্রেণী
- রিলেশন শিপ    : সিঙ্গেল 

- প্রিয় রং        : কালো ⚫😇

- প্রিয় খাবার      : বিরিয়ানি❤️❤️

- শখ            : নাই

- ইচ্ছা           : নাই

- আসল পরিচয়     : ইসলাম🌸🌺
  
Profile 1 Link :- https://www.facebook.com/SHOWROB.YOUR.FATHER

Profile 2 Link :- https://www.facebook.com/NOT.FOUND.THIS.LINK.SIR

★Facebook Page Link:-https://www.facebook.com/MR.TOM69K

WhatsApp       :- Personal

★Support Email:- Showrobkhan041@gmail.com

➟ UPTIME

TODAY IS TIME : ${juswa} 

BOT IS RUNNING ${hours}:${minutes}:${seconds}.

THANKS FOR USING ${global.config.BOTNAME} 『🙅🖤』`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
