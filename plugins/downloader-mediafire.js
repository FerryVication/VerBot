let fetch = require('node-fetch');
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.mediafire.com/file/941xczxhn27qbby/GBWA_V12.25FF-By.SamMods-.apk/file`
    m.reply(wait);
    let resi = await fetch(`https://api.betabotz.eu.org/api/download/mediafire?url=${args[0]}&apikey=${lann}`)
    let res = await resi.json()
    let caption = `
*💌 Name:* ${res.result.filename}
*📊 Size:* ${res.result.filesizeH}
*🗂️ Extension:* ${res.result.ext}
*📨 Uploaded:* ${res.result.upload_date}
`.trim()
    m.reply(caption)
     conn.sendMessage(m.chat, { document: { url: res.result.url }, mimetype: res.result.ext, fileName: res.result.filename }, { quoted: m })
}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mf)$/i
handler.register = true
handler.limit = true

module.exports = handler
