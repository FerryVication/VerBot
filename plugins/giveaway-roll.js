let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.giveway = conn.giveway ? conn.giveway : {}
    if (!(id in conn.giveway)) throw `_*Tidak ada GIVEAWAY berlangsung digrup ini!*_\n\n*${usedPrefix}mulaigiveaway* - untuk memulai giveaway`

    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let absen = conn.giveway[id][1]
    let cita = absen[Math.floor(Math.random() * absen.length)]
    let tag = `@${cita.split`@`[0]}`
    let loadd = [
 '《 █▒▒▒▒▒▒▒▒▒▒▒》10%',
 '《 ████▒▒▒▒▒▒▒▒》30%',
 '《 ███████▒▒▒▒▒》50%',
 '《 ██████████▒▒》80%',
 '《 ████████████》100%',
 '"𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳..."',
 ]

let { key } = await conn.sendMessage(m.chat, {text: '*Mencari Pemenangnya*'})

for (let i = 0; i < loadd.length; i++) {
await sleep(1000)
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })} return conn.reply(m.chat, `👑 *CONGRATULATIONS* 👑
❤️ : ${tag} Kamu Pemenang Giveawaynya🏅

📅 PadaTanggal : ${date}

_*Note:* Hapus giveaway setelah selesai dengan menulis *.hapusgiveaway*_`, m, { contextInfo: { mentionedJid: absen } })
}
handler.help = ['rollgiveaway']
handler.tags = ['adminry', 'group']
handler.command = /^(rolling|rollgiveway|rollinggiveaway)$/i
handler.admin = true
module.exports = handler

const sleep = (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
