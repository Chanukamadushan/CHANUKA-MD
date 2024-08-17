const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')
cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return replay('please give me url or title')
const search = await yts(q)
const data = search.video[0];
const url = data.url

  
let desc = `
🌐 *CHANUKA-MD SONG DOWNLOADER* 🌐

title: ${data.title}
depcription: ${data.depcrition}
time: ${data.timestamp}
ago: ${data.ago}
views: ${data.views}

MADE BY CHANUKA-MD 💙🌋
´

await conn.sendmassage(from,{image: {url: data.thambnail},caption:desc}.{quoted:mek}):

//dawnload audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url


//send audio massage 
await conn.sendmassage(from,audio: {url:downloadUrl}mimetype:"audio/mpeg"},{quoted:mek})
  
{catch(e)}
console.log(e)
replyl('${e}')

{
{
