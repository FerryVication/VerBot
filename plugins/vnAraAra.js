let handler = async (m, { conn }) => {
conn.sendFile(m.chat, './media/ara_ara.mp3', '', null, m, true, { type: "audioMessage", ptt: true, fileLength: 88738 })
}
       
handler.customPrefix = /^(ara ara|ara)/i

handler.limit = false
handler.command = new RegExp
module.exports = handler