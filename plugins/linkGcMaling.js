let handler = async (m, { conn, args }) => {
	if(!args[0]) { 
		throw 'Masukkan ID Grup Nya Gaes!'
	}
	var link = args[0]
  try {
    conn.reply(m.chat, `*Link Group:* ${await conn.getName(link)}\n\nhttps://chat.whatsapp.com/` + await conn.groupInviteCode(link) + `\n\n${conn.user.name}`, m)
  } catch {
    conn.reply(m.chat, `Jadikan @${conn.user.jid.split('@')[0]} sebagai admin untuk menggunakan perintah ini!`, m, { mentions: [conn.user.jid] })
  }
}

handler.command = /^getid$/i

handler.group = false
handler.owner = true

module.exports = handler