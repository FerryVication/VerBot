var fetch = require('node-fetch');
let handler = async (m, { conn, text }) => {
	if(!text) throw 'Masukkan Textnya, Contoh : .ngomong tytyd'
	suarane = await fetch(`https://api.betabotz.eu.org/api/sound/texttosound?text1=${text}&lang=id-ID&apikey=${lann}`)
	var json = await suarane.json()
	try {
		await conn.sendMessage(m.chat, { audio : { url : json.result }, mimetype : 'audio/mpeg', ptt : true }, { quoted : m })
	} catch (err ) {
		m.reply(`${eror}`)
}}

handler.command = handler.help = ['suara','vn','ngomong'];
handler.premium = false
handler.register = true
handler.limit = true
module.exports = handler;