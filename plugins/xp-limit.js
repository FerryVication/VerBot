let handler = async (m, { isPrems }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let limitnya = global.db.data.users[who].limit
    fdoc = {
  key : {
  remoteJid: 'status@broadcast',
  participant : '0@s.whatsapp.net'
  },
  message: {
  documentMessage: {
  title: wm, 
                            }
                          }
                        }
m.reply(`*Limit Kamu :* ${isPrems ? 'ᴜɴʟɪᴍɪᴛᴇᴅ' : limitnya}`)

}
handler.help = ['limit [@user]']
handler.tags = ['xp']
handler.register = true
handler.command = /^(limit)$/i
module.exports = handler