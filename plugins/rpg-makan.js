let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	var who = m.sender
	var user = global.db.data.users[m.sender]
	var type = (args[0] || '').toLowerCase()
	var count = args[1]
	const contoh = `
*Berikut Adalah isi Dapur* @${m.sender.split`@`[0]}


ayambakar 🍖 = +10 stamina
ayamgoreng 🍗 = +10 stamina
rendang sapi 🥘 = +15 stamina


gunakan perintah : 
.makan <makanan> <jumlah> untuk menambah stamina

contoh : .makan rendang 1`.trim()
	switch (type) {
    		case 'ayambakar':
				if (user.stamina < 100) {
					if (user.ayamb >= 1 * count) {
						user.ayamb -= 1 * count
						user.stamina += 10 * count
						conn.reply(m.chat, `Nyam nyam Stamina Bertambah ${count * 10}`, m)
					} else conn.reply(m.chat, ` Ayam bakar kamu kurang`, m)
				} else { conn.reply(m.chat, `Stamina kamu sudah penuh`, m) }
			break

    		case 'ayamgoreng':
				if (user.stamina < 100) {
					if (user.ayamg >= 1 * count) {
						user.ayamg -= 1 * count
						user.stamina += 10 * count
						conn.reply(m.chat, `Nyam nyam Stamina Bertambah ${count * 10}`, m)
					} else conn.reply(m.chat, ` Ayam goreng kamu kurang`, m)
				} else conn.reply(m.chat, `Stamina kamu sudah penuh`, m)
			break
			
			case 'rendang':
				if (user.stamina < 100) {
					if (user.sapir >= 1 * count) {
						user.sapir -= 1 * count
						user.stamina += 15 * count
						conn.reply(m.chat, `Nyam nyam Stamina Bertambah ${count * 15}`, m)
					} else conn.reply(m.chat, ` Ayam bakar kamu kurang`, m)
				} else conn.reply(m.chat, `Stamina kamu sudah penuh`, m)
			break

    		default:
        		return conn.reply(m.chat, contoh, m)
		}
}

handler.help = ['makan item jumlah']
handler.tags = ['rpg']
handler.command = /^makan$/i
handler.limit = false
handler.group = true
handler.register = true

module.exports = handler