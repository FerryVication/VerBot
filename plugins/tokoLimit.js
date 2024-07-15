hargaLimit = 50000
batasGratis = 20
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	var who = m.sender
	let user = global.db.data.users[m.sender]
	let money = user.money
	limitUser = user.limit
	let type = args[0]
	var count = args[0]
	if (isNaN(args[0])) throw 'Input Angka Bukan Yang Lain!'
	if (!args[0]) throw `
Penggunaan ${usedPrefix}buylimit <jumlah>
Contoh penggunaan: *${usedPrefix}buylimit 5*

============================
*Harga per 1 Limit*

1 Limit = ${hargaLimit} Money

=============================`
	let grupOffc =    "120363239535582057@g.us"
	if (user.limit > batasGratis) throw `*Oopss Jumlah Limit Kamu Sudah Mencapai Batas Yang Ditentukan Sebagai User Gratisan* \n *Silahkan Upgrade ke Premium Agar Bisa Memiliki Limit Lebih Banyak* `
	let batasLimit = limitUser + parseInt(count)
	if(batasLimit > batasGratis) throw `*Oopss Jumlah Limit Kamu Sudah Mencapai Batas Yang Ditentukan Sebagai User Gratisan* \n *Silahkan Upgrade ke Premium Agar Bisa Memiliki Limit Lebih Banyak* `
	if (m.chat == grupOffc) {
		let diTotal = count * hargaLimit
		if ( diTotal >= money ) {
			m.reply(`Money Kamu Tidak Cukup Untuk Membeli ${count} Limit!`)
		} else {
			let hasil = parseInt(count.split(' '))
			global.db.data.users[m.sender].limit += hasil
			global.db.data.users[m.sender].money -= hargaLimit * count
			m.reply(`Sukses Membeli ${count} Limit dengan Harga ${diTotal}`);
		}
	} else {
		conn.sendMessage(m.chat, {text: '*Oopss Fitur ini Hanya Bisa di Gunakan di Dalam Group Official VerBotX, Silahkan Gabung dan Gunakan Fiturnya!*', contextInfo: {
				externalAdReply: {
                    showAdAttribution: false,
                    title: 'Join Now',
					body: '',
					mediaTpe: 1,
					thumbnailUrl: "https://cdn.btch.bz/file/7f28b3b69000ca3a83aa5.jpg",
					sourceUrl: 'https://chat.whatsapp.com/Ft15fDnJ3swBQqieMXs3af',
					renderLargerThumbnail: true		
				}
			}
			}, {quoted: m})
		}
}

handler.help = ['buylimit <jumlah>']
handler.command = /^buylimit$/i
handler.limit = false
handler.register = true
handler.group = true

module.exports = handler