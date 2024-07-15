let fetch = require('node-fetch')

let timeout = 100000
let poin = 1000
let handler = async (m, { conn, usedPrefix }) => {
    conn.jenaka = conn.jenaka ? conn.jenaka : {}
    let id = m.chat
    if (id in conn.jenaka) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.jenaka[id][0])
        throw false
    }
    // di sini dia ngambil data dari api
    let src = await (await fetch(`https://api.betabotz.eu.org/api/game/tebakjenaka?apikey=${lann}`)).json()
    let json = src[Math.floor(Math.random() * src.length)]
    // buat caption buat di tampilin di wa
    let caption = `
${json.result.pertanyaan}

┌─⊷ *INFO*
▢ Timeout *${(timeout / 1000).toFixed(2)} detik*
▢ Ketik ${usedPrefix}jenang untuk bantuan
▢ Bonus: ${poin} XP
▢ *Balas/ reply soal ini untuk menjawab*
└──────────────
`.trim()
    conn.jenaka[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.jenaka[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.result.jawaban}*`, conn.jenaka[id][0])
            delete conn.jenaka[id]
        }, timeout)
    ]
}
handler.help = ['jenaka']
handler.tags = ['game']
handler.command = /^jenaka/i
handler.register = false
handler.group = true
handler.limit = true

module.exports = handler

// tested di bileys versi 6.5.0 dan sharp versi 0.30.5