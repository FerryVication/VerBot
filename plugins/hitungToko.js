let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
	let data = await (await fetch('https://visitor.api.akuari.my.id/umum/view?id=5')).json()
	var hari = data.visitor.hari;
	var total = data.visitor.total;
	m.reply(`Item Dibeli di Toko Pada Hari Ini Sebanyak : *${hari}* Kali\n\nTotal Item di Beli Sebanyak : *${total}* Kali`)
}

handler.help = ['cektoko']
handler.command = /^cektoko$/i
handler.owner = true

module.exports = handler