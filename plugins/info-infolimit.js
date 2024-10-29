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
 ┌────···[ *ɪɴꜰᴏ ʟɪᴍɪᴛ* ]···────✧
 │
 │	ꜱɪꜱᴀ ʟɪᴍɪᴛ ᴋᴀᴍᴜ : *${isPrems ? 'ᴜɴʟɪᴍɪᴛᴇᴅ' : limit}*
 │
 ├────···[ *ɪɴꜰᴏ* ]···────────
 │
 │  ᴛᴇʀᴅᴀᴘᴀᴛ ᴅᴜᴀ ᴄᴀʀᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ʟɪᴍɪᴛ : 
 │  ᴍᴇᴍʙᴇʟɪ ᴀᴋꜱᴇꜱ ᴘʀᴇᴍɪᴜᴍ
 │  ɢᴀʙᴜɴɢ ɢʀᴏᴜᴘ ᴋʜᴜꜱᴜꜱ ᴄʟᴀɪᴍʟɪᴍɪᴛ
 │  
 ├────···[ *ɢᴀʙᴜɴɢ ɢʀᴏᴜᴘ* ]···──
 │
 │⬡ ${usedPrefix}gcbot
 │
 ├────···[ *ʙᴇʟɪ ʟɪᴍɪᴛ* ]···─────────
 │
 │⬡ ${usedPrefix}plans
 │
 └ `
 /*let msg = generateWAMessageFromContent(m.chat, {
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
                name: "quick_reply",
                buttonParamsJson: "{\"display_text\":\"ʙᴇʟɪ ʟɪᴍɪᴛ\",\"id\":\".plans\"}"
              },
              {
                name: "quick_reply",
                buttonParamsJson: "{\"display_text\":\"ɢᴀʙᴜɴɢ ɢʀᴏᴜᴘ\",\"id\":\".gcbot\"}"
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
  });*/
  m.reply(caption);
  }
	
handler.command = /^infolimit$/i
handler.limit = false
handler.register = true

module.exports = handler

function getRandomThreeDigitNumber() {
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * 35); // Menghasilkan angka acak antara 0 dan 34
    } while (randomNumber === 0);
    return String(randomNumber).padStart(3, '0'); // Mengonversi ke string dan menambahkan nol di depannya jika perlu
}