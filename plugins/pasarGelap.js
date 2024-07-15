const harimau = 100
const banteng = 100
const gajah = 150
const babihutan = 100
const kambing = 100
const buaya = 100
const panda = 200
const ayam = 50
const monyet = 200
const babi = 60
const kerbau = 100
const sapi = 150
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	var who = m.sender
	let user = global.db.data.users[m.sender]
	let type = (args[0] || '').toLowerCase()
	let count = args[1]
	const contoh = `
Penggunaan ${usedPrefix}sell <item> <jumlah>
Contoh penggunaan: *${usedPrefix}sell banteng 1*

============================
*Hewan   |  Harga Jual*
harimau :     ${harimau}
banteng       ${banteng}
gajah   		   ${gajah}
babihutan:    ${babihutan}
kambing	   ${kambing}
buaya	      ${buaya}
panda	      ${panda}
ayam		   ${ayam}
monyet		${monyet}
babi	    	${babi}
kerbau    	${kerbau}
sapi	    	${sapi}
============================`.trim()
	switch (type) {
    		case "harimau":
        		if (global.db.data.users[m.sender].harimau >= count * 1) {
        			global.db.data.users[m.sender].money += harimau * count
        			global.db.data.users[m.sender].harimau -= count * 1
        			conn.reply(m.chat, `Succes menjual ${count} Harimau dengan harga ${harimau * count} money`.trim(), m)
				} else {
            		conn.reply(m.chat, `Harimau kamu tidak cukup!`.trim(), m)
        		}
        		break;

    		case "banteng":
    			if (global.db.data.users[m.sender].banteng >= count * 1) {
        			global.db.data.users[m.sender].money += banteng * count
        			global.db.data.users[m.sender].banteng -= count * 1
        			conn.reply(m.chat, `Succes menjual ${count} Banteng dengan harga ${banteng * count} money`.trim(), m)
				} else {
            		conn.reply(m.chat, `Banteng kamu tidak cukup!`.trim(), m)
        		}
        		break;
        
        	case "gajah":
    			if (global.db.data.users[m.sender].gajah >= count * 1) {
        			global.db.data.users[m.sender].money += gajah * count
        			global.db.data.users[m.sender].gajah -= count * 1
        			conn.reply(m.chat, `Succes menjual ${count} Gajah dengan harga ${gajah * count} money`.trim(), m)
				} else {
            		conn.reply(m.chat, `Gajah kamu tidak cukup!`.trim(), m)
        		}
        		break;
        
        	case "babihutan":
    			if (global.db.data.users[m.sender].babihutan >= count * 1) {
        			global.db.data.users[m.sender].money += babihutan * count
        			global.db.data.users[m.sender].babihutan -= count * 1
        			conn.reply(m.chat, `Succes menjual ${count} Babi Hutan dengan harga ${babihutan * count} money`.trim(), m)
				} else {
            		conn.reply(m.chat, `Babi Hutan kamu tidak cukup!`.trim(), m)
        		}
        		break;
        
        	case "kambing":
    			if (global.db.data.users[m.sender].kambing >= count * 1) {
        			global.db.data.users[m.sender].money += kambing * count
        			global.db.data.users[m.sender].kambing -= count * 1
        			conn.reply(m.chat, `Succes menjual ${count} Kambing dengan harga ${kambing * count} money`.trim(), m)
				} else {
            		conn.reply(m.chat, `Kambing kamu tidak cukup!`.trim(), m)
        		}
        		break;
        
        	case "buaya":
    			if (global.db.data.users[m.sender].buaya >= count * 1) {
        			global.db.data.users[m.sender].money += buaya * count
        			global.db.data.users[m.sender].buaya -= count * 1
        			conn.reply(m.chat, `Succes menjual ${count} Buaya dengan harga ${buaya * count} money`.trim(), m)
				} else {
            		conn.reply(m.chat, `Buaya kamu tidak cukup!`.trim(), m)
        		}
        		break;
        
        	case "panda":
    			if (global.db.data.users[m.sender].panda >= count * 1) {
        			global.db.data.users[m.sender].money += panda * count
        			global.db.data.users[m.sender].panda -= count * 1
        			conn.reply(m.chat, `Succes menjual ${count} Panda dengan harga ${panda * count} money`.trim(), m)
				} else {
            		conn.reply(m.chat, `Panda kamu tidak cukup!`.trim(), m)
        		}
        		break;
        
        	case "ayam":
    			if (global.db.data.users[m.sender].ayam >= count * 1) {
        			global.db.data.users[m.sender].money += ayam * count
        			global.db.data.users[m.sender].ayam -= count * 1
        			conn.reply(m.chat, `Succes menjual ${count} Ayam dengan harga ${ayam * count} money`.trim(), m)
				} else {
            		conn.reply(m.chat, `Ayam kamu tidak cukup!`.trim(), m)
        		}
        		break;
        
        	case "monyet":
    			if (global.db.data.users[m.sender].monyet >= count * 1) {
        			global.db.data.users[m.sender].money += monyet * count
        			global.db.data.users[m.sender].monyet -= count * 1
        			conn.reply(m.chat, `Succes menjual ${count} Monyet dengan harga ${monyet * count} money`.trim(), m)
				} else {
            		conn.reply(m.chat, `Monyet kamu tidak cukup!`.trim(), m)
        		}
        		break;
        
        	case "babi":
    			if (global.db.data.users[m.sender].babi >= count * 1) {
        			global.db.data.users[m.sender].money += babi * count
        			global.db.data.users[m.sender].babi -= count * 1
        			conn.reply(m.chat, `Succes menjual ${count} Babi dengan harga ${babi * count} money`.trim(), m)
				} else {
            		conn.reply(m.chat, `Babi kamu tidak cukup!`.trim(), m)
        		}
        		break;
        
        	case "kerbau":
    			if (global.db.data.users[m.sender].kerbau >= count * 1) {
        			global.db.data.users[m.sender].money += kerbau * count
        			global.db.data.users[m.sender].kerbau -= count * 1
        			conn.reply(m.chat, `Succes menjual ${count} Kerbau dengan harga ${kerbau * count} money`.trim(), m)
				} else {
            		conn.reply(m.chat, `Kerbau kamu tidak cukup!`.trim(), m)
        		}
        		break;
        
        	case "sapi":
    			if (global.db.data.users[m.sender].sapi >= count * 1) {
        			global.db.data.users[m.sender].money += sapi * count
        			global.db.data.users[m.sender].sapi -= count * 1
        			conn.reply(m.chat, `Succes menjual ${count} Sapi dengan harga ${sapi * count} money`.trim(), m)
				} else {
            		conn.reply(m.chat, `Sapi kamu tidak cukup!`.trim(), m)
        		}
        		break;

    		default:
        		return conn.reply(m.chat, contoh, m)
		}
}

handler.help = ['sell item jumlah']
handler.command = /^sell$/i
handler.limit = false
handler.group = true
handler.register = true

module.exports = handler