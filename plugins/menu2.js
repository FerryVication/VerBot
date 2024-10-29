const {
  proto,
  generateWAMessageFromContent,
  prepareWAMessageMedia
} = require('@adiwajshing/baileys');
const moment = require("moment-timezone");
let fs = require('fs')
const fetch = require("node-fetch");
let levelling = require('../lib/levelling')
let handler = async (m, {
  conn,
  groupMetadata,
  usedPrefix,
  isPrems,
  command
}) => {
  let { limit, role, level, exp, premiumTime } = db.data.users[m.sender]
  let ucpn = ucapan()
  let _uptime = process.uptime() * 1000
  let ver = clockString(_uptime)
  let diBanned = Object.entries(global.db.data.users).filter(user => user[1].banned)
  let { name, pasangan, money, bank, lastclaim, premiumDate, premium, registered, regTime, age } = global.db.data.users[m.sender]
  let namebot = global.namebot
  let ppl = await (await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'));
  const text = `> Kami Melayani Dengan Hati dan Teknologi`;
  const footer = `*© 𝚅𝚎𝚛𝙱𝚘𝚝𝚇* \n`;
  const caption = `*✧────···[ ᴍᴀɪɴ ᴍᴇɴᴜ ]···────✧*
  \tʜᴀʟʟᴏ, ${ucpn} ${registered ? name : ''}
  ├────···[ ᴘᴇɴɢɢᴜɴᴀ ]···────✧
  │⬡ *ɴᴀᴍᴀ : ${registered ? name : ''}*
  │⬡ *ᴜᴍᴜʀ : ${age} ᴛᴀʜᴜɴ*
  │⬡ *ʟᴇᴠᴇʟ : ${level}*
  │⬡ *ʀᴏʟᴇ : ${role}*
  │⬡ *ᴘʟᴀɴ* : ${isPrems ? 'ᴘʀᴇᴍɪᴜᴍ ᴜꜱᴇʀ👑' : 'ꜰʀᴇᴇ ᴜꜱᴇʀ😜'}
  │⬡ *ʟɪᴍɪᴛ* : ${isPrems ? 'ᴜɴʟɪᴍɪᴛᴇᴅ' : limit}
  ├────···[ *ᴠ.1.7.0* ]···────✧
  │⬡ *ᴠᴇʀʙᴏᴛx ᴛᴇʟᴀʜ ᴀᴋᴛɪꜰ ꜱᴇʟᴀᴍᴀ* : 
  │⬡ ${ver}
  │⬡ *ᴘʀᴇꜰɪx* : [ ${usedPrefix} ]
  │⬡ *${Object.keys(global.db.data.users).length}* ᴘᴇɴɢɢᴜɴᴀ ᴠᴇʀʙᴏᴛx
  │⬡ *${diBanned.length}* ᴘᴇɴɢɢᴜɴᴀ ᴛᴇʀʙᴀɴɴᴇᴅ
  ├────···[ *𝚂𝚄𝙱 𝙼𝙴𝙽𝚄* ]···────✧
  │
  │⬡ ${usedPrefix}stickermenu
  │⬡ ${usedPrefix}populerfitur
  │⬡ ${usedPrefix}rpgmenu
  │⬡ ${usedPrefix}nsfwmenu
  │⬡ ${usedPrefix}downloadermenu
  ┬
  ├━━━━━━━━━━━━━━━━┈─⋆
  │ ▸ *ᴀᴜᴛʜᴏʀ :* ꜰᴇʀɪ ᴘʀᴀᴛᴀᴍᴀ
  ┴ ▸ *ᴏᴡɴᴇʀ :* ꜰᴇʀʀʏ
  │
  ┬ 📌 ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ ᴜɴᴛᴜᴋ :
  │
  │ ⬡ ${usedPrefix}donate
  │⬡ ${usedPrefix}feedback
  │
  ╰━━━━━━━━━━━━━━━━┈─◂`
/*
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
                name: "quick_reply",
                buttonParamsJson: "{\"display_text\":\"ꜱᴛɪᴄᴋᴇʀ ᴍᴀᴋᴇʀ\",\"id\":\".stickermenu\"}"
              },
              /*{
                name: "quick_reply",
                buttonParamsJson: "{\"display_text\":\"ʀᴀɴᴅᴏᴍ\",\"id\":\".randommenu\"}"
              },*/
              /*{
                name: "quick_reply",
                buttonParamsJson: "{\"display_text\":\"ᴘᴏᴘᴜʟᴀʀ\",\"id\":\".populerfitur\"}"
              },
              {
                name: "quick_reply",
                buttonParamsJson: "{\"display_text\":\"ɢᴀᴍᴇ ʀᴘɢ\",\"id\":\".rpgmenu\"}"
              },
              {
                name: "quick_reply",
                buttonParamsJson: "{\"display_text\":\"ɴꜱꜰᴡ ( 18+ )\",\"id\":\".nsfwmenu\"}"
              },
              {
                name: "quick_reply",
                buttonParamsJson: "{\"display_text\":\"ᴅᴏᴡɴʟᴏᴀᴅᴇʀ\",\"id\":\".downloadermenu\"}"
              }
            ]
          }),
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: false,
            forwardedNewsletterMessageInfo: {
              newsletterJid: '0@newsletter',
              newsletterName: name,
              serverMessageId: 143
            },
            externalAdReply: {
              title: ucapan(),
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
  conn.sendMessage(m.chat, {
  	video: fs.readFileSync('./media/thumb.mp4'),
  	gifPlayback: true,
  	caption: caption,
  	contextInfo: {
		externalAdReply: {
			title: `${ucpn} ${registered ? name : ''}`,
			body: 'Technology and Bot Automation',
			thumbnailUrl: `https://raw.githubusercontent.com/clicknetcafe/Databasee/main/azamibot/media/picbot/menus/menus_${getRandomThreeDigitNumber()}.jpg`,
			sourceUrl: 'https://whatsapp.com/channel/0029Vag7tk2L7UVcZjpKa40S',
			mediaType: 1,
			renderLargerThumbnail: true
		}
	}
  })
};

handler.help = ["menu"];
handler.tags = ["main"];
handler.command = /^menu|info|help|hai$/i

handler.register = true;

module.exports = handler;

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

function clockString(ms) {
  let days = Math.floor(ms / (24 * 60 * 60 * 1000));
  let daysms = ms % (24 * 60 * 60 * 1000);
  let hours = Math.floor((daysms) / (60 * 60 * 1000));
  let hoursms = ms % (60 * 60 * 1000);
  let minutes = Math.floor((hoursms) / (60 * 1000));
  let minutesms = ms % (60 * 1000);
  let sec = Math.floor((minutesms) / (1000));
  return days + " ʜᴀʀɪ " + hours + " ᴊᴀᴍ " + minutes + " ᴍᴇɴɪᴛ " + sec + " ᴅᴇᴛɪᴋ ";
}

function getRandomThreeDigitNumber() {
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * 35); // Menghasilkan angka acak antara 0 dan 34
    } while (randomNumber === 0);
    return String(randomNumber).padStart(3, '0'); // Mengonversi ke string dan menambahkan nol di depannya jika perlu
}

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ ᴛɪᴅᴜʀ ᴋᴀᴋ💗"
  if (time >= 4) {
    res = "ꜱᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ ᴋᴀᴋ"
  }
  if (time > 10) {
    res = "ꜱᴇʟᴀᴍᴀᴛ ꜱɪᴀɴɢ ᴋᴀᴋ"
  }
  if (time >= 15) {
    res = "ꜱᴇʟᴀᴍᴀᴛ ꜱᴏʀᴇ ᴋᴀᴋ"
  }
  if (time >= 18) {
    res = "ꜱᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ ᴋᴀᴋ"
  }
  return res
}