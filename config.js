const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = true;
global.autoReadGc = true;
global.autoReadAll = true;
global.antitags = true;


//auto functioner
global.autoTyping = true;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = true;                 //make true to view statuses 
global.ANTI_BOT = true;
global.PM_BLOCKER = true;
global.CHATBOT = true;

global.SESSION_ID = process.env.SESSION_ID || "taira_tech-a0t2DJKT#rOKoCPVmAmRZCcWPEwKQx4tWPA-OsZocbCD3_DnLpGc"
global.Owner = ["2349070810971"]; //like 2347080968564 
global.OwnerName =  "𝕯𝖆𝖗𝖐 𝕬𝖓𝖌𝖊𝖑  모";
global.BotName = "♱𝕯𝖆𝖗𝖐 𝕬𝖓𝖌𝖊𝖑  모♱♡⃤";
global.packname = "♱𝕯𝖆𝖗𝖐 𝕬𝖓𝖌𝖊𝖑  모♱♡⃤";                             //Do not change.
global.author = "𝕯𝖆𝖗𝖐 𝕬𝖓𝖌𝖊𝖑  모";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://whatsapp.com/channel/0029VakU3kZATRSk8wz0dN0O"; 
global.SupportGroupLink = "https://whatsapp.com/channel/0029VakU3kZATRSk8wz0dN0O"; //Do not change!
global.menutype = "v3"

global.prefa = ['','!','.',','] 

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic7.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");
global.OwnerNumber = ["2349070810971"] //Ignore,Unused

//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command!',
    grouponly: 'This command is only made for *Groups*',
    privateonly: 'This command is only made for *Private Chat*',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
