let fetch = require('node-fetch')

  var hl = []
  
let timeout = 180000
let poin = 500
let tiketcoin = 1
let handler = async (m, { conn, usedPrefix }) => {
    conn.caklontong = conn.caklontong ? conn.caklontong : {}
    let id = m.chat
    if (id in conn.caklontong) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.caklontong[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
📝 *Soal* : ${json.soal}

⏱️ *Timeout* *${(timeout / 1000).toFixed(2)} detik*
👀 *Ketik* ${usedPrefix}calo untuk bantuan
👀 *Ketik* .nyerah-calo untuk menyerah
🎃 *Bonus* : ${poin} XP
🎫 *Tiketcoin* : ${tiketcoin} TiketCoin
`.trim()
    conn.caklontong[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.caklontong[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*\n${json.deskripsi}`, conn.caklontong[id][0])
            delete conn.caklontong[id]
        }, timeout)
    ]
}
handler.help = ['caklontong']
handler.tags = ['game']
handler.command = /^caklontong/i
handler.limit = true
handler.register = true

module.exports = handler