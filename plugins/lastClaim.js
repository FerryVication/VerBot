let handler = async (m, { conn, text, usedPrefix, command }) => {
	var who = m.sender
	let { name, pasangan, limit, exp, money, bank, lastclaim, premiumDate, premium, registered, regTime, age, level, role } = global.db.data.users[who]
	m.reply(`
🎀*Nama* : ${registered ? name : ''}
⏳*Terakhir Claimlimit*${lastclaim > 0 ? ' *Gratis Pada* : ' + new Date(lastclaim) : ''}`)
}

handler.help = ['lastclaim']
handler.command = /^lastclaim$/i
handler.limit = false
handler.register = true

module.exports = handler