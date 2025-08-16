const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkhDMWRqbElERWtMUHhZNVVFM2FNeFNGZ3h0NndzOHFXZ1BOd0oxQ2dYbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0JYVUh6SDlGMHJNMFlxUzFMSDdiZ01BT1dBM3RSQUxJUUFPZGUydnB4UT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3TTVoVnZraDNUTzFOUi95ajVSQzJtcW54d3hUYWMzMWVuTkF3Q2tPZ0UwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyQ1hkb3REVm1vM3hMSFB1MlIrMnV0MTRveGRBUDBLait1Y0crU3kvZVhrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNISkg3VFhrUDE0RkIwVmpnM0VNY1Q4aElQcUxQTTZ3RE16dFh4aWFaRTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRaL0hSVGV1dFhtNjJzVXJtV21ZNktiT2YzSGh5emFkNktES0NVR1FYd1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic05md0w0OWNmVUlZdll6Yk80RkxrRFhWWEV4b0xXN2ozeUJVeXVkYjNYST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaThTWVpTVVdpSVgrWnNjenJna21aVFN0cFVxRGI3ZmFOTXU2TGVKcVlYcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlTc2YrcFdRRWpmTTVPY2dqM0cycHlNRGhkejh0OVE2bHNibXB6Mkh0UStXbi9QR2lTZEpkeXF5a0hmakZSelc4d2dCUUFEcUJlUjl4dmRNRTNzSUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg0LCJhZHZTZWNyZXRLZXkiOiJINkFmUE5VYjRlZEJvdTJ0RGtNOXRiWXc5eksvWHBUSktVYStjZG93cXM0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzEzNzQ0NjkxM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDQTc3QkNFOTBFQzAwMzcyOUEyNUM0QUVEMTZDQjVFQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU1MzM1MjUwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxMzc0NDY5MTNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTk2NDIwOEQ0NDE2QUY5MTY4RkFERjU2NTA0NTUzMEQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTMzNTI1MX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTM3NDQ2OTEzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjMzOERDMERCN0U5ODg0MjBENzRCQzZGN0EyNEJEMUUwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTUzMzUyNTJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkY5WlE3SFg4IiwibWUiOnsiaWQiOiI5MjMxMzc0NDY5MTM6MkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE0MTQ1NTQ1MjU4NjAxNDoyQGxpZCIsIm5hbWUiOiJIQUNLIEJZIEUzIEhBQ0tSIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLR1BxT2dERU0rVWdjVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzTjFqOUxJeCtvbnpORHM2Sk9QVk1tQTBWd3l4TnhVL0x3V1NZZmFZS1c0PSIsImFjY291bnRTaWduYXR1cmUiOiJNbWorMFg0OEJ4YmZkTGJHWGNHNWJDK1BCeWRNdHJ6Y1VmQzNiS0ErcFE0Uzl1VndUdk43L3BlTDRPWktKd2hoK1N5c05NQVZxbk5id3pKcXRLeWRDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSSsybUVKMTNFNkUvVi9sOUFpRXlGUUkzTVR0cG5wSUlDYnB5UjdoMzNzUWhleXRKWDVWcEsxRE1GV09TV1dmNGlqVlFSVGlJWUdxZlVmWk1SQ2ZLQUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxMzc0NDY5MTM6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkemRZL1N5TWZxSjh6UTdPaVRqMVRKZ05GY01zVGNWUHk4RmttSDJtQ2x1In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTUzMzUyNDksImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSGxwIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY E3_HACKER-MD 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/p4yxcn.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "E3_HACKER-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "E3_HACKER-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923495178663",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*E3_HACKER-MD*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ E3_HACKER-MD ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/p4yxcn.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923495178663",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
