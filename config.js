//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "dextermd556@gmail.com";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";  
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkFDejJXSHRyK2hZVHg1WUJmNkREQ0pzWXpocUJLUjJza01yaVY2QTdIRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicEtMVURkOXBuSDlEV0x6eFlTL3kyTkV3cGozeW4xcTgxTEE4anpTR3FHOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFSnE0eWNHUHVVMUpsN29Oc05ldTZPelpuMWZzZTdBSVpGWmFwbXBTY0dRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3TWltNGJPUUxzT1ZTVGJUQi9TMXI1c3h2ZFZ5OE1VN1V5T0NjZ2FEWnl3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndDU0ZOT3dmYTdVS0hTV2ducUhYMUZXT3ZGWGN4OVpHVzVoVWVRWUJ5MVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllmdUVISm5URDIveGsydVNHeG9Gb2svd0tlZ2VncGQ0RmRFaE8xU1hqaEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEJ1cUNMK000T2daVjh5d0JwcWJ1UlM5MUVBM2RKd2JRZGFERGtKZ2IzMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidEorWEM5KzdIYXRyclJxc28wVHlFcUZ0b3dDT0lzWE5Pa3owTjRWZ0Fqbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhVbzAxN0NMNDJ6UVFKQlFSd1FQSnhLS0ZMdmNUOVZMQ2VrRnZmdnZvU1QrQzd1RDhKNmxhTktZbGNqWjJxL2hjVWUvNnFrbXk2ekFPVVc4ckM1cWlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDgsImFkdlNlY3JldEtleSI6IjNFNHlXSERwQTN5SlFpVElzQ2JrazJMTDRSNEdtUXcvNktUYmRZc1E2alk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjlUUTFUeW1TUy15QU1TTHg0ekdNLUEiLCJwaG9uZUlkIjoiODlmMThlMDYtOWExMy00NDY2LTk4NDQtYTk4NDVmNzQ2ZDczIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imk0MndpQVBrU3NuZVNPdEZCaTNQKzdFYTIyOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4R2tQcGN2bFl3OWRHdU1IZldiaXA3cHF4U2M9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTlZDUFFDTVgiLCJtZSI6eyJpZCI6Ijk0NzEyNzc4NjM3OjQyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkNMT1NFRCAhIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJUGxsT1FFRU92bHBiUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJmS0dBVGFiOTBMVFkwc1NVYzZoZVFkVW5iVVRhSC96Q1NrekpqRTVVSVFvPSIsImFjY291bnRTaWduYXR1cmUiOiJYZzZ0OUh2Q2RTWThzcnhGcEZ4RmxXSTczaVhYeDBkdm0rRVFTNXZ3c1UxYzVLYnk2dU9uNnFpQWdFVGxGNmR2UHZNWFROZk9pN2Y0dmRGbmhWMTlDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoick1iT3RINnBmSTlzV0wrVHlhRmQraXh1aUZPQWs0STVoY3FZbzBsSEdHOXF1WTVxS1RBN1ZWRjFuZzFQOGQ3aFFCcTc4aGdOK1B4Mk1udTR5bnlmZ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcxMjc3ODYzNzo0MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYeWhnRTJtL2RDMDJOTEVsSE9vWGtIVkoyMUUyaC84d2twTXlZeE9WQ0VLIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMjgzODk2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9EUyJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "🇱🇰 P͢O͢W͢E͢R͢ B͢Y͢ R͢C͢D͢ M͢D͢",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐃𝐄𝐗𝐓𝐄𝐑,𝐕𝐈𝐏𝐄𝐑",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RCD").toUpperCase(),
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
