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
  ┌────···[ *ᴋʀɪᴛɪᴋ ᴅᴀɴ ꜱᴀʀᴀɴ* ]···────✧
 │
 │	ꜱɪʟᴀʜᴋᴀɴ ꜱᴀᴍᴘᴀɪᴋᴀɴ ᴋʀɪᴛɪᴋ, ꜱᴀʀᴀɴ, 
 │	ʀᴇQᴜᴇꜱᴛ ᴋᴀʟɪᴀɴ ᴘᴀᴅᴀ ɢᴏᴏɢʟᴇ ꜰᴏʀᴍᴜʟɪʀ 
 │	ᴅɪʙᴀᴡᴀʜ ɪɴɪ ᴋʟɪᴋ ᴛᴏᴍʙᴏʟ ᴅɪʙᴀᴡᴀʜ ᴜɴᴛᴜᴋ 
 │	ᴍᴇɴɢɪꜱɪ ɢᴏᴏɢʟᴇ ꜰᴏʀᴍᴜʟɪʀ
 │
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
                url: `https://raw.githubusercontent.com/clicknetcafe/Databasee/main/azamibot/media/picbot/menus/menus_${getRandomThreeDigitNumber()}.jpg` 
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
                	display_text: "ʀᴇQᴜᴇꜱᴛ ꜰᴇᴀᴛᴜʀᴇ",
                	url: 'https://forms.gle/ctBc2vcvP91oVALh9',
                	merchant_url: 'https://forms.gle/ctBc2vcvP91oVALh9'
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
              thumbnailUrl: `https://raw.githubusercontent.com/clicknetcafe/Databasee/main/azamibot/media/picbot/menus/menus_${getRandomThreeDigitNumber()}.jpg`,
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
	
handler.help = handler.command = ['feedback','saran']
handler.limit = false
handler.register = true

module.exports = handler

function getRandomThreeDigitNumber() {
    const randomNumber = Math.floor(Math.random() * 44); // Menghasilkan angka acak antara 0 dan 43
    return String(randomNumber).padStart(3, '0'); // Mengonversi ke string dan menambahkan nol di depannya jika perlu
}