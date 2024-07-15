let fs = require('fs')
let handler = async (m, { conn, text }) => {
    m.reply('Tunggu Sebentar, Proses Getting File Database')
    let sesi = await fs.readFileSync('./plugins/db_user/databaseEmail.json')
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'databaseEmail.json' }, { quoted: m })
}
handler.help = ['getdbemail']
handler.command = /^(getdbemail)$/i

handler.rowner = true

module.exports = handler