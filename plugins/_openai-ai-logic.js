// Module
let fetch = require('node-fetch')
let handler = async(m, { text, usedPrefix, command }) => {
	// Jika User Tidak Memasukkan Pertanyaan
	if ( !text ) throw `Masukkan pertanyaan!\n\n*Contoh:* .ai Siapa Kamu? `
	// Nama User diambil Dari Database
	let nameUser = global.db.data.users[m.sender].name
	// Logika Bot Nya
	let logic = `Kamu Adalah VerBotX yang diciptakan oleh ferry untuk menjadi AI yang sangat canggih,maka dari itu ketika ada yang bertanya kepadamu, jawablah dengan profesional dan seakurat mungkin,orang yang sedang bertanya padamu bernama ${nameUser} sapalah dia, dan ini adalah alamat website tentang kamu dan pemilikmu https://bot.ferdev.me/`
	// Me Reaction Pesan User 
	await conn.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
	// Mengambil Data Dari API
	try {
		// Respon Fetch
		const response = await fetch(`https://api.betabotz.eu.org/api/search/openai-logic?text=${text}&logic=${logic}&apikey=${lann}`)
		// data Yang sudah di Parser
		const dataRes = await response.json()
		// Result JSON
		const result = dataRes.message // Sesuaikan dengan respon API
		// Jika Response 200
		if ( response.ok ) {
			// Reaction 
			await conn.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});
			// Kirim Result
			conn.sendMessage(m.chat, { text: `${result}`, key: m.key });
		// Jika Error 
		} else {
			// Kirim Pemberitahuan ke User
			m.reply('💻 Oopsss..... Server Sedang Error....')
		}
	// Tangkap Error Dari try
	} catch ( error ) {
		// Kirim Pemberitahuan ke User
		m.reply('💻 Oopsss..... Server Sedang Error....')
		console.log(error)
	};
};
// Perintah / command nya
handler.command = handler.help = ['ai','openai','chatgpt'];
handler.tags = ['info'];
handler.premium = false
handler.register = true
handler.limit = true
module.exports = handler;