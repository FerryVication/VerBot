let handler = async (m, { conn, text, args, usedPrefix, command, isPrems }) => {
	const {
		proto,
		generateWAMessageFromContent,
		prepareWAMessageMedia
	} = require('@adiwajshing/baileys');
	let img = `https://raw.githubusercontent.com/clicknetcafe/Databasee/main/azamibot/media/picbot/menus/menus_${getRandomThreeDigitNumber()}.jpg` 
	let limit = db.data.users[m.sender].limit
	const footer = `*© 𝚅𝚎𝚛𝙱𝚘𝚝𝚇* \n`;
	let namebot = global.namebot
	let caption = `  
  ┌────···[ *ʜᴏᴡ ᴛᴏ ʙᴜʏ* ]···────✧
 │
 │  • ꜱᴄᴀɴ ᴋᴏᴅᴇ Qʀ ᴅɪᴀᴛᴀꜱ
 │  • ʟᴀᴋᴜᴋᴀɴ ᴘᴇᴍʙᴀʏᴀʀᴀɴ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ
 │  	ᴅᴏᴍᴘᴇᴛ ᴅɪɢɪᴛᴀʟ ᴀɴᴅᴀ
 │  • ꜱᴄʀᴇᴇɴꜱʜᴏᴛ ʙᴜᴋᴛɪ ᴘᴇᴍʙᴀʏᴀʀᴀɴ
 │  • ᴋɪʀɪᴍ ʙᴜᴋᴛɪ ᴘᴇᴍʙᴀʏᴀʀᴀɴ
 │  • ᴛᴇᴋᴀɴ ᴛᴏᴍʙᴏʟ ᴅɪʙᴀᴡᴀʜ ᴜɴᴛᴜᴋ
 │  	ᴍᴇɴɢɪʀɪᴍ ʙᴜᴋᴛɪ ᴘᴇᴍʙᴀʏᴀʀᴀɴ ᴋᴀᴍᴜ
 ├───────────────────────`
 let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: caption.trim()
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: footer
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            ...(await prepareWAMessageMedia({
              image: {
                url: `https://telegra.ph/file/21ae0f8307bd12ffeef2e.jpg`
              }
            }, {
              upload: conn.waUploadToServer
            })),
            title: '',
            gifPlayback: true,
            subtitle: `𝚅𝚎𝚛𝙱𝚘𝚝𝚇`,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                	display_text: "ᴋɪʀɪᴍ ʙᴜᴋᴛɪ",
                	url: 'https://wa.me/6285133756729?text=bukti+pembayaran',
                	merchant_url: 'https://wa.me/6285133756729?text=bukti+pembayaran'
                })
              }
            ]
          }),
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: false,
            forwardedNewsletterMessageInfo: {
              newsletterJid: '0@newsletter',
              newsletterName: '',
              serverMessageId: 143
            },
            externalAdReply: {
              title: namebot,
              body: namebot,
              mediaType: 1,
              previewType: 0,
              renderLargerThumbnail: false,
              thumbnailUrl: 'https://telegra.ph/file/c9f09f6a152d14f52e737.jpg',
              sourceUrl: ''
            }
          }
        })
      }
    }
  }, {});

  await conn.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
  });
  }
	
handler.help = handler.command = ['payment']
handler.limit = false
handler.register = true

module.exports = handler

function getRandomThreeDigitNumber() {
    const randomNumber = Math.floor(Math.random() * 44); // Menghasilkan angka acak antara 0 dan 43
    return String(randomNumber).padStart(3, '0'); // Mengonversi ke string dan menambahkan nol di depannya jika perlu
}