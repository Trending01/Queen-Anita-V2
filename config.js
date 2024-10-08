//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "abdulbarcky2001@gmail.com";
global.location = "Dubai, UAE";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://trending1:trending1@cluster0.a0u3f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Dubai, UAE";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "233557560911";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU8rb3FqMUdqTE83d1o3LzZIcm85UHhnaFV4K0tvWFZtdDJHNVJXMG4xVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1YxZXZpTW1WQXNSajh2NC9GNEFHUjlPY1JQN0YxMVJPeVNhcDN3ZHF4VT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrS1hPdlJWakZVbFJucWhsMkhscHllUjYzVU9saDNYMjhLVWxoWnNHLzJBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnYStvLzBBU25VRFFIaGRKUlZXYThIQjZuczdablhYaXptOTFUSCtwM2xBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFQTVRsblhkdXRGYWV1ZUNFYjgwQzdRMEtIbzNaNHZKM1orbERQT05ZVnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlEyU1NDamV1ZEtkeTBZczhUZkl2dE1oYUcwUWtJb2FkUU95bWJVemJEMVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0UvbWZ0SG5kSTR0Q1NPWnZ0UXkwZ0ZmN05yN04vOGZYVlZJRzF3S0Ruaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiclpsZzRBUng4S0EwSWJodWFOTHY4RmRHdG9BQ1hpamdjUHVUbE1kSnNFUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNQd29vTTg5SUd1dVIrSHE0TTV0Z3JQTEtvbm5XMkJpWkJoc3duaCt3SkJqeXpRYlEwRmNWaDVwZEdMWDUvcUltMmNOYmRmR21FNW8rZnllT3NLUURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY4LCJhZHZTZWNyZXRLZXkiOiJxdkY4dDU3TnBxREE4ellpUi9ITE1naGxJLzVzOGpDSjdwNk9UVTc0Q0t3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzMzU1NzU2MDkxMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQTE0NDE2MzgxMDY1MEIxMUQxNiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI4MzQ2MTQ4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJWaFRPNzB4V1FleTVpZzM4aENlUWlnIiwicGhvbmVJZCI6ImYwYzg0YTk4LWM1MmQtNGMwNC05NWM0LWY3YjU0YjBhMzcxMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKSS95TW83WHpOSFFWZU1hMnU0elRyOENFb289In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFESVE3cnRaNUpySlE4U0ZoY2JuMnpBeHkwYz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09ubG96Y1FsL0NSdUFZWURDQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImFCT2o3SEhySWpTWTlkU1VNbGdtdkJFa2h0N1Nwa0IrRDVOZkhxUy9QazA9IiwiYWNjb3VudFNpZ25hdHVyZSI6InY3UGZ4MmhnVlQyVDNqSzhQT3B4QnE1T0RkS3dXSXE1eGhWeXdxbm11ajRCUXlKdjZZOWcxSzU0Wm42ODcrbU9ML3BEcnFlSm40WExnMVptK0dPK0RRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJHVFFVYmgzWnljY012WXBCcVE2NkNob1hiQnFKODY3ZlhwWCsxb2k4dG1acTRPQjVzaHE1WFZwREx3RG10NktoeEtjSnc0OWNwYmlxOGVKSlU3aHJDUT09In0sIm1lIjp7ImlkIjoiMjMzNTU3NTYwOTExOjI1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuKXj+KWrOC1oOC1oOKWrCBUUkVORElORyBCT1NTIOKWrOC1oOC1oOKWrOKXjyJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzM1NTc1NjA5MTE6MjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV2dUbyt4eDZ5STBtUFhVbERKWUpyd1JKSWJlMHFaQWZnK1RYeDZrdno1TiJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI4MzQ2MTQ3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpZSyJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "Trending Boaa",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
