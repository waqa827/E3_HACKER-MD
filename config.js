const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0ZMbTZ4TlAzSnpKRjVobnhOSHZFdjROSEZhbUI0T0hpMms2bE1QTTAzMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibkV1L1Y4TDBHUEkzMWRvWGVDQ2VrVTg5alhaMTg2ZXB5OXh1WVBjaGxsWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhQW45TkR2cXhId3o2S1JFMG82aDBQazUxRFRiSGFURHVueEJieGtoNEhvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4Yy9VcmxVVTE4dmtZTTIyYnVIL0dFMytTMWgzQVZ3TlMwelZqWmRTVFdnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNNUWpDcFN5ak5aNzVSUTFoYUhWVTFVZkRHK3grdXF4bGdidThzNmFZVmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNoUE50bzZSMlk2SEFIWmwreFNpMnZNYUFjZkNZTENaa2l0M0tZYjJ2Rmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0g0ZVBjMlRhM2pRakF0YytxL0Y0eGt3VCs0Ly8wMHN6WW42MmFkMWxuWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk1hUnZQUG5kZ3VuWkovVFNIU1RhTGI3N0E1VHl6NW9lYzdkbGtPcVRtTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkViMHY4Y0h6VWdKejBwdFQrOU1hMGIrMU53SWxlL25JdzdvNGYzdFVOVCt3c1BzdzREVSs3OVI2ekNNRmdwdXN4d29BQXNTZitCSEh2UXFCMlNzWkFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQyLCJhZHZTZWNyZXRLZXkiOiJacENKN1BuWEgxb2IzMlJUUk5EYkRod2ZWbStDRU02ZFVIMDBwRFlGWlNVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJaMjY0RFRTNyIsIm1lIjp7ImlkIjoiOTM3NzQ4NjAyNTQ6NUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjY3NTg2MjI2MTU5NjQ4OjVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKK1BxT2dERU5pcXpjUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzTjFqOUxJeCtvbnpORHM2Sk9QVk1tQTBWd3l4TnhVL0x3V1NZZmFZS1c0PSIsImFjY291bnRTaWduYXR1cmUiOiJxRm5waHJHb0syZXJiRVp2MWRCNHpMOVR1Wmw4RS9Pc1JsczQycW81bnQwQUc2dlJvWVpEczRaWDhVRGJmVW5LUmVTV1MxdWxFQzIvbW1aNDIxZDBCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNWxNdU1BVDR5Vm9oQmlBa3JVOXdLMkFKeG5KbkpPRk9ldEZMN3VkQnVxZkVqZzZyV3RjTnRNeStvM1BNaGNJZHl0Q1NJNGFkTjVlaFRpdUVFNmNXQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5Mzc3NDg2MDI1NDo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmR6ZFkvU3lNZnFKOHpRN09pVGoxVEpnTkZjTXNUY1ZQeThGa21IMm1DbHUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NDQ4NjEwOCwibGFzdFByb3BIYXNoIjoibm0zQmIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUEwViJ9",
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
