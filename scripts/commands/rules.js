module.exports.config = {
	name: "rules",
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
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.postimg.cc/vBFp9qM5/20230829-221823.png",
            "https://i.postimg.cc/43C8FYMg/20230822-203954.png",
"https://i.postimg.cc/pLLcPb0c/New-Project-24-1-A56-F5-C.png",
"https://i.postimg.cc/YCtN4QJj/New-Project-14-6-B87-B80.png"];var callback = () => api.sendMessage({body:`🌿🥀Assalamu alaikum🌿

👉Admin Post 
★রোবট রুল্স মেনে চলুন ★
╭────────────────────────➤ এই রোবটের নাম হচ্ছে  𓆩King_Showrob‣᭄𓆪- ⓪⑨🔥 সে Showrob বললেই রিপ্লাই করবে অযথা বট বট করবেন না করবেন না কারণ যে কোন জিনিসের একটা নিয়ম থাকে প্রতি ১০ সেকেন্ড বা ২০ সেকেন্ড পর পর Showrob কে ডাকতে পারেন সমস্যা নাই অযথাই যদি  করে থাকেন তাহলে আপনাকে ব্যান করা হবে 

╰─────────────────────────➤

(1) : গ্রুপের সবার সাথে ভদ্রভাবে কথা বলুন

(2): কাউকে নিয়ে গালিগালাজ বা ট্রল করবেন না

(3): গ্রুপের নাম এবং  পিক এবং ইমোজি কিছুই চেঞ্জ করা যাবে না

(4): গ্রুপে অন্য কোনো রোবট  এড দেওয়া যাবে না

(5): অতিরিক্ত এস্প্যাম করা যাবে না

(6): রোবটের হেল্প কমন্ডে যে কমান্ড গুলা আছে ওইগুলার বাহিরে উল্টাপাল্টা কোন কমান্ড ইউজ করা যাবে না

(7): গ্রুপে কোন প্রকার ১৮ + পিক বা ১৮ + কোন ভিডিও বিভিন্ন ওয়েবসাইটের কোন লিংক শেয়ার করা যাবে না

(8): আপনারা কেউ যদি এই রোবট আপনাদের পার্সোনাল কোন গ্রুপে এড করতে চান তাহলে অবশ্যই রোবট এর এডমিনের সাথে কথা বলতে হবে

(9): রোবট এডমিনের পারমিশন ছাড়া  গ্রুপ থেকে রোবট কিক মারা যাবে না

(10): যারা রোবট সম্পর্কে কিছুই জানেন না তারা দয়া করে কেউ ফালতু কমান্ড ইউজ করবেন না

(11) : রোবট এডমিনের পারমিশন ছাড়া অন্য কোন গ্রুপে এড করা যাবে না

(12): বট নিয়া যদি কারো কোন সমস্যা থাকে তো এডমিনের সাথে যোগাযোগ করতে পারেন সমস্যা নাই

(13): বাট ফাইল বা কোন কমান্ড চাওয়া যাবে না

(14): এই রুলস গুলো যদি মেনে চলতে পারেন তাহলে গ্রুপে থাকবেন না হলে নিজ দায়িত্বে  লিভ নিয়ে চলে যাবেন অযথাই এডমিনকে কিক মারতে বাধ্য করবেন না সবাইকে রোবট এর রুলস গুলা মেনে চলার অনুরোধ রইলো ধন্যবাদ

╭────────────────────────➤
 !↪️ রোবট এডমিন আইডি ইউজার↩️
 !
 !↪️ SHOWROB CHOWDHURY ↩️
 !
 !↪️ রোবট এডমিন এর মেসেঞ্জার লিংক↩️
 !
 !↪️ m.me/100004696126784↩️
 !
 !↪️ কোনো হেল্প লাগলে এডমিন কে ইনবক্সে করুন↩️
 !
 !↪️ রোবট-এডমিন- SHOWROB CHOWDHURY↩️
 !
╰─────────────────────────➤
♥~ভালোবাসা😍অবিরাম😍

🌿🌺🥀ধন্যবাদ🥀🌺🌿
 
#𝑯𝑨𝑷𝑷𝒀_𝑮𝑹𝑼𝑼𝑷𝑰𝑵𝑮~☺`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };