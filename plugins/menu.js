const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "bot commands menu.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: '',
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}

let madeMenu = `👋💙*Hello ${pushnamezzQ1habA}*
> *DOWNLOAD COMMANDS*↕

${menu.download}

> *MAIN COMMANDS🌟*

${menu.main}

> *GROUP COMMANDS🗃️*

${menu.group}

> *OWNER COMMANDS🛜* 

${menu.owner}

> *CONVERT COMMANDS♻️*

${menu.convert}

> *SEARCH COMMANDS🌐*

${menu.search}

POWER BY CHANUKA-MD 💚
`
await conn.sendMassage(from,{image:{url:"https://github.com/user-attachments/assets/32adb81b-67a7-40f6-851b-4e681f57ddac"},caption:madeMenu},{quoted:mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
