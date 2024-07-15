let handler = async (m, { conn }) => {
    try {
    conn.susunkata = conn.susunkata ? conn.susunkata : {}
    let id = m.chat
    if (!(id in conn.susunkata)) throw false
    let json = conn.susunkata[id][1]
    let ans = json.jawaban.trim()
    delete conn.susunkata[id]
     m.reply(`anda berhasil menyerah dari soal tersebut\ndan jawabannya: ${ans}`)
        } catch (e) { m.reply('tidak ada soal untuk saat ini') }
}
handler.command = /^nyerah-suska$/i
handler.limit = true

module.exports = handler