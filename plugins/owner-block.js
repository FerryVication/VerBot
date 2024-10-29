const { MessageType } = require('@adiwajshing/baileys');
let handler = async (m, { text, conn, usedPrefix, command }) => {
	let why = `*Contoh:*\n${usedPrefix + command} @${m.sender.split("@")[0]}`
	let textnya = '🛑 *Akses Kamu ke VerBotX Telah di Blokir Oleh Owner Karena Kamu Melanggar Salah Satu Syarat Penggunaan VerBotX!*\n\n💻 *Kamu Bisa Mengajukkan Banding Dengan Mengirim Email ke Alamat* support@ferdev.me'
	let teks = 'Selamat, Kamu Telah Diberikan Akses Untuk Menggunakan VerBotX!'
	let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
	if (!who) conn.reply(m.chat, why, m, { mentions: [m.sender] })
	let res = [];
	console.log(command)
	switch (command) {
		case "blok":
		case "block":
			await conn.relayMessage(who, {
                extendedTextMessage:{
                	text: textnya, 
                	contextInfo: {
                		mentionedJid: [who]
                	}
         	 	}}, {})
			if (who) await conn.updateBlockStatus(who, "block").then(() => {
				res.push(who);
			})
			else conn.reply(m.chat, why, m, { mentions: [m.sender] })
		break
        case "unblok":
        case "unblock":
        	if (who) await conn.updateBlockStatus(who, "unblock").then(() => {
				res.push(who);
			})
			else {
				await conn.relayMessage(who, {
                	extendedTextMessage:{
                	text: teks, 
                	contextInfo: {
                		mentionedJid: [who]
                	}
         	 	}}, {})
			}
        break
	}
	if (res[0]) conn.reply(m.chat, `\n   Sukses ${command} ${res ? `${res.map(v => '@' + v.split("@")[0])}` : ''}`, m, { mentions: res })
}
handler.help = ["block", "unblock"]
handler.tags = ["owner"]
handler.command = /^(block|unblock)$/i
handler.owner = true

module.exports = handler



/*

Jangan dihapus

Buatan FokusDotId (Fokus ID)
https://github.com/fokusdotid

*/