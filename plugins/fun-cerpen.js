/* Made with ♥️ by Feri Pratama */
// node-fetch untuk fetch API nya
let fetch = require('node-fetch');
// gass.....
let handler = async(m, { args, command, usedPrefix }) => {
	// untuk mengambil argumen dari command yang diberikan user
	let type = (args[0] || '').toLowerCase();
	// Contoh command
	let exa = `
 ┌────···[ *ʀᴀɴᴅᴏᴍ ᴄᴇʀᴘᴇɴ* ]···────✧
 │
 │	ʀᴇᴍᴀᴊᴀ
 │	ᴍɪꜱᴛᴇʀɪ
 │	ᴀɴᴀᴋ
 │	ɢᴀʟᴀᴜ
 │	ʀᴏᴍᴀɴᴛɪꜱ
 │	ʙᴜᴅᴀʏᴀ
 │	ᴋᴇʜɪᴅᴜᴘᴀɴ
 │	ɢᴏᴋɪʟ
 │	ɪɴꜱᴘɪʀᴀᴛɪꜰ
 │	ᴍᴇɴɢʜᴀʀᴜᴋᴀɴ
 │	ᴘᴇʀꜱᴀʜᴀʙᴀᴛᴀɴ
 │	ꜱᴀꜱᴛʀᴀ
 │
 ├────···[ *ᴄᴏɴᴛᴏʜ ᴘᴇɴɢɢᴜɴᴀᴀɴ* ]···────
 │
 │	${usedPrefix}cerpen misteri
 │
 ├──────────────────────────`.trim()
 	// Case untuk menangkap argumen ke 0 yaitu jenis cerpen nya
 	switch( type ) {
 	
 		// Untuk Cerpen Remaja
 		case 'remaja':
 			// React Chat nya
 			await conn.sendMessage(m.chat, { react: { text: '🕑', key: m.key }});
 			// Get ke API
 			let res = await (await fetch(`https://api.betabotz.eu.org/api/story/cerpen?type=remaja&apikey=${lann}`)).json();
 			// Kirim Result nya
 			m.reply(`────···[ *ᴄᴇʀᴘᴇɴ ʀᴇᴍᴀᴊᴀ* ]···────\n\nJudul: *${res.result.title}*\nAuthor: *${res.result.author}*\nKategori: *${res.result.kategori}*\nLolos: *${res.result.lolos}*\n\n*Cerita:* \n\n${res.result.cerita}\n`)
 			// React Selesai
 			await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }});
 		break
 		
 		// Untuk Cerpen Misteri
 		case 'misteri':
 			// React Chat nya
 			await conn.sendMessage(m.chat, { react: { text: '🕑', key: m.key }});
 			// GET ke API
 			let res2 = await (await fetch(`https://api.betabotz.eu.org/api/story/cerpen?type=misteri&apikey=${lann}`)).json();
 			// Kirim Result nya
 			m.reply(`────···[ *ᴄᴇʀᴘᴇɴ ᴍɪꜱᴛᴇʀɪ* ]···────\n\nJudul: *${res2.result.title}*\nAuthor: *${res2.result.author}*\nKategori: *${res2.result.kategori}*\nLolos: *${res2.result.lolos}*\n\n*Cerita:* \n\n${res2.result.cerita}\n`)
 			// React Selesai
 			await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }});
 		break
 		
 		// Untuk Cerpen Anak
 		case 'anak':
 			// React Chat nya
 			await conn.sendMessage(m.chat, { react: { text: '🕑', key: m.key }});
 			// GET ke API
 			let res3 = await (await fetch(`https://api.betabotz.eu.org/api/story/cerpen?type=anak&apikey=${lann}`)).json();
 			// Kirim Result nya
 			m.reply(`────···[ *ᴄᴇʀᴘᴇɴ ᴀɴᴀᴋ* ]···────\n\nJudul: *${res3.result.title}*\nAuthor: *${res3.result.author}*\nKategori: *${res3.result.kategori}*\nLolos: *${res3.result.lolos}*\n\n*Cerita:* \n\n${res3.result.cerita}\n`)
 			// React Selesai
 			await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }});
 		break
 
 		// Untuk Cerpen Galau
 		case 'galau':
 			// React Chat nya
 			await conn.sendMessage(m.chat, { react: { text: '🕑', key: m.key }});
 			// GET ke API
 			let res4 = await (await fetch(`https://api.betabotz.eu.org/api/story/cerpen?type=galau&apikey=${lann}`)).json();
 			// Kirim Result nya
 			m.reply(`────···[ *ᴄᴇʀᴘᴇɴ ɢᴀʟᴀᴜ* ]···────\n\nJudul: *${res4.result.title}*\nAuthor: *${res4.result.author}*\nKategori: *${res4.result.kategori}*\nLolos: *${res4.result.lolos}*\n\n*Cerita:* \n\n${res4.result.cerita}\n`)
 			// React Selesai
 			await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }});
 		break
 
 		// Untuk Cerpen Romantis 
 		case 'romantis':
 			// React Chat nya
 			await conn.sendMessage(m.chat, { react: { text: '🕑', key: m.key }});
 			// GET ke API
 			let res5 = await (await fetch(`https://api.betabotz.eu.org/api/story/cerpen?type=romantis&apikey=${lann}`)).json();
 			// Kirim Result nya
 			m.reply(`────···[ *ᴄᴇʀᴘᴇɴ ʀᴏᴍᴀɴᴛɪꜱ* ]···────\n\nJudul: *${res5.result.title}*\nAuthor: *${res5.result.author}*\nKategori: *${res5.result.kategori}*\nLolos: *${res5.result.lolos}*\n\n*Cerita:* \n\n${res5.result.cerita}\n`)
 			// React Selesai
 			await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }});
 		break
 
 		// Untuk Cerpen Budaya
 		case 'budaya':
 			// React Chat nya 
 			await conn.sendMessage(m.chat, { react: { text: '🕑', key: m.key }});
 			// GET ke API
 			let res6 = await (await fetch(`https://api.betabotz.eu.org/api/story/cerpen?type=budaya&apikey=${lann}`)).json();
 			// Kirim Result nya
 			m.reply(`────···[ *ᴄᴇʀᴘᴇɴ ʙᴜᴅᴀʏᴀ* ]···────\n\nJudul: *${res6.result.title}*\nAuthor: *${res6.result.author}*\nKategori: *${res6.result.kategori}*\nLolos: *${res6.result.lolos}*\n\n*Cerita:* \n\n${res6.result.cerita}\n`)
 			// React Selesai
 			await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }});
 		break
 
 		// Untuk Cerpen Kehidupan 
 		case 'kehidupan':
 			// React Chat nya
 			await conn.sendMessage(m.chat, { react: { text: '🕑', key: m.key }});
 			// GET ke API
 			let res7 = await (await fetch(`https://api.betabotz.eu.org/api/story/cerpen?type=kehidupan&apikey=${lann}`)).json();
 			// Kirim Result nya
 			m.reply(`────···[ *ᴄᴇʀᴘᴇɴ ᴋᴇʜɪᴅᴜᴘᴀɴ* ]···────\n\nJudul: *${res7.result.title}*\nAuthor: *${res7.result.author}*\nKategori: *${res7.result.kategori}*\nLolos: *${res7.result.lolos}*\n\n*Cerita:* \n\n${res7.result.cerita}\n`)
 			// React Selesai
 			await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }});
 		break
 
 		// Untuk Cerpen Gokil
 		case 'gokil':
 			// React Chat nya
 			await conn.sendMessage(m.chat, { react: { text: '🕑', key: m.key }});
 			// GET ke API
 			let res8 = await (await fetch(`https://api.betabotz.eu.org/api/story/cerpen?type=gokil&apikey=${lann}`)).json();
 			// Kirim Result nya
 			m.reply(`────···[ *ᴄᴇʀᴘᴇɴ ɢᴏᴋɪʟ* ]···────\n\nJudul: *${res8.result.title}*\nAuthor: *${res8.result.author}*\nKategori: *${res8.result.kategori}*\nLolos: *${res8.result.lolos}*\n\n*Cerita:* \n\n${res8.result.cerita}\n`)
 			// React Selesai
 			await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }});
 		break
 
 		// Untuk Cerpen Inspiratif 
 		case 'inspiratif':
 			// React Chat nya
 			await conn.sendMessage(m.chat, { react: { text: '🕑', key: m.key }});
 			// GET ke API
 			let res9 = await (await fetch(`https://api.betabotz.eu.org/api/story/cerpen?type=inspiratif&apikey=${lann}`)).json();
 			// Kirim Result nya
 			m.reply(`────···[ *ᴄᴇʀᴘᴇɴ ɪɴꜱᴘɪʀᴀᴛɪꜰ* ]···────\n\nJudul: *${res9.result.title}*\nAuthor: *${res9.result.author}*\nKategori: *${res9.result.kategori}*\nLolos: *${res9.result.lolos}*\n\n*Cerita:* \n\n${res9.result.cerita}\n`)
 			// React Selesai 
 			await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }});
 		break
 
 		// Untun Cerpen Mengharukan
 		case 'mengharukan':
 			// React Chat nya 
 			await conn.sendMessage(m.chat, { react: { text: '🕑', key: m.key }});
 			// GET ke API
 			let res10 = await (await fetch(`https://api.betabotz.eu.org/api/story/cerpen?type=mengharukan&apikey=${lann}`)).json();
 			// Kirim Result nya 
 			m.reply(`────···[ *ᴄᴇʀᴘᴇɴ ᴍᴇɴɢʜᴀʀᴜᴋᴀɴ* ]···────\n\nJudul: *${res10.result.title}*\nAuthor: *${res10.result.author}*\nKategori: *${res10.result.kategori}*\nLolos: *${res10.result.lolos}*\n\n*Cerita:* \n\n${res10.result.cerita}\n`)
 			// React Selesai
 			await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }});
 		break
 
 		// Untuk Cerpen Persahabatan 
 		case 'persahabatan':
 			// React Chat nya
 			await conn.sendMessage(m.chat, { react: { text: '🕑', key: m.key }});
 			// GET ke API
 			let res11 = await (await fetch(`https://api.betabotz.eu.org/api/story/cerpen?type=persahabatan&apikey=${lann}`)).json();
 			// Kirim Result nya
 			m.reply(`────···[ *ᴄᴇʀᴘᴇɴ ᴘᴇʀꜱᴀʜᴀʙᴀᴛᴀɴ* ]···────\n\nJudul: *${res11.result.title}*\nAuthor: *${res11.result.author}*\nKategori: *${res11.result.kategori}*\nLolos: *${res11.result.lolos}*\n\n*Cerita:* \n\n${res11.result.cerita}\n`)
 			// React Selesai 
 			await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }});
 		break
 
 		// Untuk Cerpen Sastra
 		case 'sastra':
 			// React Chat nya
 			await conn.sendMessage(m.chat, { react: { text: '🕑', key: m.key }});
 			// GET ke API
 			let res12 = await (await fetch(`https://api.betabotz.eu.org/api/story/cerpen?type=sastra&apikey=${lann}`)).json();
 			// Kirim Result nya
 			m.reply(`────···[ *ᴄᴇʀᴘᴇɴ ꜱᴀꜱᴛʀᴀ* ]···────\n\nJudul: *${res12.result.title}*\nAuthor: *${res12.result.author}*\nKategori: *${res12.result.kategori}*\nLolos: *${res12.result.lolos}*\n\n*Cerita:* \n\n${res12.result.cerita}\n`)
 			// React Selesai
 			await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }});
 		break
 
 		// Handling Error
 		try {
 		} catch (error) {
 				m.reply('Ooopsss.... Server Sedang Down!')
 			}
 		// Finally
 		default: return conn.reply(m.chat, exa, m)
 	}
}

handler.help = ['cerpen [ jenisnya ]']
handler.tags = ['fun']
handler.command = /^cerpen$/i
handler.limit = true
handler.group = false
handler.register = true

module.exports = handler