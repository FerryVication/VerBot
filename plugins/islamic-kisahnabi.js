/* Made with ♥️ by FeriPratama */
// node fetch Untuk GET API
let fetch = require('node-fetch');
// Gass
let handler = async (m, { args, usedPrefix } ) => {
	if (!args[0]) throw 'Contoh Penggunaan : .kisahnabi luth'
	let nabi = args[0]
	// Hit ke API
	let json = await (await fetch(`https://api.betabotz.eu.org/api/muslim/kisahnabi?nabi=${nabi}&apikey=${lann}`)).json();
	// Kirim
	await conn.sendMessage(m.chat, { react: { text: '🕑', key: m.key }});
	// Data yang Akan Dikirim 
	let data =`
────···[ *Nabi ${json.result.name}* ]···────\n\n
Nama : ${json.result.name}
Kelahiran : ${json.result.kelahiran}
Wafat Pada Usia : ${json.result.wafat_usia}
Singgah : ${json.result.singgah}\n
Kisah : \n\n
${json.result.kisah}\n`
	// Kirim Result
	m.reply(data)
	await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }});
}

handler.command = /^kisahnabi$/i
handler.help = ['kisahnabi namanabi'];
handler.limit = true;
handler.register = true;

module.exports = handler;