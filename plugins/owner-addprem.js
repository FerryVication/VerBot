let handler = async (m, { conn, text }) => {
	const { MessageType } = require('@adiwajshing/baileys');
    let who = text.split(' ')[0]
    if (global.prems.includes(who.split`@`[0])) throw 'dia udah premium!'
    global.prems.push(`${who.split`@`[0]}`)
    conn.reply(m.chat, `@${who.split`@`[0]} sekarang premium!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })
    let usernya = who + '@s.whatsapp.net'
    let mentionedJid = text.split(' ')[0]+'@s.whatsapp.net'
    // Data User
    let nameNya = global.db.data.users[usernya].name
    // Hari Sekarang 
    let today = new Date()
    // Format Tanggal Dalam Bahasa Indonesia 
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    // Tanggal Sekarang Dalam Format Indonesia
    let _today = today.toLocaleDateString('id-ID', options)
    // Menambahkan 14 Hari Masa Expired
    let futureDate = new Date()
    futureDate.setDate(today.getDate() + 14)
    // Expired User Premium 
    let expired = futureDate.toLocaleDateString('id-ID', options)
    // Teks Bukti Pembayaran Limit Yang Akan di Kirim ke User Premium
    let teksnya = `
    ┌────···[ *ᴠᴇʀʙᴏᴛx ꜱᴛᴏʀᴇ* ]···──────
    │
    │	ʜᴀʟʟᴏ ᴋᴀᴋ, ${nameNya} ☺️
    │
    ├────···[ *ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ* ]···───────
    │
    │  • ᴛᴇʀɪᴍᴀ ᴋᴀꜱɪʜ ᴛᴇʟᴀʜ ᴍᴇʟᴀᴋᴜᴋᴀɴ
    │ 	ᴘᴇᴍʙᴇʟɪᴀɴ ᴀᴋꜱᴇꜱ ᴘʀᴇᴍɪᴜᴍ
    │  • ᴘᴀᴅᴀ :
    │  	${_today}
    │  • ʙᴇʀᴀᴋʜɪʀ ᴘᴀᴅᴀ  :
    │ 	${expired}
    │
    ├────·────────────────────`
    await conn.relayMessage(usernya, {
                extendedTextMessage:{
                text: teksnya, 
                contextInfo: {
                mentionedJid: [mentionedJid]
                }
          }}, {})
}
handler.help = ['addprem [@user]']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)prem$/i
handler.limit = true
handler.rowner = true
handler.limit = 10000
handler.premium = true

module.exports = handler