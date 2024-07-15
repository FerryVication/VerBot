let handler  = async (m, { conn, command, args, usedPrefix, owner }) => {
	var type = (args[0] || '').toLowerCase()
	var msk = (args[0] || '').toLowerCase()
	var user = db.data.users[m.sender]
	var author = global.author
	var count = args[1]
	var cok = `* M E N U   M A S A K A N *
▧ ayambakar 🍖
〉 Need 5 ayam 🐓
▧ ayamgoreng 🍗
 〉 Need 5 ayam 🐓
▧ rendang 🥘
 〉 Need 3 sapi 🐮
 
 Contoh Penggunaan : .cook ayambakar 2
`

	try {
		if (/masak|cook/i.test(command)) {
			switch (type) {
				case 'ayambakar':
					if (user.ayam >= 5 * count) {
						user.ayam -= count * 5
						user.ayamb += count * 1
						conn.reply(m.chat, `Sukses memasak ${count} ayam bakar🍖 , gunakan perintah .dapur untuk mengecek masakan!`, m)
					} else conn.reply(m.chat, `Anda tidak memiliki cukup bahan untuk memasak ${count} ayam bakar\nAnda butuh ${count * 5} ayam untuk memasak ${count} ayambakar`, m)
					break
				//case 'gulaiayam':
					//if (user.ayam >= 1 * count) {
						//user.ayam >= count * 1
						//user.ayam -= count * 2
						//user.limit -= count * 1
						//user.ayamg += count * 1
						//conn.reply(m.chat, `Sukses memasak ${ count } Gulai Ayam🍜`, m)
					//} else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak gulai ayam\nAnda butuh 2 ayam dan 1 limit untuk memasak`, m)
					//break
				case 'rendang':
					if (user.sapi >= 3 * count) {
						user.sapi >= count * 1
						user.sapi -= count * 3
						user.sapir += count * 1
						conn.reply(m.chat, `Sukses memasak ${ count } Rendang 🍜, gunakan perintah .dapur untuk mengecek masakan!`, m)
					} else conn.reply(m.chat, `Anda tidak memiliki cukup bahan untuk memasak rendang\nAnda butuh ${count * 3} sapi untuk memasak ${count} rendang sapi`, m)
					break
				case 'ayamgoreng':
					if (user.ayam >= 5 * count) {
						user.ayam >= count * 1
						user.ayam -= count * 5
						user.ayamg += count * 1
						conn.reply(m.chat, `Sukses memasak ${ count } ayam goreng🍗, gunakan perintah .dapur untuk mengecek masakan!`, m)
					} else conn.reply(m.chat, `Anda tidak memiliki cukup bahan untuk memasak ayam goreng\nAnda butuh ${count * 5} ayam untuk memasak ${count} ayam goreng`, m)
					break
				//case 'oporayam':
					//if (user.lele >= 1 * count) {
						//user.lele >= count * 1
						//user.lele -= count * 2
						//user.limit -= count * 1
						//user.oporayam += count * 1
						//conn.reply(m.chat, `Sukses memasak ${ count } opor ayam`, m)
					//} else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak opor ayam\nAnda butuh 2 ayam dan 1 limit untuk memasak`, m)
					//break
				//case 'steak':
					//if (user.sapi >= 1 * count) {
						//user.sapi >= count * 1
						//user.sapi -= count * 2
						//user.limit -= count * 1
						//user.steak += count * 1
						//conn.reply(m.chat, `Sukses memasak ${ count } Steak`, m)
					//} else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak steak\nAnda butuh 2 sapi dan 1 limit untuk memasak`, m)
					//break
				/*case 'babipanggang':
					if (user.babi >= 1 * count) {
						user.babi >= count * 1
						user.babi -= count * 2
						user.limit -= count * 1
						user.babipanggang += count * 1
						conn.reply(m.chat, `Sukses memasak ${ count } babi panggang`, m)
					} else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak babi panggang\nAnda butuh 2 babi dan 1 limit untuk memasak`, m)
					break
				case 'jagungbakar':
					if (user.jagung >= 1 * count) {
						user.jagung >= count * 1
						user.jagung -= count * 2
						user.limit -= count * 1
						user.jagungbakar += count * 1
						conn.reply(m.chat, `Sukses memasak ${count} jagung bakar🌽`, m)
					} else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak jagung bakar\nAnda butuh 2 jagung dan 1 limit untuk memasak`, m)
					break
				case 'popcorn':
					if (user.jagung >= 1 * count) {
						user.jagung >= count * 1
						user.jagung -= count * 2
						user.limit -= count * 1
						user.popcorn += count * 1
						conn.reply(m.chat, `Sukses memasak ${count} jagung bakar🍿`, m)
					} else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak jagung bakar\nAnda butuh 2 jagung dan 1 limit untuk memasak`, m)
					break
				case 'kentanggoreng':
					if (user.kentang >= 1 * count) {
						user.kentang >= count * 1
						user.kentang -= count * 2
						user.limit -= count * 1
						user.kentanggoreng += count * 1
						conn.reply(m.chat, `Sukses memasak ${count} kentang goreng🍟`, m)
					} else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak kentang goreng\nAnda butuh 2 kentang dan 1 limit untuk memasak`, m)
					break
				case 'suplabu':
					if (user.labu >= 1 * count) {
						user.labu >= count * 1
						user.labu -= count * 2
						user.limit -= count * 1
						user.suplabu += count * 1
						conn.reply(m.chat, `Sukses memasak ${count} sup labu🥣`, m)
					} else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak sup labu\nAnda butuh 2 labu dan 1 limit untuk memasak`, m)
					break
				case 'tumiskangkung':
					if (user.kangkung >= 1 * count) {
						user.kangkung >= count * 1
						user.kangkung -= count * 2
						user.limit -= count * 1
						user.tumiskangkung += count * 1
						conn.reply(m.chat, `Sukses memasak ${count} tumis kangkung🥗`, m)
					} else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak tumis kangkung\nAnda butuh 2 kangkung dan 1 limit untuk memasak`, m)
					break
				case 'gadogado':
					if (user.blabu >= 1 * count) {
						user.blabu >= count * 1
						user.blabu -= count * 2
						user.limit -= count * 1
						user.gadogado += count * 1
						conn.reply(m.chat, `Sukses memasak ${count} gado gado🥗`, m)
					} else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak gado gado\nAnda butuh 2 blabu dan 1 limit untuk memasak`, m)
					break*/
				default:
					conn.sendMessage(m.chat, {text: cok })
			}
		}
	} catch (e) {
		conn.reply(m.chat, `Sepertinya ada yg eror,coba laporin ke owner deh`, m)
		console.log(e)
		if (owner) {
			for (var jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
				conn.sendMessage(jid, 'shop.js error\nNo: ' + m.sender.split`@` [0] + '\nCommand: ' + m.text + '\n\n*' + e + '*', MessageType.text)
			}
		}
	}
}

handler.help = ['masak <masakan> <args>', 'cook <masakan> <args>']
handler.tags = ['rpg']
handler.register = true
handler.group = true
handler.command = /^(masak|cook)$/i
var wm = global.botwm
module.exports = handler