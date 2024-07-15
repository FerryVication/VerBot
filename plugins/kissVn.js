let handler = async (m, { conn }) => {
conn.sendFile(m.chat, './media/mwah.mp3', '', null, m, true, { type: "audioMessage", ptt: true, fileLength: 88738 })
}
       
handler.customPrefix = /^(kiss|cium|sun)/i

handler.limit = false
handler.command = new RegExp
module.exports = handler