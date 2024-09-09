const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="anonymoustechgodfather@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/whitedevi5776/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Vafy50bB4hdZV9YAAn2r";
global.website=process.env.GURL ||  "https://whatsapp.com/channel/0029Vafy50bB4hdZV9YAAn2r" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/C5hORCE.jpeg" || "https://i.imgur.com/C5hORCE.jpeg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© eviltech" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '')  "2349137924240";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "true" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 1
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_01_09_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDkzLFxuICAgICAgICA4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMjQ1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI3LFxuICAgICAgICA5OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAzMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMixcbiAgICAgICAgMTk0LFxuICAgICAgICA4OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDUyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDkwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzLFxuICAgICAgICA3NSxcbiAgICAgICAgODUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODMsXG4gICAgICAgIDExLFxuICAgICAgICAyMjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU3LFxuICAgICAgICAzNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA0LFxuICAgICAgICA1MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQxLFxuICAgICAgICA5MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTczLFxuICAgICAgICAzMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1LFxuICAgICAgICAxMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYxLFxuICAgICAgICA2NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODYsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU1LFxuICAgICAgICAyNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDY3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDExMixcbiAgICAgICAgODYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDM3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDk2LFxuICAgICAgICA3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA1MixcbiAgICAgICAgMjMzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJrcHdJdDFUalRPRmNhdnU1cnk1bG9qbUpCSUovUUF4U1BHUUhhbXpHeXNNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJNS3J1eFFSNVFjYXE4RlQ1clFjbklnXCIsXG4gIFwicGhvbmVJZFwiOiBcImJiYzEyMWIyLTUxMmYtNGY3MC04ZGNhLTQ2NmI2NzA4YjZkMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDAsXG4gICAgICAxMTMsXG4gICAgICAxMjYsXG4gICAgICA4MyxcbiAgICAgIDE4MixcbiAgICAgIDE2OSxcbiAgICAgIDc0LFxuICAgICAgNTUsXG4gICAgICAzNCxcbiAgICAgIDE4NyxcbiAgICAgIDIyMixcbiAgICAgIDExMyxcbiAgICAgIDEwMyxcbiAgICAgIDMxLFxuICAgICAgMjEsXG4gICAgICAyMTYsXG4gICAgICAyNTUsXG4gICAgICAyOCxcbiAgICAgIDYwLFxuICAgICAgMTkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NyxcbiAgICAgIDg4LFxuICAgICAgMjI1LFxuICAgICAgOTYsXG4gICAgICAxMTAsXG4gICAgICAyOCxcbiAgICAgIDE2MCxcbiAgICAgIDUxLFxuICAgICAgMTUzLFxuICAgICAgMjQyLFxuICAgICAgMTg5LFxuICAgICAgNzAsXG4gICAgICAyNTIsXG4gICAgICA5NyxcbiAgICAgIDEzLFxuICAgICAgMTY3LFxuICAgICAgNDUsXG4gICAgICA2NSxcbiAgICAgIDE5OSxcbiAgICAgIDc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktES1lDRTFKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTU3NzA5NjcyOjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0MjE1MTA5NDI3NjEwNTozNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOdWhoNEVFRUlxby9iWUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIktFMTVDRElBTXV5WUhOdTZrYUx0V2l6cUxyS0tTZ0tkYkdjd2RWWUE2MFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYXMzWDhJUkZQQWxyeXA2YUdkbUJrMW45eGplUzVQS1J1ajdXTzAvNm5XWng2dnB1b0VBR09EandYTS9jMjRKOG5JZTI5dWJHQUVNV1Frb0ZTeTlvQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYllSNjg5MGJkK0E1UE1nWXRoVGlFam9TdDRvZ0F3c2RWaVQ1dG5jeTZIMEsrSzVCWVRUNmE1RWc1L3pGWW8xVHJmdUh1bHgxanR4MVA0UWtRVXRlQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE1NzcwOTY3MjozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjU5MTIwNzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIMUxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUgxTC5qc29uIjogIntcImtleURhdGFcIjpcIjV3bUdYZWlUTHRieUdhSnNkaFZwbm5qdkQ3OUNoT3VZVnR1eEJBT3FDWWM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA3NTk1Nzk3OSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI1OTEyMDM3OTk0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
