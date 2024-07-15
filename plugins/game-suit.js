let handler = async (m, { text, usedPrefix }) => {
    let salah = `Pilihan yang tersedia\n\ngunting, kertas, batu\n\n${usedPrefix}suit gunting\n\nkasih spasi!`
    jid = "6288225349583"
	jid = jid.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    if (!text) throw salah
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'batu'
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'gunting'
    } else {
        astro = 'kertas'
    }

    //menentukan rules
    if (text == astro) {
        m.reply(`Seri!\nkamu: ${text}\nBot: ${astro}`)
    } else if (text == 'batu') {
        if (astro == 'gunting') {
            global.db.data.users[m.sender].money += 1000
            m.reply(`Kamu menang! +Rp1000\nKamu: ${text}\nBot: ${astro}`)
        } else {
        	global.db.data.users[m.sender].money -= 250
        	global.db.data.users[jid].money += 1000
            m.reply(`Kamu kalah! -Rp.250\nkamu: ${text}\nBot: ${astro}`)
        }
    } else if (text == 'gunting') {
        if (astro == 'kertas') {
            global.db.data.users[m.sender].money += 1000
            m.reply(`Kamu menang! +Rp1000\nKamu: ${text}\nBot: ${astro}`)
        } else {
        	global.db.data.users[m.sender].money -= 250
            global.db.data.users[jid].money += 1000
            m.reply(`Kamu kalah! -Rp.250\nkamu: ${text}\nBot: ${astro}`)
        }
    } else if (text == 'kertas') {
        if (astro == 'batu') {
            global.db.data.users[m.sender].money += 1000
            m.reply(`Kamu menang! +Rp1000\nKamu: ${text}\nBot: ${astro}`)
        } else {
        	global.db.data.users[m.sender].money -= 250
            global.db.data.users[jid].money += 1000
            m.reply(`Kamu kalah! -Rp.250\nkamu: ${text}\nBot: ${astro}`)
        }
    } else {
        throw salah
    }
}
handler.help = ['suit']
handler.tags = ['game']
handler.group = true
handler.command = /^(suit)$/i

module.exports = handler
