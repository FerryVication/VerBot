const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*teblir/i.test(m.quoted.text)) return !0
    this.jenaka = this.jenaka ? this.jenaka : {}
    if (!(id in this.jenaka)) return m.reply('Soal itu telah berakhir')
    if (m.quoted.id == this.jenaka[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.jenaka[id][1]))
        if (m.text.toLowerCase() == json.result.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.jenaka[id][2]
            m.reply(`*Benar!*\n+${this.jenaka[id][2]} XP`)
            clearTimeout(this.jenaka[id][3])
            delete this.jenaka[id]
        } else if (similarity(m.text.toLowerCase(), json.result.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
        else m.reply(`*Salah!*`)
    }
    return !0
}
handler.exp = 0

module.exports = handler