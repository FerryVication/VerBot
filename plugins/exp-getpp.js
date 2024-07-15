let fetch = require("node-fetch")
let handler = async(m, { conn, command, args }) => {
if(!args[0]) throw "Masukkan Nomor Target, Contoh : .gpp 62815xxxxxxx"
  try {
  let who = args[0] +"@s.whatsapp.net"
  let pp = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  conn.sendFile(m.chat, pp, "nih bang.png", 'Selesai....', m, {jpegThumbnail: await(await fetch(pp)).buffer()})
  } catch {
    let sender = m.sender
    let pp = await conn.profilePictureUrl(sender, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
    conn.sendFile(m.chat, pp, 'pp.png', wm, m, {jpegThumbnail: await(await fetch(pp)).buffer()})
  }
}
handler.help = ['gpp <@tag/reply>']
handler.command = /^(gpp)$/i
handler.group = false
handler.limit = true
handler.register = true
handler.tags = ["exp"]
module.exports = handler
