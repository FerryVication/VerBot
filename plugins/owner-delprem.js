let handler = async (m, { conn, text }) => {

    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = text
    if (!who) throw `tag orangnya!`
    let usr = who+'@s.whatsapp.net'
    if (!global.prems.includes(who.split`@`[0])) throw 'dia ngga premium!'
    let index = global.prems.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
    global.prems.splice(index, 1)
    global.db.data.users[usr].premiumDate = 0
    global.db.data.users[usr].premium = false
    conn.reply(m.chat, `@${who.split('@')[0]} sekarang bukan premium!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })

}
handler.help = ['delprem [@user]']
handler.tags = ['owner']
handler.command = /^(remove|hapus|-|del)prem$/i

handler.owner = true

module.exports = handler
