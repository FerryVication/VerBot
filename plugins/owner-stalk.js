let handler = async(m, { args } ) => {
	if ( !args[0] ) throw 'Mana Nomor Yang Mau di Stalk ?'
	let who = args[0]+'@s.whatsapp.net'
	// var untuk nampumg data user nya
	let { name, age, limit }  = global.db.data.users[who]
	// Caption Nya
	let cap = ` Berikut Datanya
	Nama : ${name}
	Umur : ${age}
	Limit : ${limit}`
	// Kirim
	conn.sendMessage(m.chat, { text: cap }, { quoted: m });
}

handler.help = handler.command = ['who']
handler.owner = true

module.exports = handler