let handler  = async (m, { conn, command, args, usedPrefix, owner }) => {
	var user = db.data.users[m.sender]
	var thumb = 'https://btch.pages.dev/file/d528de4d1b4de686ad1d0.jpg'
	var ayamb = user.ayamb
	var rendang = user.sapir
	var ayamg = user.ayamg
	var stamina = user.stamina
	var teks = ` *Berikut Adalah isi Dapur* @${m.sender.split`@`[0]}


ayambakar 🍖 = ${ayamb}
ayamgoreng 🍗 = ${ayamg}
rendang🥘 = ${rendang}

Sisa Stamina Kamu : ${stamina}

gunakan perintah : 
.makan <makanan> <jumlah> untuk menambah stamina

contoh : .makan rendang 1`
	conn.sendFile(m.chat, thumb, 'kerja.jpg', `${teks}`, m)
}

handler.help = ['dapur']
handler.tags = ['rpg']
handler.command = /^dapur$/i
handler.group = true
handler.register = true
module.exports = handler