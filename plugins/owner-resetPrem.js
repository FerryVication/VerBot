let handler = async(m, { text }) => {
	if(!text) throw 'Nomornya Mana ?'
	let who = text + '@s.whatsapp.net'
	global.db.data.users[who].premiumDate = 0
	global.db.data.users[who].premium = false
	m.reply('success');
}

handler.owner = true
handler.command = ['resprem'];
module.exports = handler;